const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectPostTemplate = path.resolve('./src/templates/postTemplate.js')
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  res.data.allMarkdownRemark.edges.forEach((edge) => {
    if (edge.node.frontmatter.path.includes('blog')) {
      createPage({
        component: projectPostTemplate,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug
        }
      })
    } else {
      createPage({
        component: projectPostTemplate,
        path: `/projects/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug
        }
      })
    }
  })
}

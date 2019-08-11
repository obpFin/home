import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card/card"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              tags
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
  const isBlogPost = (post) => post.node.frontmatter.path.includes('blog')
  const renderPosts = () => {
    return data.allMarkdownRemark.edges.map((data, i) => isBlogPost(data) && (
      <Link key={i} to={`/blog/${data.node.fields.slug}`}>
        <Card data={data}/>
      </Link>
    ))
  }
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="projects grid">{renderPosts()}</div>
    </Layout>
  )
}

export default BlogPage

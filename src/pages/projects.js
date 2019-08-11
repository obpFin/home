import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card/card"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
              repo
              date
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const isProjectPost = (post) => post.node.frontmatter.path.includes('projects')
  const renderPosts = () => {
    return data.allMarkdownRemark.edges.map((data, i) => isProjectPost(data) && (
      <Link key={i} to={`/projects/${data.node.fields.slug}`}>
        <Card data={data}/>
      </Link>
    ))
  }
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="projects grid">{renderPosts()}</div>
    </Layout>
  )
}

export default ProjectsPage

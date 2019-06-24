import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const renderPosts = () => {
    return data.allMarkdownRemark.edges.map((post, i) => (
      <li key={i} className="post">
        <Link to={`/projects/${post.node.fields.slug}`}>
          <h2 href={`/projects/${post.node.fields.slug}`}>{post.node.frontmatter.title}</h2>
          <p>{post.node.frontmatter.date}</p>
        </Link>

      </li>
    ))
  }
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog page</h1>
      <ul>{renderPosts()}</ul>
    </Layout>
  )
}

export default ProjectsPage

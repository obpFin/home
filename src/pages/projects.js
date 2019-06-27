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
  const renderPosts = () => {
    return data.allMarkdownRemark.edges.map((data, i) => (
      <Link key={i} to={`/projects/${data.node.fields.slug}`}>
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

export default ProjectsPage

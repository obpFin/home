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
  const changeCategory = () => null
  const isBlogPost = post => post.node.frontmatter.path.includes("blog")
  const renderPosts = () => {
    return data.allMarkdownRemark.edges.map(
      (data, i) =>
        isBlogPost(data) && (
          <Link key={i} to={`/blog/${data.node.fields.slug}`}>
            <Card data={data} />
          </Link>
        )
    )
  }
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog">
        <div className="buttongroup">
            <input
            id="misc"
            type="radio"
              value="work"
              name="market"
              onChange={changeCategory}
              checked
            />
            <label htmlFor="work">Work</label>
            <input id="misc" type="radio" value="misc" name="market" />
            <label htmlFor="misc">Misc</label>
          </div>
          <div className="projects grid">{renderPosts()}</div>
        </div>
      </Layout>
    )
  }

export default BlogPage

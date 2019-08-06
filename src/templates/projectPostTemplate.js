import React from "react"
import { graphql, Link } from "gatsby"
import Image from "../components/image"

import Layout from "../components/layout"
import { Calendar, Tag, ArrowLeft, GitHub } from 'react-feather';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, fields } = markdownRemark
  const repoUrl = `github.com/obpFin/${frontmatter.repo}`
  console.log(frontmatter)
  return (
    <Layout>
      <div className="project">
        <div className="content">
          <section>
            <h1>{frontmatter.title}</h1>
            <div className="date row"><Calendar/><h2>{frontmatter.date}</h2></div>
            <div className="tags row">
              <Tag/>
              <ul>
                {frontmatter.tags.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <div className="github row">
              <GitHub/>
              <a className="" target="_blank" href={`https://${repoUrl}`} rel="noopener noreferrer">
                {repoUrl}</a>
            </div>
            {
              
            }
            <Image filename={`${fields.slug}.png`} alt={frontmatter.title}/>
          </section>
          <section
            id="text"
            dangerouslySetInnerHTML={{ __html: html }}
          >
          </section>
          <Link to="/projects"><ArrowLeft/> projects index</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query (
    $slug: String!
  ) {
    markdownRemark (
      fields:{
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        repo
        # featuredImage {
        #   childImageSharp{
        #       sizes(maxWidth: 630) {
        #           ...GatsbyImageSharpSizes
        #       }
        #   }
      #}
      }
      fields {
        slug
      }
      html
    }
  }
  `
import React from "react"
import { graphql } from "gatsby"
import Image from "../components/image"

import Layout from "../components/layout"
import { Calendar, Tag } from 'react-feather';

import '../styles/blogPost.scss'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, fields } = markdownRemark
  return (
    <Layout>
      <div className="project">
        <div className="content">
          <h1>{frontmatter.title}</h1>
          <div className="date row"><Calendar/><h2>{frontmatter.date}</h2></div>
          <div className="tags row">
            <Tag/>
            <ul>
              {frontmatter.tags.map(t => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <Image filename={`${fields.slug}.png`} alt={frontmatter.title}/>
          <div
            id="text"
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
        date
        tags
      }
      fields {
        slug
      }
      html
    }
  }
  `
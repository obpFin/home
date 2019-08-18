import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card/card"
import { ButtonGroup } from "../components/buttongroup/Buttongroup"

const blogFilters = {
  work: 'work',
  misc: 'misc'
}

class BlogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeFilter: blogFilters.work
    }
  }

  isBlogPost = post => post.node.frontmatter.path.includes("blog")

  changeFilter = name => this.setState({ activeFilter: blogFilters[name] })
    
  renderPosts = () => {
    const data = this.props.data
    return data.allMarkdownRemark.edges.map(
      (data, i) =>
        this.isBlogPost(data) && (
          <Link key={i} to={`/blog/${data.node.fields.slug}`}>
            <Card data={data} />
          </Link>
        )
    )
  }
  render() {
    return (
      <Layout>
        <SEO title="Blog" />
        <div className="blog">
          <ButtonGroup active={this.state.activeFilter} changeFilter={this.changeFilter}/>
          <div className="projects grid">{this.renderPosts()}</div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
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
`

export default BlogPage

import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <p>This is a very unfinished version you know</p>
    <div style={{ maxWidth: '300px', marginTop: '10vh'}}>
      <Image filename="gatsby-astronaut.png"/>
    </div>
  </Layout>
)

export default IndexPage

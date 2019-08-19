import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index">
      <h1>Hello</h1>
      <p>This is a very unfinished version you know</p>
      <div style={{ marginTop: "5vh" }}>
        <Image filename="drift.jpg" />
      </div>
    </div>
  </Layout>
)

export default IndexPage

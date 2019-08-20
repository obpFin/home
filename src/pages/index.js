import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index">
      <h1>Hello!</h1>
      <div>
        <Image filename="drift.jpg" />
      </div>
    </div>
  </Layout>
)

export default IndexPage  

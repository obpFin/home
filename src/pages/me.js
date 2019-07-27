import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ShellBlock } from "../components/shellBlock/shellBlock"

const MePage = () => (
  <Layout>
    <SEO title="Me" />
    <div className="me">
      <ShellBlock>whois oskaripeltonen</ShellBlock>
    </div>
  </Layout>
)

export default MePage

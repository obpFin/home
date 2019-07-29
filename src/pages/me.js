import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ShellBlock } from "../components/shellBlock/shellBlock"

const interestsIcons = ['gaming.png', 'exercising.png', 'music.png', 'photography.png']

const MePage = () => (
  <Layout>
    <SEO title="Me" />
    <div className="me">
      <section>
        <ShellBlock>whois oskaripeltonen</ShellBlock>
        <p>Born and raised in the great city of Pori, Finland. Moved to Capitol area in 2017, currently living in Helsinki.</p>
        <h2>Interests</h2>
        <div className="me--interests">
          {interestsIcons.map(i => {
            return (
              <div>
                <Image filename={i}/>
                <i>{i.split(".")[0]}</i>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  </Layout>
)

export default MePage

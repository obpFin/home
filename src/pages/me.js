import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ShellBlock } from "../components/shellBlock/shellBlock"
import { Linkedin, Instagram, GitHub } from 'react-feather'

const interestsIcons = ['travel.png', 'gaming.png', 'exercising.png', 'music.png', 'photography.png']

const MePage = () => (
  <Layout>
    <SEO title="Me" />
    <div className="me">
      <section>
        <ShellBlock>whois oskaripeltonen</ShellBlock>
        <p className="mono">Born and raised in the great city of Pori, Finland. Moved to Capitol area in 2017, currently living in Helsinki.</p>
        <div className="row info">
          <div className="me--interests block">
            <h2>Interests</h2>
            {interestsIcons.map(i => {
              return (
                <div>
                  <Image filename={i}/>
                  <i>{i.split(".")[0]}</i>
                </div>
              )
            })}
          </div>
          <div className="me--social block">
            <h2>Social</h2>
            <div className="row">
              <a className="white" target="_blank" href="https://www.linkedin.com/in/oskari-peltonen/">
                <Linkedin/>
              </a>
              <a className="white" target="_blank" href="https://www.instagram.com/obp_fi/">
                <Instagram/>
              </a>
              <a className="white" target="_blank" href="https://github.com/obpFin">
                <GitHub/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default MePage

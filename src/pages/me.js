import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ShellBlock } from "../components/shellBlock/shellBlock"
import { Linkedin, Instagram, GitHub } from 'react-feather'

const interestsIcons = ['travel.png', 'gaming.png', 'exercising.png', 'music.png', 'photography.png']
const introduction = "Born and raised in the great city of Pori, Finland. Moved to Capitol area in 2017, currently living in Helsinki."
const social = {
  linkedin: "https://www.linkedin.com/in/oskari-peltonen/",
  instagram: "https://www.instagram.com/obp_fi/",
  github: "https://github.com/obpFin"
}

const MePage = () => (
  <Layout>
    <SEO title="Me" />
    <div className="me">
      <section>
        <ShellBlock>whois oskaripeltonen</ShellBlock>
        <p className="mono">{introduction}</p>
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
              <a className="white" target="_blank" href={social.linkedin}>
                <Linkedin/>
              </a>
              <a className="white" target="_blank" href={social.instagram}>
                <Instagram/>
              </a>
              <a className="white" target="_blank" href={social.github}>
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

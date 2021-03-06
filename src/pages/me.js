import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ShellBlock } from "../components/shellBlock/shellBlock"
import { Linkedin, Instagram, GitHub, Youtube } from 'react-feather'

const interestsIcons = ['travel.png', 'gaming.png', 'exercising.png', 'music.png', 'photography.png']
const introduction = "Born and raised in the great city of Pori, Finland. Moved to Capitol area in 2017, currently living in Helsinki."
const social = {
  linkedin: "https://www.linkedin.com/in/oskari-peltonen/",
  instagram: "https://www.instagram.com/obp_fi/",
  github: "https://github.com/obpFin",
  youtube: "https://www.youtube.com/user/obptube",
}
const skills = ["Web development", "Mobile development", "UI design"]

const MePage = () => (
  <Layout>
    <SEO title="Oskari Peltonen" />
    <div className="me">
      <section>
        <ShellBlock>whois oskaripeltonen</ShellBlock>
        <p className="mono">{introduction}</p>
        <div className="row info">
          <div className="me--interests block">
            <h2>Interests</h2>
            {interestsIcons.map(i => {
              return (
                <div key={i}>
                  <Image filename={i}/>
                  <i>{i.split(".")[0]}</i>
                </div>
              )
            })}
          </div>
          <div className="me--social block">
            <h2>Social</h2>
            <div className="row">
              <a className="white" target="_blank" href={social.linkedin} rel="noopener noreferrer">
                <Linkedin/>
              </a>
              <a className="white" target="_blank" href={social.instagram} rel="noopener noreferrer">
                <Instagram/>
              </a>
              <a className="white" target="_blank" href={social.youtube} rel="noopener noreferrer">
                <Youtube/>
              </a>
              <a className="white" target="_blank" href={social.github} rel="noopener noreferrer">
                <GitHub/>
              </a>
            </div>
          </div>
          <div className="me--career block">
            <h2>Work</h2>
            <div className="row">
            {skills.map(i => {
              return (
                <div key={i}>
                  <i>{i}</i>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default MePage

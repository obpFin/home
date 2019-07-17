import React from "react"
import PropTypes from "prop-types"
import Image from "../../components/image"

import './card.scss'

const Card = (props) => (
  <div className="card">
      <Image filename={`${props.data.node.fields.slug}.png`} alt={props.data.node.frontmatter.title}/>
      <ul>
        <li className="card--title">{props.data.node.frontmatter.title}</li>
        <li className="card--text">{props.data.node.frontmatter.tags.map(t => <span key={t}> &#8251; {t}  </span>)}</li>
      </ul>
  </div>
)

Card.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Card

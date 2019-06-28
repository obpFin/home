import React from "react"
import PropTypes from "prop-types"
import Image from "../../components/image"

import './card.scss'

const Card = (props) => (
  <div className="card">
      <Image filename="placeholder.jpg" alt={props.data.node.frontmatter.title}/>
      <ul>
        <li className="card--title">{props.data.node.frontmatter.title}</li>
        <li className="card--date">{props.data.node.frontmatter.tags.map(t => <span>{t}</span>)}</li>
      </ul>
  </div>
)

Card.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Card

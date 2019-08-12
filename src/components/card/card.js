import React from "react"
import PropTypes from "prop-types"
import Image from "../../components/image"

import './card.scss'

const Card = (props) => (
  <div className="card">
      <Image filename={`${props.data.node.fields.slug}.png`} alt={props.data.node.frontmatter.title}/>
      <ul>
        <li className="card--title">
          <div>
            {props.data.node.frontmatter.title}
          </div>
        </li>
        <li className="card--text">
          <div className="tags">
            {props.data.node.frontmatter.tags.map(t => <span key={t}> # {t}  </span>)}
          </div>
        </li>
      </ul>
  </div>
)

Card.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Card

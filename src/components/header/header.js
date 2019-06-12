import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.scss'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <h1>
        <Link className="title" activeClassName="active" to="/">
          {siteTitle}
        </Link>
      </h1>
      <ul className="nav--list">
        <li>
          <Link className="nav--item" activeClassName="active" to="/">Home</Link>
        </li>
        <li>
          <Link className="nav--item" activeClassName="active" to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

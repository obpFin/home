import React from "react"
import PropTypes from 'prop-types';

import "./shellBlock.scss"

export const ShellBlock = (props) => (
  <div className="shell-block">
    <h1 className="mono">{`[~]$ ${props.children}`}</h1>
  </div>
)

ShellBlock.propTypes = {
  children: PropTypes.string
};

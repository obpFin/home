import React from "react"

export const ButtonGroup = props => (
  <div className="buttongroup">
    <input
      id="work"
      key="work"
      type="radio"
      value="work"
      name="market"
      onChange={() => props.changeFilter("work")}
      checked={props.active == "work"}
    />
    <label htmlFor="work">Work</label>
    <input
      id="misc"
      key="misc"
      type="radio"
      value="misc"
      name="market"
      onChange={() => props.changeFilter("misc")}
      checked={props.active == "misc"}
    />
    <label htmlFor="misc">Misc</label>
  </div>
)

import React from "react"

export class ButtonGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: this.props.initActive }
  }

  changeCategory = (name) => this.setState({active: name})
    
  render() {
    return (
      <div className="buttongroup">
        <input
          id="work"
          key='work'
          type="radio"
          value="work"
          name="market"
          onChange={() => this.changeCategory("work")}
          checked={this.state.active == "work"}
        />
        <label htmlFor="work">Work</label>
        <input
          id="misc"
          key='misc'
          type="radio"
          value="misc"
          name="market"
          onChange={() => this.changeCategory("misc")}
          checked={this.state.active == "misc"}
        />
        <label htmlFor="misc">Misc</label>
      </div>
    )
  }
}

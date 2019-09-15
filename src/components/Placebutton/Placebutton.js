import React, { Component } from "react"

export default class Placebutton extends Component {
  render() {
    return (
      <div style={{
        padding: "2rem",
        border: "5px solid blue",
        margin: "1rem",
      }} onClick={() => {
        this.props.onClick(this.props.place)
      }}>
        {this.props.place.address}
      </div>
    )
  }
}

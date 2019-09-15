import React, { Component } from "react"

export default class LandingCategory extends Component {
  render() {
    return (
      <div onClick={() => this.props.onClick(this.props.label)} style={{
        padding: "6px",
        backgroundColor: "transparent",
        fontSize: "35px",
        // fontWeight: 'bold',
        color: "#000000",
        textAlign: "center",
        fontFamily: "montserrat",
      }}>
        {this.props.label}
      </div>
    )
  }
}

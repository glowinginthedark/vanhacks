import React, { Component } from "react"

export default class Placebutton extends Component {
  render() {
    return (
      <div style={{
        padding: "2rem",
        // border: "5px solid blue",
        margin: "1rem",
        fontWeight: "bold",
        fontFamily:"montserrat"
      }} onClick={() => {
        this.props.onClick(this.props.place)
      }}>
        {this.props.place.name}
        <div style={{
          fontWeight: "normal"
        }}>
        <br></br>
        Call: {this.props.place.phone}

        <hr></hr>
        </div>
      </div>
    )
  }
}

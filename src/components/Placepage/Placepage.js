import React, { Component } from "react"

export default class Placepage extends Component {
  render() {
    return (
      <div style={{
        padding: "2rem",
        // border: "5px solid blue",
        margin: "1rem",
        fontWeight: "bold",
        fontFamily:"montserrat"
      }}>
        <h3>{this.props.place.name}</h3>
        <div style={{
        // padding: "2rem",
        // border: "5px solid blue",
        // margin: "1rem",
        fontWeight: "normal",
        fontFamily:"montserrat"
      }}>
        Address: {this.props.place.address}
        <br/>
        Starts on monday at: {this.props.place.startsmon_at}
        </div>
      </div>
    )
  }
}

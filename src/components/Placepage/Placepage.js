import React, { Component } from "react"

export default class Placepage extends Component {
  render() {
    return (
      <div>
        {this.props.place.address}
        <br/>
        Starts on monday at: {this.props.place.startsmon_at}
      </div>
    )
  }
}

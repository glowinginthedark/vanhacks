import React, { Component } from 'react'

export default class LandingCategory extends Component {
    render() {
        return (
            <div onClick={() => this.props.onClick(this.props.label)} style={{
                padding: '1rem',
                border: '3px solid black',
                margin: '0.5rem',
                borderRadius: '0.2rem'
            }}>
                {this.props.label}
            </div>
        )
    }
}

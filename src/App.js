import React, { Component } from 'react'
import LandingCategory from './components/LandingCategory/LandingCategory.js';
import Placebutton from './components/Placebutton/Placebutton.js';
import Placepage from './components/Placepage/Placepage.js'

var categories = {
    "Shelter": [],
    "Food": [],
    "Medical": [],
    "Hygiene": [],
    "Technology": [],
    "Legal": [],
    "Learning": [],
    "Crisis lines": [],
    "Notices": []
}

export default class App extends Component {

    constructor (props) {
        super(props)
        this.state = {
            data: null,
            landing: true,
            category: null,
            place: null
        }

        fetch('/data.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.state.data = data

                Object.keys(categories).forEach(function (item) {
                    let p = []
        
                    for (let i = 0; i < data.facilities.length; i++) {
                        let b = data.facilities[i];
        
                        if (b.services.indexOf(item) > -1) {
                            p.push(b)
                        }
                    }
        
                    categories[item] = p
                })
            }).catch(function (error) {
                console.log(error);
        });

        this.categoryClick = this.categoryClick.bind(this)
        this.onPlaceClick = this.onPlaceClick.bind(this)
    }

    categoryClick (c) {
        this.setState({
            landing: null,
            category: categories[c],
            place: null
        })
    }

    onPlaceClick (place) {
        this.setState({
            landing: null,
            category: null,
            place: place
        })
    }

    render() {

        let btns = []
        let i = 0

        Object.keys(categories).forEach((item) => {
            btns.push(
                <LandingCategory onClick={this.categoryClick} key={i} label={item}/>
            )

            i++
        })

        let places = []

        if (this.state.category) {
            for (let i = 0; i < this.state.category.length; i++) {
                const place = this.state.category[i];
                places.push(
                    <Placebutton onClick={this.onPlaceClick} key={i} place={place} />
                )
            }
        }

        let pp

        if (this.state.place) {
            pp = <Placepage place={this.state.place} />
        }

        return (
            <div>
                { (this.state.landing) ? btns : '' }
                { (this.state.category) ? places : '' }
                { (this.state.place) ? pp : ''}
            </div>
        )
    }
}

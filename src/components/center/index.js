import React, { Component } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import "./center.css"

export default class Center extends Component {
    render() {
        return (
            <div className="center">
                <Header />
                <div className="center-content">
                Center
                </div>
                <Footer />
            </div>
        )
    }
}


import React, { Component } from 'react'

export default class weather extends Component {
    render() {
        return (
            <div>
                 <div>
             { this.props.city &&
                 <div>
                <p>city: {this.props.city} {this.props.country}</p>
                <p>temp: {this.props.temp}</p>
                <p>sunrise: {this.props.sunrise}</p>
                <p>sunset: {this.props.sunset}</p>
                </div>
                }
            <p>{this.props.error}</p>
        </div>
            </div>
        )
    }
}








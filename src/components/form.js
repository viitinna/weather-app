import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
               <form onSubmit={this.props.weatherMethod}>
                   <input type = "text" name = "city" placeholder = "City"/>
                   <button class="btn btn-info">get the weather</button>
               </form> 
            </div>
        )
    }
}

import React, { Component } from 'react';

export default class Image extends Component{
    render(){
        return(
            <img className={this.props.imageClassName} src={ this.props.src }/>
        )
    }
}
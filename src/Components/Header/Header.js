import React, { Component } from 'react'
import '../Header/Header'
import styleHeader from '../Header/Header.module.css'

export default class Header extends Component{
    render(){
        return(
            <header className={styleHeader.header}>
                <h1 className={styleHeader.headerTitle}>{this.props.headerName}</h1>
            </header>
        )
    }
}

import React, { Component } from 'react';
import Header from '../Header/Header';
import Image from '../Image/Image';
import image from '../../img/bg-bons-drinks.jpg'
import Menu from '../Menu/Menu';

export default class Home extends Component{
    render(){
        return(
            <>
            <Header headerName="Bons Drinks"/>
            <Menu />
            <Image src={image}/>
            </>
        )
    }
}
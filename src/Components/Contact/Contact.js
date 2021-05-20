import React, { Component } from 'react';
import Forms from '../Forms/Forms';
import Image from '../Image/Image';
import image from '../../img/contact-pic.jpg'

export default class Contact extends Component{
    render(){
        return(
            <>
            <Image src={image}/>
            <Forms />
            </>
        )
    }
}


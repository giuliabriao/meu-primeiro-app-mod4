import React, { Component } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import '../Forms/Forms';
import styleForms from '../Forms/Forms.module.css';

export default class Forms extends Component {
    render() {
        return (
            <div className={styleForms.formsContainer}>
                <h1 className="fontePadrao" >Contact us!</h1>
                <form className={styleForms.contactForm}>
                    <Input 
                    labelName = "First name:"
                    type="text"
                    placeholder="Enter your first name..."
                    />

                    <Input 
                    labelName = "Last name:"
                    type="text"
                    placeholder="Enter your last name..."
                    />

                    <Input 
                    labelName = "E-mail:"
                    type="text"
                    placeholder="Enter your e-mail..."
                    />

                    <Textarea labelName = "Message:"/>
                    <Button> Send! </Button>
                </form>
            </div>
        )
    }
}



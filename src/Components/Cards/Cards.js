import React, { Component } from 'react';
import Image from '../Image/Image';
import styleCards from '../Cards/Cards.module.css'

export default class Cards extends Component {
    render() {
        return (
            <div className={styleCards.divCards} key={this.props.index}>
                {this.props.drinkName}
                <Image imageClassName="cardsImage" src={this.props.drinkImage} />
            </div>
        )
    }
}
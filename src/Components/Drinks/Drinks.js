import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import styleDrinks from '../Drinks/Drinks.module.css';

export default class Drinks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drinks: []
        }
    }

    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    drinks: response.drinks
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className={styleDrinks.drinksContainer}>
                {
                    this.state.drinks.map((drink, index) =>
                    <Cards 
                        key={index}
                        drinkName={drink.strDrink}
                        drinkImage={drink.strDrinkThumb}
                    />
                    )
                }
            </div>
        )
    }
}


import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import PopularDrinks from '../PopularDrinks/PopularDrinks';
import SearchDrinks from '../SearchDrinks/SearchDrinks';

const DrinkFuncional = () => {

    const [request, setRequest] = useState({})

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => data.drinks[0])
            .then(drink => setRequest(drink))
    }, []);
    

    return (
        <div>
            <p>Id: {request.idDrink}</p>
            <p>Nome: {request.strDrink}</p>
            <img src={request.strDrinkThumb} />

            <Routes>
                <Route exact path="popular" element={<PopularDrinks />}/>
                <Route exact path="search" element={<SearchDrinks />}/>
            </Routes>
        </div>
    )
}

export default DrinkFuncional

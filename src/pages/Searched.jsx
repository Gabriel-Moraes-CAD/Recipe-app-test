import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
        
        const [searchedRecipes, setSearchedRecipes] = useState([]);
        let params = useParams();


        const getSearched = async (name) => {
        const api = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        const data = await api.json();
        setSearchedRecipes(data.drinks);
        console.log(data.drinks);
    };

    //search should match what <route says!!! in this case path="/searched/:SEARCH"
    useEffect(() => {
        getSearched(params.search);
    },[params.search]);
    //params.search ensures that useEffect runs only when a new search is requested.


return (
    <Grid>
        {searchedRecipes.map((drink) => {
            return (
                <Card key={drink.idDrink}>
                    <img src={drink.strDrinkThumb} alt="123"></img>
                        <h4>{drink.strDrink}</h4>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`
export default Searched;
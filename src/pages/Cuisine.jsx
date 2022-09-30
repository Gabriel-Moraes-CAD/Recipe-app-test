import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';

function Cuisine() {
    const [data, setData] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const api = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        const data = await api.json();
        setData(data.drinks);
        console.log(data.drinks);
    };
    
    //type should match what <route says!!! in this case path="/cuisine/:TYPE"

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type)
    },[params.type]);
        

  return (
        <Grid>
            {data.map((drink) => {
                return (
                    <Card key={drink.idDrink}>
                        <img src={drink.strDrinkThumb} alt="123"></img>
                        <h4>{drink.strDrink}</h4>

                    </Card>
                );
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


export default Cuisine
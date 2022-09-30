import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';


function Recipe() {

    const [details, setDetails] = useState([[]]);
    let params = useParams();


    const fetchDetails = async () => {
        const data = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.name}`)
                                    //www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
        const detailData = await data.json();
        setDetails(detailData.drinks);
        console.log(detailData.drinks)
    }
    
    useEffect(() => {
        fetchDetails();
        console.log(params.name)
    },[params.name]);


  return (

     <div>
            {details.map((drink) => {
                return (
                    <div key={drink.idDrink}>
                        <img src={drink.strDrinkThumb} alt="123"></img>
                        <h4>{drink.strDrink}</h4>
                        <h4>{drink.strInstructions}</h4>

                    </div>
                );
            })}

         </div>


    // <div><p key={details.name}>{details.strDrink}</p>
    // <img src={details.strDrinkThumb} alt="123"></img>
    //                     <h4>{details.strDrink}</h4>
    // </div>
  )
}

export default Recipe;
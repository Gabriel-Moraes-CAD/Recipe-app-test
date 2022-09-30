import React, {useState} from "react";
import { useEffect } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';




function Popular () {

    const [data, setData] = useState([]);
   
    useEffect(() => {
        searchDateRange();
        }, [])

         /* API Function - Triggerd by the Search Button */
    const searchDateRange = async () => {
        const check = localStorage.getItem('data')
        if(check){
            setData(JSON.parse(check));
        }else{ 
             const api = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`
        );
        const data = await api.json();
        
        localStorage.setItem("data", JSON.stringify(data.drinks));
        setData(data.drinks);
        console.log(data)
         }
       
    };     


    return (
        <div>
                    <Wrapper> 
                        <h3>Popular Picks</h3>
                        <Splide options={{
                            perPage:4,
                            pagination: false,
                            drag: false,
                            gap: '5rem',
                        }}>
                        {data.map((drink) => {
                            return(
                                <SplideSlide key={drink.idDrink}>
                                    {/* this is what makes the single page recipe work */}
                                    <Link to={"/recipe/" + drink.idDrink}> 
                                <Card>
                                    <p>{drink.strDrink}</p>
                                    <img src={drink.strDrinkThumb} alt="??" />
                                </Card>
                                </Link>
                                </SplideSlide>
                            );
                        })}
                        </Splide>
                    </Wrapper>

                
            
        </div>
    )


   
    
};

const Wrapper = styled.div`
    margin: 15rem 0rem;
    
    `
const Card = styled.div`
    min-height: 15rem;
    max-height: 20rem;
    max-width: 30rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    
    }
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        display: flex;
        justify-content: center;
    }
`


export default Popular
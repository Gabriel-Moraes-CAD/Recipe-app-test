import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import React from 'react'

function Category() {
  return (
    <List>
       <Slink to={'/cuisine/Vodka'}>
         <FaPizzaSlice/>
        <h4>Vodka</h4>
       </Slink>

         <Slink to={'/cuisine/Gin'}>
         <FaHamburger/>
        <h4>Gin</h4>
       </Slink>

         <Slink to={'/cuisine/Tequila'}>
         <GiNoodles/>
        <h4>Tequila</h4>
       </Slink>

         {/* <div>
         <GiChopSticks/>
        <h4>Japanese</h4>
       </div> */}

    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;

`;
const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4{
    color: white;
    font-size: 0.8rem;
  }
  svg{
    color: white;
    font-size: 1.5rem;
  }
`;

export default Category;

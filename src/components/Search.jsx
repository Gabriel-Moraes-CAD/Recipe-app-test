import React from 'react';
import styled from 'styled-components';
import {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function Search() {

    //Changes data inside search form
    const [input, setInput] = useState("");

    const navigate = useNavigate();

    //prevents default behavior of forms (to refresh page when submited, we dont want that)
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)

    }


  return (
    <Formstyle onSubmit={submitHandler}>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
    </Formstyle>


    )
}

const Formstyle = styled.form`
    div{
        margin: 0rem 20rem;
    position: relative;
    }
    

    width: 100%;
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;

    }
`

export default Search
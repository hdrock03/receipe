import React, { useState } from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {
    const [input, setInput] = useState('');
    const navigate = useNavigate()

    const submitHandle = (e) => {
        e.preventDefault(); // iske karan jb bhi form submit krenge page refresh nh hga 
        navigate('/searched/' + input)
    }
  return (
    <FormStyle onSubmit={submitHandle}>
        <div>
            <FaSearch></FaSearch>
            <input 
            onChange={(e) => setInput(e.target.value)} 
            type='text' 
            value={input}/>
        </div>
    </FormStyle>
  )
}

// -------------------------STYLED-COMPONENTS-----------------------------

const FormStyle = styled.form`
    margin: 0rem 20rem;
    

    div{
        width: 100%;
        position:relative;
        }

    input{
        border: none;
        background:linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: relative ;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;


export default Search
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'; //used for corousel
// import '@splidejs/react-splide/css';
import '@splidejs/splide/dist/css/splide.min.css'

function Popular() {

    const [popular, setPopular] = useState([])

    useEffect( () => {
        getPopular()
    },[])

    const getPopular = async () => {
        // local storage
        const check = localStorage.getItem('popular') // local storage me check kiye ki kuch hai ki nh

        if(check){ // agar hai to popular state me save kr do check ko
            setPopular(JSON.parse(check)) // json.parse use kiye h qki storage me string ke form me rhta h
        }
        else{ // agr nh hai to fetch krega api 
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`) // last me number=9 likhe hai qki 9 hi recipe chahiye meko
            const data = await api.json()
            localStorage.setItem('popular', JSON.stringify(data.recipes)) // aur storage me save kr dega. stringify se array string me change ho jayega 
            setPopular(data.recipes) // data.recipes kiye hai qki data object tha
            console.log(data.recipes);
        }
        
    }
    
    
  return (
    <div>
  <Wrapper>
    <h3>Popular Picks</h3>
    {/* splide corousel ke liye hai.
    options me perpage dale 4 jisse ek tyme me corousel me 4 image ho  */}
    <Splide options={{
        perPage:3,
        gap: '5rem',
        arrows:false,
        pagination:false,
        drag: "free"
        // gap: '5rem'
    }}>
    {popular.map((recipe) =>{ 
        return(
            <SplideSlide key={recipe.id}> 
            <Card >
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title}/>
                <Gradient/>
            </Card>
            </SplideSlide>
        )
    })}
    </Splide>
  </Wrapper>
  </div>
  )
}

// -------------------------STYLED-COMPONENTS-----------------------------

const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position:relative;

img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height:: 100%;
    object-fit: cover;
}

p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform: translate(-50%,0%);
    // color:white;
    text-align:center;
    font-weight:600;
    font-size: 1rem;
    height:40%;
    display:flex;
    align-items:center;
    justify-content:center

}

`;

const Gradient = styled.div`
z-index: 3;
position: absolute:
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`
export default Popular
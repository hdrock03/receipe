import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useParams,Link } from 'react-router-dom'
// import { motion } from 'framer-motion'

function Cuisine() {

    const [cuisine, setCuisine] = useState([])
    let params = useParams();

    useEffect( () => {
        getCuisine(params.type)
        // console.log(params);
    },[params.type])

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
        console.log(recipes.results);
    }
  return (
    // animation ke time me opacity 1 suru me 0 and last me bhi 0 rhega aur duration 0.5 sec hga
    <Grid 
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}
    >
        {cuisine.map((item) => (
            <Card key={item.id}>
                <Link to={'/recipe/' + item.id}>
                <img src={item.image} alt='' />
                <h4>{item.title}</h4>
                </Link>
            </Card>
        ))}
    </Grid>
  )
}


// -------------------------STYLED-COMPONENTS-----------------------------

//styled.div ko styled(motion.div) me change kr diye h taki animation daal sake
const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
`
const Card = styled.div`
    img{
        width: 100%;
        border-radius:2rem;
    }
    a {
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine
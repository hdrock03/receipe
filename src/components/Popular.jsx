import React, { useEffect, useState } from 'react'

function Popular() {

    const [popular, setPopular] = useState([])

    useEffect( () => {
        getPopular()
    },[])

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`) // last me number=9 likhe hai qki 9 hi recipe chahiye meko
        const data = await api.json()
        setPopular(data.recipes)
    }
    console.log(popular);
  return <div>
    {popular.map((recipe) =>{ 
        return(
            <div>
                <p>{recipe.title}</p>
            </div>
        )
    })}
  </div>
}

export default Popular
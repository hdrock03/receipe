import React from 'react'
import Home from './Home'
import { Route, Routes} from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched'
import Recipe from './Recipe';

function Pages() {
  return (
    //{/* browserRouter phle pages.jsx me wrapped tha jisse error aa rha tha useLocation() may be used only in the context of <Router> component</Router> */}
    // to usko app.jsx me wrap kiye
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cuisine/:type' element={<Cuisine/>} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path ='/recipe/:name' element={<Recipe/>} />
    </Routes>
   
    
  )
}

export default Pages
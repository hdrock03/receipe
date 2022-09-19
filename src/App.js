import { BrowserRouter, Link } from 'react-router-dom';
import Category from './components/Category';
import Search from './components/Search';
import logo from './logo.svg';
import Pages from './pages/Pages';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi'

function App() {
  return (
    <div className="App">
      {/* browserRouter phle pages.jsx me wrapped tha jisse error aa rha tha useLocation() may be used only in the context of <Router> component</Router> 
      iska matlb hua ki pages me to browserrouter use krliye bt category me nh kiye the to usko rectigy krne ke liye yhi pe dono me wrap kr diye*/}
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={'/'}>deliciouss</Logo>
      </Nav>
        <Search/>
        <Category/>
        <Pages/> 
        {/* yaha pe pages liye hai jisme home hai aur home ke under components hai */}
    </BrowserRouter>

    </div>
  );
}

// -------------------------STYLED-COMPONENTS-----------------------------

const Logo = styled(Link)`
text-decoration: none;
font-size:1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
`
const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`
export default App;

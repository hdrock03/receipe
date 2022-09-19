import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';
import Search from './components/Search';
import logo from './logo.svg';
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
      {/* browserRouter phle pages.jsx me wrapped tha jisse error aa rha tha useLocation() may be used only in the context of <Router> component</Router> 
      iska matlb hua ki pages me to browserrouter use krliye bt category me nh kiye the to usko rectigy krne ke liye yhi pe dono me wrap kr diye*/}
      <BrowserRouter>
        <Search/>
        <Category/>
        <Pages/> 
        {/* yaha pe pages liye hai jisme home hai aur home ke under components hai */}
    </BrowserRouter>

    </div>
  );
}

export default App;

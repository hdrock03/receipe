import Category from './components/Category';
import logo from './logo.svg';
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
        <Category/>
        <Pages/> 
        {/* yaha pe pages liye hai jisme home hai aur home ke under components hai */}
    </div>
  );
}

export default App;

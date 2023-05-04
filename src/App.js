import { Route, Routes } from 'react-router';
import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Admin from './router/admin/Admin';
import Cart from './router/cart/Cart';
import Home from './router/home/Home';
import Login from './router/login/Login';
import SingleRoute from './router/single-route/SingleRoute';
import SinglePage from './router/singlepage/SinglePage';


function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <br />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin/*' element={<Admin/>}/>
      <Route path='/single/:id' element={<SingleRoute/>}/>
      <Route path='/page/:id' element={<SinglePage/>}/>
     </Routes>
      <br />
    </div>
  );
}

export default App;


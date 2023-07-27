import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import AddProducts from './Components/AddProducts';
import NotFound from './Components/NotFound';
import Cart from './Components/Cart';

export const App=()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/add-products" element={<AddProducts/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route  element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;

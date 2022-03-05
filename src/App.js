
import './App.css';
import Header from './Header';
import "./Header.css";

import Home from './Home'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Ventana1 from './Ventana1';
import { useState } from 'react';


function App() {
  const [miCarrito, setMiCarrito] = useState([]);;
 
  

  return (
    <div>
      
      <BrowserRouter>
        <div className="app">
        <Header />
          <Routes>
            <Route path="/login" element={ <Ventana1 /> }>
              
            </Route>
            <Route path="/checkout" element={ <Ventana1 />} >
              
            </Route>
            <Route path="/"  element={ <Home miCarrito={miCarrito} addCarrito={  setMiCarrito} /> }>
              
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>


  );
}

export default App;

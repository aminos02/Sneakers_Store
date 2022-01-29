import { useState } from 'react';
import './App.css';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import NavBar from './Components/NavBar';
import Product from './Components/Product';
import Slider from './Components/Slider';

function App() {
   const [index,setIndex]=useState('0');

  return (
    <div>
      <NavBar setIndex={setIndex}/>
      <Slider index={index}/>
      <Features/>
      <Product index={index} />
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;

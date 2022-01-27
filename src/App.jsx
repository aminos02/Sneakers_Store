import { useState } from 'react';
import './App.css';
import Features from './Components/Features';
import NavBar from './Components/NavBar';
import Slider from './Components/Slider';

function App() {
   const [styleWrapper,setStyleWrapper]=useState('0');
   console.log(styleWrapper);
  return (
    <div>
      <NavBar setStyleWrapper={setStyleWrapper}/>
      <Slider styleWrapper={styleWrapper}/>
      <Features/>
    </div>
  );
}

export default App;

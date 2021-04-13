// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import imageCard from './components/body/imagecard';
import img1 from './assets/images/1.jpg';
const App =  ()=> {

  return (
     <div>
       <imageCard img={img1}></imageCard>
     </div>
  );
}

export default App;

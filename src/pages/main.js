import ImageCard from '../components/body/imagecard';
import img1 from '../assets/images/1.jpg';
import NavBar from "../components/header/navbar.jsx"
import img2 from '../assets/images/2.jfif'
import img3 from '../assets/images/3.jfif'
import "./main.css"
import images from "../assets/image.js";
import {useEffect} from 'react';

const Main = ()=>{

  useEffect(()=> console.log(images), []);
  return(

      <div>
      <NavBar/>
        <div className = "main">
          {
            images.map((i)=>{
             return  <ImageCard img = {i} className = "items"/>
  
            })
          }
        </div>
      </div>
    )    
}



export default Main;

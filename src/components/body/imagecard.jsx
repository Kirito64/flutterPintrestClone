import React from "react";
import { FaDownload, FaEllipsisV } from "react-icons/fa";
import "./imagecard.css";
import { useState } from "react";
// import img1 from '../../assets/images/1.jpg';
const ImageCard = (props) => {
  const [hover, setHover] = useState(false);
  const onHover1 = () => {
    setHover(true);
    console.log(hover);
  };

  const onHover2 = () => {
    setHover(false);
    console.log(hover);
  };

  if (hover == true) {
    return (
      <div className="container">
        <img src={props.img} className="image" style={{ opacity: "75%" }}></img>
        <div
          className="control"
          onMouseEnter={onHover1}
          onMouseLeave={onHover2}
        >
          <div className="floatingbutton">
            <FaDownload className="icon"></FaDownload>
          </div>
          <div className="source">
            <a href={props.img} target="_blank">
              Local
            </a>
          </div>

          <div className="options">
            <FaEllipsisV> </FaEllipsisV>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container">
      <img src={props.img} className="image"></img>
      <div className="control" onMouseEnter={onHover1} onMouseLeave={onHover2}>
        <div className="floatingbutton">
          <FaDownload className = "icon" ></FaDownload>
        </div>

        <div className="source">Source</div>
        <div className="options">
          <FaEllipsisV> </FaEllipsisV>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

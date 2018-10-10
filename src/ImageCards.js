import React from "react";
// import images from "./images.json";

const ImageCards = props => (

      <div className="col-sm-3 ImageFormat">
        <img alt={props.id} src={props.image} clicked={props.clicked} onClick={() => props.arrangeImageRandom(props.id) } />
     
    </div>
  );
  

export default ImageCards;
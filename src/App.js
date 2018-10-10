import React, { Component } from "react";
import "./App.css";
import images from "./images.json";
import ImageCards from "./ImageCards";

class App extends Component {
  state = {
    images,
    score: 0,
    highscore: 0
  };
  

  arrangeImageRandom = id => {
    this.state.images.find((o, i) => {
      if (o.id === id) {
        if(images[i].count === 0){
          images[i].count = images[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.images.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }




  // arrangeImageRandom = id => {
  //   //1. if image is already clicked
  //   //Change Alert //current score  = 0
  //   //if current score >high score then highscore is current score

  //   //2.  if image clicked is false
  //   // change this image clicked to true -  TO BE DONE
  //   //re arrange the images/ sort the images into a random
  //   // selectedArray.push(id);
  //   // console.log (selectedArray);


  //   // console.log("line 26 in app js", this.state.images[id]);
  //   for (let i = images.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [images[i], images[j]] = [images[j], images[i]];
  //   }
  //   this.setState({images});
  //   console.log("randomly sorted", images);
  // };


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">Clicky Game!</div>
          <div className="col-sm">
            <p> Click on an Image to start playing!</p>
          </div>
          <div className="col-sm">
            <p>
              {" "}
              Your Score: <span>{2 + 1} </span> Top Score:
              <span>{5 + 11} </span>
            </p>
          </div>
        </div>
        <div
          className="jumbotron jumbotron-fluid text-center newBackground"
          styleName="back"
        >
          <h1> Memory Game</h1>{" "}
          <p>
            Click on an image to earn points, but don't click on any more than
            once!
          </p>
        </div>
        {/* <ImageCards id={images[1].id} image={images[1].image} arrangeImageRandom={this.arrangeImageRandom} /> */}
        <div className="row">
          {this.state.images.map(image => (
            <ImageCards
              arrangeImageRandom={this.arrangeImageRandom}
              id={image.id}
              key={image.id}
              image={image.image}
              clicked={image.clicked} //added this line
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

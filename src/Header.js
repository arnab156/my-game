import React from "react";

const Header = props => (
    <div>
        <div className="row text-center">

        <div className="col-sm-4">
            <p> Your Score: {props.score}</p>
        </div>

        <div className="col-sm-4">
            <p>Welcome, let's Play!</p>
        </div>

        <div className="col-sm-4">
            <p> Highscore: {props.highscore} </p>
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid text-center newBackground" styleName="back">
        <h1> {props.children}</h1>
        <p>Click on an image to earn points, but don't click on any more than once! </p>
        </div>

    </div>
        


    


    

);

export default Header;









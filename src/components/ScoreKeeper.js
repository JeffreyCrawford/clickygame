import React from "react";
import CharacterList from "./CharacterList";

let guesses = [];

const correctGuess = () => {
    this.setState({ 
        score: this.state.score + 1,
        message: "You Guessed Correctly!",
    });
    guesses.push(this.id)
    alert("correct")
    console.log(this.id)
    console.log(guesses)

};

const incorrectGuess = () => {
    this.setState({
        score: 0,
        message: "You Guessed Incorrectly",
    });
    alert("incorrect")
};


class ScoreKeeper extends React.Component {



    
    guess = event => {
        alert(this.id)
        if (guesses.includes(this.id)) {
            incorrectGuess();
        }
        else {
            correctGuess();
        }
    };
    
    state = {
        score: 0,
        message: "",
    };

};





export default ScoreKeeper;
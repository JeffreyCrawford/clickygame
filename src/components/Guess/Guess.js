import React from "react";
import "./Guess.css";

import CharacterList from "../CharacterList";
import characters from "../../characters.json";

let guesses = [];

class Guess extends React.Component {

    state = {
        score: 0,
        message: "",
    }

    guessClick = event => {
        let id = event.target.id
        
        if (guesses.includes(id)) {
            this.setState({
                score: 0,
                message: "You Guessed Incorrectly",
            })       
            guesses = []
        }

        else {
            guesses.push(id)

            this.setState({
                score: this.state.score + 1,
                message: "You Guessed Correctly",
            })
        }
    }

    render() {
        return (
            <div> 
                <h1>Score: {this.state.score} | {this.state.message}</h1>
                <CharacterList 
                characters={characters}
                score={this.state.score}
                message={this.state.message}
                guessClick={this.guessClick}
                />
            </div>
        )
        
    }
}

export default Guess;
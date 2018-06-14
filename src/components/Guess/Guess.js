import React from "react";
import CharacterList from "../CharacterList";
import characters from "../../characters.json";

class Guess extends React.Component {

    state = {
        score: 0,
        message: ""
    }

    guessClick = () => {
        this.setState({
            score: this.state.score + 1,
            message: "You Guessed Correctly"
        })
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
import React from "react";
import "./CharacterList.css";
import characters from "../../characters.json"

const shuffle = function(array) {
    let i = 0
    let j = 0
    let temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
};







const CharacterList = props => {

    shuffle(characters)

    return (
        <div className="container containerCL">
        {props.characters.map(characters => (
            <div className="card img-card">
                <div className="img">
                    <img alt={characters.name} src={characters.image} id={characters.id} onClick={props.guessClick} />

                </div>
            </div>

        ))}
      </div>
    )
}

export default CharacterList;
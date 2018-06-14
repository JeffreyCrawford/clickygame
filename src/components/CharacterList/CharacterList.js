import React from "react";
import "./CharacterList.css";
import characters from "../../characters.json"

const CharacterList = props => {
    return (
        <div className="container">
        {props.characters.map(characters => (
            <div className="card">
                <div className="img">
                    <div className="img-container">
                        <img alt={characters.name} src={characters.image} />
                    </div>
                </div>
            </div>

        ))}
      </div>
    )
}

export default CharacterList;
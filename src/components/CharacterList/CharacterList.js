import React from "react";
import "./CharacterList.css";



const CharacterList = props => {
    return (
        <div className="container containerCL">
        {props.characters.map(characters => (
            <div className="card img-card">
                <div className="img">
                    <div className="img-container" >
                        <img alt={characters.name} src={characters.image} onClick={props.guessClick} />
                    </div>
                </div>
            </div>

        ))}
      </div>
    )
}

export default CharacterList;
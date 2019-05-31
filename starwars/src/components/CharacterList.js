import React from "react";
import Character from './Character';
import './CharacterList.scss'

function CharacterList(props) {
    return (
        <div className="character-list">
            {props.characterArray.map(characterObj => (
                <Character key={characterObj.name}
                    characterObj={characterObj}
                /> 
                ))}
        </div>
    )
}

export default CharacterList
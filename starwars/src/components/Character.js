import React from 'react';

function Character(props) {
    return (
        <div className="character">
            <li>{props.characterObj.name}</li>
        </div>
    )
}

export default Character
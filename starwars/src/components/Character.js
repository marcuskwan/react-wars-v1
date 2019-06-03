import React from 'react';

function Character(props) {
    return (
      <div className="character">
          <h1>name: {props.characterObj.name}</h1>
        <li>birth year: {props.characterObj.birth_year}</li>
        <li>created: {props.characterObj.created}</li>
        <li>edited: {props.characterObj.edited}</li>
        <li>eye color: {props.characterObj.eye_color}</li>
        <li>gender: {props.characterObj.gender}</li>
        <li>hair color: {props.characterObj.hair_color}</li>
        <li>height: {props.characterObj.height}</li>
        <li>mass: {props.characterObj.mass} </li>
        <li>skin color: {props.characterObj.skin_color}</li>
        <li>hair color: {props.characterObj.hair_color}</li>
      </div>
    );
}

export default Character
import React from 'react';
import './Char.css';

// char component: char arrow function will display a single character that was created from map function on charList in App file.
const char = (props) => {

    const style = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
      };

    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char; 
import React from 'react';
import './UserInput.css';

const userInput = (element) => {
    return (
        <div className='UserInput'>
            <p>Change username1</p>
            <input type='text' onChange={element.changed} value={element.userName}/>
        </div>
    )
}

export default userInput;
import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello the user name of this account is {props.userName}</p>
            <p>And this is the other account {props.userName2}</p>
        </div>
    )
}

export default userOutput;
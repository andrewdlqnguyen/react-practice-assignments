import React from 'react';
import './Validation.css';

// validation component: validation arrow function will check if the prop string satisfies the condition.
// text should be greater than 5 to output 'long enough' and less than 10 to avoid overexceeding
const validation = (props) => {

    let validationMessage = 'Text long enough';

    if(props.inputLength <= 5)  {
        validationMessage = 'Text too short';
    } else if (props.inputLength > 10) {
        validationMessage = 'Wait, way too long now';
    }

    return (
        <div className="Validation">
            {/* Alternative using tenary operator */}
            {/* {
                props.inputLength > 10 ?
                    <p>Wait, way too long now</p> :
                    props.inputLength > 5 ?
                    <p>Text long enough</p> :
                    <p> Text too short!</p>
            } */}

            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;
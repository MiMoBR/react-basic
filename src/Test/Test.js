import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>The title -- {props.name}. And age -- {props.age}</p>
            <p>-----  {props.children}</p>
            <input type="text" onChange={props.changee}  value={props.name}/>
        </div>
    );
}

export default person;
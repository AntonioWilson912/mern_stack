import React, { useState } from 'react';

const PersonCard = (props) => {

    const [age, setAge] = useState(props.age);

    const wishBirthday = () => {
        setAge(age + 1);
    }

    return (
        <div className="personCard">
            <h3>{ props.lastName }, { props.firstName }</h3>
            <p>Age: {age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ wishBirthday }>Birthday Button for { props.firstName } { props.lastName }</button>
        </div>
    );
};

export default PersonCard;
import React from 'react';

import './Person.css';
const Person = (props) => {
    // console.log(props.person);
    const {name, designation, gender,picture, honorarium, company} = props.person;
    return (
        <div className='displayproduct-container'>
            <div className='person'>
                <img src={picture} alt="" />
                <h3>Name: {name}</h3>
                <h4>Designation: {designation}</h4>
                <h4>Company: {company}</h4>
                <h4>Gender: {gender}</h4>
                <h4>Honorarium: {honorarium}</h4>
                <button onClick={() => props.handleAddToCart(props.person)}>Invite</button>
            </div>
            
        </div>
    );
};

export default Person;
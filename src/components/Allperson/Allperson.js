import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Allperson.css'

    

const Allperson = () => {
    const [allPersons, setAllPersons] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('./fakepersondb.json')
        .then(res => res.json())
        .then(data => setAllPersons(data));
    },[]);

    const handleAddToCart = person => {
        const newCart = [...cart, person];
        setCart(newCart);
    }

    return (
        <div className='person-container'>
            <div className='all-person'>
                {
                    allPersons.map(person => <Person 
                    key={person.key}
                    person={person}
                    handleAddToCart={handleAddToCart}
                    ></Person>)
                }
            </div>
            <div className='cart'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Allperson;
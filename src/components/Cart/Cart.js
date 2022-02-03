import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props.cart);
    const cart = props.cart;
    return (
        <div>
            <h2>Person Added: {props.cart.length}</h2>
            <h4>Added Persons List:</h4>
            {
                cart.map(person => <li> <b>{person.name}</b></li>)
            }
        </div>
    );
};

export default Cart;
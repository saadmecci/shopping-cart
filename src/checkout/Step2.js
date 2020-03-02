import React from 'react';
import countCartItems from '../util/countCartItems';

const Step2 = (props) => {
    return(
        <div>
            <div className="title">Shopping Cart</div>
            <div className="content">
                <h4>You are buying {countCartItems(props.cartItems)} items.</h4>
                <h4>Total Price: ${props.totalPrice}</h4>
            </div>
        </div>
    )
}

export default Step2;
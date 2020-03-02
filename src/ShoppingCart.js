import React from 'react';
import { ShoppingCartCard } from './components/Card';

const ShoppingCart = (props) => {

    return(
        <ShoppingCartCard>
            <div className="title">Shopping Cart</div>
            <div className="content">
                Number of different items: {props.shoppingCartCount}<br/>
                Total price: ${props.totalPrice}
            </div>
        </ShoppingCartCard>
    )
}

export default ShoppingCart;
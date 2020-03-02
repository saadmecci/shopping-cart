import React, { useState } from 'react';
import ItemCards from './ItemCards';
import ShoppingCart from './ShoppingCart';
import { items } from './items'
import CheckoutContainer from './checkout';
import { calculateCartPrice } from './util';
import { CardContainer } from './components/CardContainer';

const ShoppingContainer = () => {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState("none");
    let currentPrice = 0;

    const addItem = (name, price) => {

        let cartItemsClone = [...cartItems];

        const itemPresent = cartItems.findIndex((items) => items.name === name);

        if (itemPresent === -1) {

            let newItem = {};

            newItem.name = name;
            newItem.price = price;
            newItem.amount = 1;
            cartItemsClone.push(newItem);
            setCartItems(cartItemsClone);
            currentPrice = calculateCartPrice(cartItemsClone);
            setTotalPrice(currentPrice);
        } else {
            cartItemsClone[itemPresent].amount++;
            setCartItems(cartItemsClone);
            currentPrice = calculateCartPrice(cartItemsClone);
            setTotalPrice(currentPrice);
        }
    }

    const removeItem = (name) => {

        const cartItemsClone = [...cartItems];

        cartItemsClone.forEach((item) => {
            if (item.name === name && item.amount >= 1) {
                item.amount--;
                setCartItems(cartItemsClone);
                currentPrice = calculateCartPrice(cartItemsClone);
                setTotalPrice(currentPrice);
            }
        });
    }

    const closeShoppingCart = () => {
        setShowModal("none");
    }

    return (
        <div>
            <CardContainer>
                <ItemCards items={items} addItem={addItem} removeItem={removeItem}/>
            </CardContainer>
            <div onClick={() => setShowModal("block")}>
                <ShoppingCart shoppingCartCount={cartItems.length} totalPrice={totalPrice}/>
            </div>
            <CheckoutContainer
                display={showModal}
                totalPrice={totalPrice} 
                addItem={addItem} 
                removeItem={removeItem}
                cartItems={cartItems}
                setCartItems={setCartItems}
                setTotalPrice={setTotalPrice}
                closeShoppingCart={closeShoppingCart}
            />
        </div>
    );
}

export default ShoppingContainer;
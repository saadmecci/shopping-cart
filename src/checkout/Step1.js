import React from 'react';
import { Card } from '../components/Card';
import Button from '../components/Button';

const Step1 = (props) => {
    return (
        <div>
            <div className="title">Shopping Cart</div>
            <div className="content">
                <h4>Total Price: ${props.totalPrice}</h4>
                {props.cartItems.map((item, index) => 
                    <Card backgroundColor="#FC7978" key={index}>
                        <div className="title">{item.name}</div>
                        <div className="content">
                            ${item.price}<br/>
                            Amount: {item.amount}
                            <Button onClick={() => props.addItem(item.name, item.price)}>+</Button>
                            <Button onClick={() => props.removeItem(item.name, item.price)}>-</Button>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default Step1;
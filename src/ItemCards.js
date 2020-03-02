import React from 'react';
import {Card} from './components/Card';
import Button from './components/Button'

const ItemCards = (props) => {
    return (
        <div>
            {props.items.map((item, index) =>
                <Card backgroundColor="#5EB7B7" key={index}>
                    <div className="title">{item.name}</div>
                    <div className="content">Price: {item.price}</div>
                    <Button onClick={() => props.addItem(item.name, item.price)}>+</Button>
                    <Button onClick={() => props.removeItem(item.name, item.price)}>-</Button>
                </Card>
            )}
        </div>
    );
}

export default ItemCards;
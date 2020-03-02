const countCartItems = (cartItems) => {

    let itemCount = 0;

    cartItems.forEach((item) => {
        itemCount = itemCount + item.amount
    });
    return itemCount;
}

export default countCartItems;
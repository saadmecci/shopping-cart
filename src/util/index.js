export const calculateCartPrice = (cartItems) => {

    let totalPrice = 0;

    cartItems.forEach((item) => {
        totalPrice = totalPrice + item.price*item.amount;
    });
    return totalPrice;
}
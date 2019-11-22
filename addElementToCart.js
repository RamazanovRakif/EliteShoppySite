function addElementToCart(name, price, count) {
    for (let i in cart) {
        if (cart[i].name === name) {
            cart[i].count += count;
            return;
        }
    }
    let item = new Item(name, price, count);
    cart.push(item);
    saveCart();
}

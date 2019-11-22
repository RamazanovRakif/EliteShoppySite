
let cart = [];

let Item = function (name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
};

function addElementToCart(name, price, count) {
    loadCart();
    for (let i in cart) {
        if (cart[i].name === name) {
            cart[i].count += count;
            cart[i].price += price;
            saveCart();
            return;
        }
    }
    let item = new Item(name, price, count);
    cart.push(item);
    saveCart();
}


function removeElementFromCart(name) {
    for (let i in cart) {
        if (cart[i].name === name) {
            cart[i].count--;
            if (cart[i].count === 0) {
                cart.splice(i, 1);
            }
            break
        }
    }
    saveCart();
}


function removeElementFromCartAll(name) {
    for (let i in cart) {
        if (cart[i].name === name) {
            cart.splice(i, 1)
            break;
        }
    }
    saveCart();
}



function clearCart() {
    cart = [];
    saveCart();
}

function countCart() {
    let totalCount = 0;
    for (let i in cart) {
        totalCount += cart[i].count;
    }
    return totalCount;
}

function totalCart() {
    let totalCost = 0;
    for (let i in cart) {
        totalCost += cart[i].price;
    }
    return totalCost.toFixed(2);
}

function listCart() {
    let cartCopy = [];
    for (let i in cart) {
        let item = cart[i];
        let itemCopy = {};
        for (let p in item) {
            itemCopy[p] = item[p];
        }
        itemCopy.total = item.price.toFixed(2);
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
}




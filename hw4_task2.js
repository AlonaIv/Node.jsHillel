import { MyEventEmitter } from './emitter.js';

const product1 =  {
    name:"Phone",
    price: 1000, 
    addToCart: true, 
    deleted: true, 
    checkout: false,
    saled: false
};

const product2 =  {
    name:"Laptop",
    price: 20000, 
    addToCart: true, 
    deleted: false, 
    checkout: true,
    saled: true
};

function storeManagementSystem (product) {
    if (product.addToCart === true) {
        MyEventEmitter.emit('addToCart', {product});
    }

    if (product.deleted === true) {
        MyEventEmitter.emit('deleted', {product});
    }

    if (product.checkout === true) {
        MyEventEmitter.emit('checkout', {product});
    }

    if (product.saled === true) {
        MyEventEmitter.emit('saled', {product});
    }
}


storeManagementSystem(product1);
storeManagementSystem(product2);
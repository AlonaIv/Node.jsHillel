import EventEmitter from 'events';

const MyEventEmitter = new EventEmitter();

MyEventEmitter.on('buy', (data) => {
    console.log('Product purchased:', data.product.name, 'price: ', data.product.price);
});

MyEventEmitter.on('addToCart', (data) => {
    console.log('The product has been added to the cart:', data.product.name, 'price: ', data.product.price);
});

MyEventEmitter.on('deleted', (data) => {
    console.log('The product has been removed from the cart:', data.product.name, 'price: ', data.product.price);
});

MyEventEmitter.on('checkout', (data) => {
    console.log('Proceed to checkout:', data.product.name, 'price: ', data.product.price);
});

MyEventEmitter.on('saled', (data) => {
    console.log('The order has been sold:', data.product.name, 'price: ', data.product.price);
});

export { MyEventEmitter };
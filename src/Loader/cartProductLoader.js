import { getShoppingCart } from "../utilites/fakedb";

const cartProductLoader = async () => {
    const loadedProducts = await fetch('productData.json')
    const products = await loadedProducts.json();


    // if cart data is in database you have to use async await
    const storedCart = getShoppingCart();

    const savedCart = [];

    console.log('storedCart', storedCart);
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }

    // if we need to send two thing to return
    // return [products, savedCart]
    // another option 
    // return {products , cart: savedCart}


    return savedCart;
}

export default cartProductLoader;
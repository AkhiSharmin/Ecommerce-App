import { useEffect, useState } from "react";

import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilites/fakedb";

import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("productData.json")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();

    const savedCart = [];

    //step 1 get id of the addedProduct
    for (const id in storedCart) {
      //step-2 get product from products state by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        //step-3 add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // console.log(addedProduct);
        //step-4 add the addedProduct to the saved cart
        savedCart.push(addedProduct);
      }
    }
    //step-5 set the cart
    setCart(savedCart);
  }, [products]);

  const handelAddToCart = (product) => {
    let newCart = [];
    // const newCart = [...cart, product];
    //if product doesn't exit in the cart , then set quantity = 1
    //if exist update quantity by 1
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  const handelClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div>
      <div className="shop-container max-w-full mx-auto grid grid-cols-5 gap-5 p-8">
        <div className="product-container col-span-4">
          <div className="grid grid-cols-3 gap-5">
            {products.map((product) => (
              <Product
                product={product}
                key={product.id}
                handelAddToCart={handelAddToCart}
              ></Product>
            ))}
          </div>
        </div>
        <div className="cart-container col-span-1">
          <Cart cart={cart} handelClearCart={handelClearCart}>
            <Link to="/orders">
              <button className="btn btn-outline btn-wide text-lg text-black my-4 flex justify-between items-center">
                Review Order
                <span className="text-red-700">
                  <FaTrash />
                </span>
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;

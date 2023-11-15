import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("productData.json")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  const handelAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
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
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;

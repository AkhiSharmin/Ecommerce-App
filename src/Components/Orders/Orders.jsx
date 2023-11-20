import { useLoaderData } from "react-router-dom/dist";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilites/fakedb";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = () => {
  const savedCart = useLoaderData();

  const [cart, setCart] = useState(savedCart);

  const handelRemoveFromCart = (id) => {
    const reaming = cart.filter((product) => product.id !== id);
    setCart(reaming);
    removeFromDb(id);
  };

  const handelClearCart = () => {
    setCart([]);
    const deleteAll = deleteShoppingCart();
    if (deleteAll) {
      toast.success("All Shopping deleted successfully!");
    }
  };

  return (
    <div className="max-w-full mx-auto grid grid-cols-5 gap-5 justify-center">
      <div className="col-span-4 my-12 mx-auto">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.id}
            handelRemoveFromCart={handelRemoveFromCart}
          />
        ))}
      </div>
      <div className="col-span-1 sticky top-0">
        <Cart cart={cart} handelClearCart={handelClearCart}>
          <div>From Orders</div>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;

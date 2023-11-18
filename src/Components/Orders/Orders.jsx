import { useLoaderData } from "react-router-dom/dist";
import Cart from "../Cart/Cart";

const Orders = () => {
  const cart = useLoaderData();
  console.log("orders", cart);
  return (
    <div className="max-w-full mx-auto grid grid-cols-5 gap-5 p-8">
      <div className="col-span-4">
        <h2>Orders here: {cart.length}</h2>
      </div>
      <div className="col-span-1">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;

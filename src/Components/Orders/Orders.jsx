import { useLoaderData } from "react-router-dom/dist";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const cart = useLoaderData();
  console.log("orders", cart);
  return (
    <div className="max-w-full mx-auto grid grid-cols-5 gap-5 justify-center">
      <div className="col-span-4 my-12 mx-auto">
        {cart.map((product) => (
          <ReviewItem product={product} key={product.id} />
        ))}
      </div>
      <div className="col-span-1 sticky top-0">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;

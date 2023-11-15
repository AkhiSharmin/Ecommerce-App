const Cart = ({ cart }) => {
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }

  return (
    <div className="bg-slate-100 p-8 text-[17px]">
      <h3 className="pb-2 font-bold text-2xl">Oder summary</h3>
      <p className="pb-2">Selected Items: {cart.length}</p>
      <p className="pb-2">Total Price: {total}</p>
      <p className="pb-2">Total Shipping: </p>
      <p className="pb-2">Tax: </p>
      <p>Grand Total: </p>
    </div>
  );
};

export default Cart;

const Cart = ({ cart }) => {
  //calculate total price
  let totalPrice = 0;
  //   calculate shipping
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  //calculate tax.. total tk r 7% hobe tax
  const totalTax = ((totalPrice * 7) / 100).toFixed(2);

  //calculate grand total
  const grandTotal = totalPrice + totalShipping + totalTax;

  return (
    <div className="bg-slate-100 p-8 text-[17px] sticky top-0">
      <h3 className="pb-2 font-bold text-2xl">Oder summary</h3>
      <p className="pb-2">Selected Items: {cart.length}</p>
      <p className="pb-2">Total Price: {totalPrice}$</p>
      <p className="pb-2">Total Shipping: {totalShipping}$</p>
      <p className="pb-2">Tax: {totalTax}$</p>
      <p>Grand Total: {grandTotal}$</p>
    </div>
  );
};

export default Cart;

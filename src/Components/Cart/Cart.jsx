const Cart = ({ cart }) => {
  console.log(cart);
  //calculate total price
  let totalPrice = 0;
  //   calculate shipping
  let totalShipping = 0;
  //calculate quantity
  let quantity = 0;
  for (const product of cart) {
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    // product.quantity = product.quantity || 1;

    totalPrice = totalPrice + product.price + product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  //calculate tax.. total tk r 7% hobe tax
  const totalTax = (totalPrice * 7) / 100;

  //calculate grand total
  const grandTotal = totalPrice + totalShipping + totalTax;

  return (
    <div className="bg-slate-100 p-8 text-[17px] sticky top-0">
      <h3 className="pb-2 font-bold text-2xl">Oder summary</h3>
      <p className="pb-2">Selected Items: {quantity}</p>
      <p className="pb-2">Total Price: {totalPrice.toFixed(2)}$</p>
      <p className="pb-2">Total Shipping: {totalShipping}$</p>
      <p className="pb-2">Tax: {totalTax.toFixed(2)}$</p>
      <p>Grand Total: {grandTotal.toFixed(2)}$</p>
    </div>
  );
};

export default Cart;

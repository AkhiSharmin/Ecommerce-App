import { FaShoppingCart } from "react-icons/fa";

const Product = (props) => {
  //   console.log(props);
  const { img, name, seller, quantity, price, rating } = props.product;

  const handelAddToCart = props.handelAddToCart;

  return (
    <div>
      <div className="card bg-base-100 m-3 border-2 gap-0">
        <figure>
          <img className="h-64 w-full " src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Ratings: {rating} starts</p>
          <p>Quantity: {quantity} pice</p>
        </div>
        <button
          onClick={() => handelAddToCart(props.product)}
          className="btn  hover:bg-green-200 btn-wide w-full"
        >
          Add To Cart <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Product;

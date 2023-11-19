import { FaTrash } from "react-icons/fa";
import "./ReviewItem.css";
const ReviewItem = ({ product }) => {
  const { img, price, name, quantity } = product;
  return (
    <div className="w-[571px] h-[107px] border-2 rounded-sm mb-6 p-2 flex">
      <img className="w-20 rounded-lg" src={img} alt="" />
      <div className="review-details mx-4">
        <p>{name}</p>
        <p>
          Price: <span className="text-red-600">{price}$</span>
        </p>
        <p>
          Order Quantity: <span className="text-red-600">{quantity}</span>
        </p>
      </div>
      <button className="btn-delete">
        <FaTrash />
      </button>
    </div>
  );
};

export default ReviewItem;

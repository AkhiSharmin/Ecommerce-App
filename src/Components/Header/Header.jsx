import { Link } from "react-router-dom/dist";
import "./Header.css";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

const Header = () => {
  return (
    <nav>
      <div className="navbar bg-slate-300 p-4">
        <div className="navbar-start">
          <div>
            <ul className="flex  text-lg font-500 font-semibold">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <img
            className="w-[130px]"
            src="https://i.ibb.co/w4jmhm9/logo.png"
            alt=""
          />
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <FaShoppingBag />
          </button>
          <button className="btn btn-ghost btn-circle">
            <FaHeart />
          </button>
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-warning w-full max-w-xs"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

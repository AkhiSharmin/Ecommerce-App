import "./Header.css";
import logo from "../../assets/logo/logo.jpg";

const Header = () => {
  return (
    <div className="max-w-7xl p-8">
      <img src={logo} alt="" />
      <a href="/shop">Shop</a>
      <a href="/orders">Orders</a>
      <a href="/inventory">Inventory</a>
      <a href="/login">Login</a>
    </div>
  );
};

export default Header;

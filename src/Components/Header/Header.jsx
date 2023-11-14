import "./Header.css";
import logo from "../../assets/logo/logo.jpg";

const Header = () => {
  return (
    <nav className="flex h-20 pl-24 pr-24 justify-between bg-slate-700 items-center">
      <img className="h-16 w-16" src={logo} alt="" />
      <div className="text-white font-semibold">
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;

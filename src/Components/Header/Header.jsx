import "./Header.css";

const Header = () => {
  return (
    <nav className="flex h-20 pl-24 pr-24 justify-between bg-slate-700 items-center sticky">
      <div className="text-white">
        <img
          className="h-16 w-16"
          src="https://i.ibb.co/f0cqP1m/Screenshot-2023-11-15-010704-removebg-preview.png"
          alt=""
        />
        <h2 className="font-semibold pb-4">Beauty Zoon</h2>
      </div>
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

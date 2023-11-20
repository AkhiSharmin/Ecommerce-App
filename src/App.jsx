import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="overflow-hidden">
      <ScrollToTop className="bg-slate-200 text-white border-2" smooth />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

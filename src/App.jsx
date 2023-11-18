import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop smooth />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

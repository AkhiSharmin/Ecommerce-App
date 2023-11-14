import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <>
      <ScrollToTop smooth />
      <Header />
      <Shop />
    </>
  );
}

export default App;

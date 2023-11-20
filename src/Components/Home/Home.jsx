import Banner from "../Banner/Banner";
import Shop from "../Shop/Shop";
import ShopByCategory from "../ShopBy Category/ShopByCategory";
import SkinCare from "../SkinCare/SkinCare";

const Home = () => {
  return (
    <div>
      <Banner />
      <ShopByCategory />
      <Shop />
      <SkinCare />
    </div>
  );
};

export default Home;

import Banner from "../Banner/Banner";
import NewArrivals from "../NewArrivals/NewArrivals";
import OurBlog from "../OurBlog/OurBlog";
import Shop from "../Shop/Shop";
import ShopByCategory from "../ShopBy Category/ShopByCategory";
import SkinCare from "../SkinCare/SkinCare";

const Home = () => {
  return (
    <div>
      <Banner />
      <ShopByCategory />
      <Shop />
      <NewArrivals />
      <SkinCare />
      <OurBlog />
    </div>
  );
};

export default Home;

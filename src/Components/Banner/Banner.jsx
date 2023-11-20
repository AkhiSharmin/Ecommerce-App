import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner_img">
      <div className="banner-content">
        <img
          className="m-auto"
          src="https://i.ibb.co/wQWgC8F/Screenshot-2023-11-18-161858-removebg-preview.png"
          alt=""
        />

        <button className="btn btn-outline border-orange-500 text-white text-3xl mt-10">
          Lets Start A plan
        </button>
      </div>
    </div>
  );
};

export default Banner;

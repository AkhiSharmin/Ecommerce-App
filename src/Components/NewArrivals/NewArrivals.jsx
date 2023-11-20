import Slider from "react-slick";
import "./NewArrivals.css";

const NewArrivals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <div className="max-w-full mx-auto pt-12 pb-16">
      <h2 className="text-4xl font-500 mt-10 ml-7">NewArrivals</h2>
      <div className="p-8">
        <Slider {...settings}>
          <div className="sliderImg sliderHoverImg">
            <img
              className=""
              src="https://i.ibb.co/F6Spc2h/Rectangle-1-600x750.jpg"
              alt=""
            />
          </div>
          <div className="sliderImg">
            <img
              src="https://i.ibb.co/tZMqCgd/Rectangle-26-600x750.jpg"
              alt=""
            />
          </div>
          <div className="sliderImg">
            <img
              src="https://i.ibb.co/JcnCChZ/Rectangle-52-600x750.jpg"
              alt=""
            />
          </div>
          <div className="sliderImg">
            <img
              src="https://i.ibb.co/Bfk56ZT/Rectangle-61-600x750.jpg"
              alt=""
            />
          </div>
          <div className="sliderImg">
            <img
              src="https://i.ibb.co/F6Spc2h/Rectangle-1-600x750.jpg"
              alt=""
            />
          </div>
          <div className="sliderImg">
            <img
              src="https://i.ibb.co/tZMqCgd/Rectangle-26-600x750.jpg"
              alt=""
            />
          </div>
          <div className="sliderImg">
            <img
              src="https://i.ibb.co/JcnCChZ/Rectangle-52-600x750.jpg"
              alt=""
            />
          </div>
          <div className="sliderImg">
            <img
              src="https://i.ibb.co/Bfk56ZT/Rectangle-61-600x750.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;

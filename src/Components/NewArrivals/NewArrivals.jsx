import Slider from "react-slick";
import "./NewArrivals.css";

const NewArrivals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto pt-12 pb-16">
      <h2 className="text-4xl font-500 mt-10 ml-7">NewArrivals</h2>
      <div className="p-8">
        <Slider {...settings}>
          <div className="sliderImg sliderHoverImg1">
            <img
              className=""
              src="https://i.ibb.co/F6Spc2h/Rectangle-1-600x750.jpg"
              alt=""
            />
          </div>
          <div className="sliderImg sliderHoverImg1 sliderHoverImg2">
            <img
              src="https://i.ibb.co/tZMqCgd/Rectangle-26-600x750.jpg"
              alt=""
            />
          </div>
          <div className="sliderImg sliderHoverImg1 sliderHoverImg3">
            <img
              src="https://i.ibb.co/JcnCChZ/Rectangle-52-600x750.jpg"
              alt=""
            />
          </div>
          <div className="sliderImg sliderHoverImg1 sliderHoverImg4">
            <img
              src="https://i.ibb.co/Bfk56ZT/Rectangle-61-600x750.jpg"
              alt=""
            />
          </div>
          <div className="sliderImg sliderHoverImg1 sliderHoverImg5">
            <img
              src="https://i.ibb.co/F6Spc2h/Rectangle-1-600x750.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;

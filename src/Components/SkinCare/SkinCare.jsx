import "./SkinCare.css";
const SkinCare = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-full pt-12 pb-16">
      <div className="skinCare mx-auto relative">
        <img
          className="opacity-2"
          src="https://i.ibb.co/wdpzj7x/banner-27.jpg"
          alt=""
        />
        <div className="absolute top-40 left-16">
          <p className="font-500">HEALTHY SKIN</p>
          <h2 className="text-4xl font-500">
            Skin Care Routine <br /> With Cream
          </h2>
          <button className="bg-white px-8 py-2 my-2">See More</button>
        </div>
      </div>
      <div className="skinCare mx-auto relative">
        <img
          className="opacity-2"
          src=" https://i.ibb.co/pQnvcQj/banner-28.jpg"
          alt=""
        />
        <div className="absolute top-44 left-16">
          <h2 className="text-4xl font-500">Skin Tightening</h2>
          <p className="font-500 text-sm">Body lotion with almond extract.</p>
          <button className="bg-white px-8 py-2 my-2">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default SkinCare;

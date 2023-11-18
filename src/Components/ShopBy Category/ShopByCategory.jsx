import "./ShopByCategory.css";
const ShopByCategory = () => {
  return (
    <div className="max-w-full mx-auto gap-5 p-8 px-5">
      <h2 className="text-3xl p-4 from-neutral-500">Shop By Category</h2>
      <div className="grid grid-cols-6 gap-4 justify-center items-center">
        <div className="text-center">
          <img
            className="rounded-full mx-auto"
            src="https://i.ibb.co/drgTCtC/category-7.jpg"
            alt="Lips"
          />
          <p className="text-xl py-2">Lips</p>
        </div>
        <div className="text-center">
          <img
            className="rounded-full mx-auto"
            src="https://i.ibb.co/VQ6DSj1/category-8.jpg"
            alt="Moisturizer"
          />
          <p className="text-xl py-2">Moisturizer</p>
        </div>
        <div className="text-center">
          <img
            className="rounded-full mx-auto"
            src="https://i.ibb.co/vwyzNXn/category-9.jpg"
            alt="EyeLiner"
          />
          <p className="text-xl py-2">EyeLiner</p>
        </div>
        <div className="text-center">
          <img
            className="rounded-full mx-auto"
            src="https://i.ibb.co/tKvTTpr/category-10.jpg"
            alt="Serum"
          />
          <p className="text-xl py-2">Serum</p>
        </div>
        <div className="text-center">
          <img
            className="rounded-full mx-auto"
            src="https://i.ibb.co/phk9ZbQ/category-11.jpg"
            alt="Cleanser"
          />
          <p className="text-xl py-2">Cleanser</p>
        </div>
        <div className="text-center">
          <img
            className="rounded-full mx-auto"
            src="https://i.ibb.co/RcsqB57/category-12.jpg"
            alt="Blush"
          />
          <p className="text-xl py-2">Blush</p>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;

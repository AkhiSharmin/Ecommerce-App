const OurBlog = () => {
  return (
    <div className="pb-14">
      <h2 className="text-4xl font-500 text-center py-8">Form Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 px-8 py-8">
        <div className="skinCare">
          <img
            src="https://i.ibb.co/Mfr84nh/Rectangle-127-720x484.jpg"
            alt=""
          />
          <div className="text-center ">
            <h2 className="text-2xl font-500 pt-3 hover:text-orange-600">
              Solution for acne and sensitive skin
            </h2>
            <p className="text-xl border-b-2 border-b-orange-600 my-3 inline-block hover:text-orange-600">
              See More
            </p>
          </div>
        </div>
        <div className="skinCare">
          <img
            src="https://i.ibb.co/rbpZPnq/Rectangle-128-720x484.jpg"
            alt=""
          />
          <div className="text-center">
            <h2 className="text-2xl font-500 pt-3 hover:text-orange-600">
              Comprehensive sun protection
            </h2>
            <p className="text-xl border-b-2 border-b-orange-600 my-3 inline-block hover:text-orange-600">
              See More
            </p>
          </div>
        </div>
        <div className="skinCare">
          <img
            src="https://i.ibb.co/vzrpCsY/Rectangle-129-720x484.jpg"
            alt=""
          />
          <div className="text-center">
            <h2 className="text-2xl font-500 pt-3 hover:text-orange-600">
              Skincare routine
            </h2>
            <p className="text-xl border-b-2 border-b-orange-600 my-3 inline-block hover:text-orange-600">
              See More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;

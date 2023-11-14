const Product = (props) => {
  const { img, name, seller, quantity, price, rating } = props.product;

  return (
    <div>
      <div className="card w-96 bg-base-100 m-3 shadow-xl border-2 border-blue-950 gap-0">
        <figure>
          <img className="h-64 w-80" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Ratings: {rating} starts</p>
        </div>
        <button className="btn btn-wide w-full">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;

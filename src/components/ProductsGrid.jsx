import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

function ProductsGrid() {
  const { products } = useLoaderData();
  return (
    <div className="flex">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <Link
            className="card w-96 bg-base-100 shadow-xl"
            key={product.id}
            to={`./product/${product.id}`}
          >
            <figure className="px-10 pt-10">
              <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{title}</h2>
              <p>{dollarAmount}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;

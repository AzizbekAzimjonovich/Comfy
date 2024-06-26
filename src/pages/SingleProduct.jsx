import { useLoaderData, Link } from "react-router-dom";
import { customFetch, formatPrice, generateAmoutOptions } from "../utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const request = await customFetch(`/products/${params.id}`);
  return { product: request.data.data };
};

function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, description, price, colors, company } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(0);
  return (
    <section className="align-content">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          className="w-96 h-96 object-cover rounded-lg"
          src={image}
          alt={title}
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="title-xl font-bold text-netural-content mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-2">
            {colors.map((color, index) => {
              return (
                <button
                  key={index}
                  className={`badge w-6 h-6 mr-2 ${
                    color == productColor && "border-2 border-secondary"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              );
            })}
          </div>
          <div className="form-control w-full max-w-xs">
            <label>
              <h4 className="text-md font-medium tracking-wider capitalize">
                amout
              </h4>
            </label>
            <select
              className="select select-secondary select-border select-md"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            >
              {generateAmoutOptions(10)}
            </select>
          </div>
          <div className="mt-10">
            <button
              onClick={() => console.log("Add")}
              className="btn btn-secondary btn-md"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;

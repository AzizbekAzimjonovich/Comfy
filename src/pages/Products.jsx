import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";
import Filter from "../components/Filter";

const url = "/products";

export const loader = async ({ request }) => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

function Products() {
  return (
    <div className="align-content mt-14">
      <Filter />
      <ProductsContainer />
    </div>
  );
}

export default Products;

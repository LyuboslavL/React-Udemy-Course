import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h2>Products</h2>
      <div>This is the page where all the products are showed.</div>
      <button>
        <Link to="/">Homepage</Link>
      </button>
    </>
  );
};

export default Products;

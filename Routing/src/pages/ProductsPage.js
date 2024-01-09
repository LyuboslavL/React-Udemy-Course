import { Link, useNavigate } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Book" },
  { id: "p2", title: "Phone" },
  { id: "p3", title: "Hat" },
];

const Products = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <>
      <h2>Products</h2>
      <div>This is the page where all the products are showed.</div>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={navigateHandler}>Homepage</button>
      {/* <Link to="/">Homepage</Link> */}
    </>
  );
};

export default Products;

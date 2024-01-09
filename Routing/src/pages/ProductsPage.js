import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <>
      <h2>Products</h2>
      <div>This is the page where all the products are showed.</div>
      <button onClick={navigateHandler}>Homepage</button>
      {/* <Link to="/">Homepage</Link> */}
    </>
  );
};

export default Products;

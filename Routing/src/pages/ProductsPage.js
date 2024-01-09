import { Link, useNavigate } from "react-router-dom";

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
        <li>
          <Link to="/products/book">Book</Link>
        </li>
        <li>
          <Link to="/products/tickets">Tickets</Link>
        </li>
        <li>
          <Link to="/products/food-voucher">Food voucher</Link>
        </li>
      </ul>
      <button onClick={navigateHandler}>Homepage</button>
      {/* <Link to="/">Homepage</Link> */}
    </>
  );
};

export default Products;

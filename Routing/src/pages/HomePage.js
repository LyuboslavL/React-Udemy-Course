import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Homepage</h1>
      <p>
        Go to the <Link to="products">Products</Link> page
      </p>
    </>
  );
}

export default HomePage;

import { useParams, Link } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product details!</h1>
      <p>This is a product {params.id}</p>
      <p>
        <Link to=".." relative="path">
          Go Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetailsPage;

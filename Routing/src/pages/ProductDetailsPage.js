import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product details!</h1>
      <p>This is a product {params.id}</p>
    </>
  );
};

export default ProductDetailsPage;

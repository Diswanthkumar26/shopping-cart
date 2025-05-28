import { useParams } from "react-router-dom";
import products from "../../Data/ProductsData";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="p-4">Product not found</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <ProductCard product={product} />
    </div>
  );
};

export default ProductDetails;

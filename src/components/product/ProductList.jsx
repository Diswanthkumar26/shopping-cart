import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import products from "../../Data/ProductsData";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-50 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 py-2">
        {currentProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        onNext={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      />
    </div>
  );
};

export default ProductList;

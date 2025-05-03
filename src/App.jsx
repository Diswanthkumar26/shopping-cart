import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DealsFilter from "./components/DealsFilter";
import { useSelector } from "react-redux";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const products = useSelector((state) => state.product.products);

  return (
    <>
      <Navbar />
      <DealsFilter />
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-50 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 py-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

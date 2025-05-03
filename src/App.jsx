import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DealsFilter from "./components/DealsFilter";
import { useSelector } from "react-redux";
import Blog from "./components/Blog";
import ProductList from "./subComponents/ProductList";
import "./App.css";

function App() {
  const products = useSelector((state) => state.product.products);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <DealsFilter />
              <ProductList />
            </>
          }
        />
        <Route path="/hotdeals" element={<div>Hot Deals Page</div>} />
        <Route path="/deal-finder" element={<div>Deal Finder</div>} />
        <Route path="/coupons" element={<div>Coupons</div>} />
        <Route path="/quiz" element={<div>Quiz</div>} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;

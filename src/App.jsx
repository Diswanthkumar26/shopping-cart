import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import DealsFilter from "./components/deals/DealsFilter";
import { useSelector } from "react-redux";
import Blog from "./components/blog/Blog";
import DealsFinder from "./components/deals/DealsFinder";
import ProductList from "./components/product/ProductList";
import CarouselCards from "./components/carousel/CarouselCards";
import Footer from "./components/common/Footer";
import BottomNavbar from "./components/common/BottomNavbar";
import BlogDetails from "./components/blog/BlogDetails";
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
              <CarouselCards />
              <DealsFinder />
              
            </>
          }
        />
        <Route path="/hotdeals" element={<div>Hot Deals Page</div>} />
        <Route path="/deal-finder" element={<div>Deal Finder</div>} />
        <Route path="/coupons" element={<div>Coupons</div>} />
        <Route path="/quiz" element={<div>Quiz</div>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} /> 
      </Routes>
      <Footer />
      <BottomNavbar />
    </>
  );
}

export default App;

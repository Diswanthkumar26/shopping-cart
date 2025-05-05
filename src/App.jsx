import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DealsFilter from "./subComponents/DealsFilter";
import { useSelector } from "react-redux";
import Blog from "./components/Blog";
import DealsFinder from "./components/DealsFinder";
import ProductList from "./subComponents/ProductList";
import CarouselCards from "./subComponents/CarouselCards";
import Footer from "./components/Footer";
import BottomNavbar from "./components/BottomNavbar";
import BlogDetails from "./blogs/BlogDetails";
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

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import HotDeals from "./pages/HotDeals";
import DealFinder from "./pages/DealFinder";
import Blog from "./components/blog/Blog";
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
        <Route path="/"element={<Home /> }/>
        <Route path="/hotdeals" element={<HotDeals />} />
        <Route path="/deal-finder" element={<DealFinder />} />
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

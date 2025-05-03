import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from "./ProductCard";

const HorizontalCarousel = ({ products }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-blue-800 p-4 rounded-xl">
      <h2 className="text-white text-lg font-semibold mb-3">
        LG, Samsung, Mi & more 32 inch Smart TVs under ₹10999
      </h2>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-10"
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[220px] max-w-[220px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      <div className="text-right mt-2">
        <a href="#" className="text-white font-medium hover:underline">
          View All &rarr;
        </a>
      </div>
    </div>
  );
};

export default HorizontalCarousel;

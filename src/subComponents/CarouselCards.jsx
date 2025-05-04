import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SampleImg from "../assets/apple-iphone-smartphone-desk.webp"

const sampleProducts = [
  {
    id: 1,
    title: "Samsung 32-inch Smart TV",
    image: SampleImg,
    offer: "65% off",
  },
  {
    id: 2,
    title: "Motorola QLED HD TV",
    image: SampleImg,
    offer: "62% off",
  },
  {
    id: 3,
    title: "Samsung LED TV",
    image: SampleImg,
    offer: "42% off",
  },
  {
    id: 4,
    title: "Infinix Linux TV",
    image: SampleImg,
    offer: "58% off",
  },
  {
    id: 5,
    title: "Redmi Smart TV",
    image: SampleImg,
    offer: "49% off",
  },
  {
    id: 6,
    title: "LG WebOS TV",
    image: SampleImg,
    offer: "55% off",
  },
  {
    id: 7,
    title: "Realme Android TV",
    image: SampleImg,
    offer: "51% off",
  },
  {
    id: 8,
    title: "OnePlus Y Series",
    image: SampleImg,
    offer: "57% off",
  },
];

const HorizontalCarousel = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-blue-800 p-6 rounded-lg text-white max-w-6xl mx-auto relative">
      <h2 className="text-white text-xl font-bold mb-3">
        LG, Samsung, Mi & more 32 inch Smart TVs under ₹10999
      </h2>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full z-10"
          onClick={() => scroll("left")}
        >
          <FiChevronLeft className="text-black" size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide px-6"
        >
          {sampleProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[200px] bg-white rounded shadow p-2 flex-shrink-0"
            >
              <div className="relative inline-block w-64 flex-shrink-0 bg-transparent">
                <div className="absolute top-2 right-0 bg-red-600 text-white text-xs px-2 py-1 rounded-full z-10">
                  {product.offer}
                </div>
              </div> 
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-cover rounded"
              />
              <div className="mt-2 text-sm font-medium text-gray-800">
                {product.title}
              </div>
               
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full z-10"
          onClick={() => scroll("right")}
        >
          <FiChevronRight className="text-black" size={24} />
        </button>
      </div>

      <div className="mt-4 text-right">
        <button className="text-white hover:underline">View All &rarr;</button>
      </div>
    </div>
  );
};

export default HorizontalCarousel;

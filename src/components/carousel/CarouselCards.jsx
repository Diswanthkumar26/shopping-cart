import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SampleImg from "../../assets/apple-iphone-smartphone-desk.webp"

const sampleProducts = [
  {
    id: 1,
    title: '[Extra ₹6000 Off] BLACK+DECKER (32") A1 Series HD Ready',
    image: SampleImg,
    offer: "65% off",
  },
  {
    id: 2,
    title: 'MOTOROLA 32HDGQMVS2Q (32") QLED HD Ready Smart',
    image: SampleImg,
    offer: "62% off",
  },
  {
    id: 3,
    title: 'Samsung UA32T4380AKXXL 32" HD Ready Smart LED',
    image: SampleImg,
    offer: "42% off",
  },
  {
    id: 4,
    title: 'Infinix 32Y1S 32" inch HD Ready LED Smart Linux TV 2024 Edition',
    image: SampleImg,
    offer: "58% off",
  },
  {
    id: 5,
    title: 'REDMI (32") HD LED Smart FireTv OS 7 TV L32MA-FVIN',
    image: SampleImg,
    offer: "49% off",
  },
  {
    id: 6,
    title: 'Sony Bravia 32W830K 32" HD Ready Google TV',
    image: SampleImg,
    offer: "55% off",
  },
  {
    id: 7,
    title: 'OnePlus Y Series 32" HD Ready Smart LED TV',
    image: SampleImg,
    offer: "51% off",
  },
  {
    id: 8,
    title: 'Xiaomi Smart TV 5A 32" HD Ready Android TV',
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
              className="max-w-[200px] bg-white rounded shadow p-2 flex-shrink-0"
            >
              <div className="relative inline-block w-64 flex-shrink-0 bg-transparent">
                <div className="absolute top-0 right-15 bg-red-600 text-white text-xs px-2 py-1 rounded-full z-10">
                  {product.offer}
                </div>
              </div> 
              <img
                src={product.image}
                alt={product.title}
                className=" h-32 object-cover rounded"
              />
              <p className="text-sm text-gray-700 font-medium mt-2 text-center overflow-hidden text-ellipsis">
                {product.title}
              </p>
               
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

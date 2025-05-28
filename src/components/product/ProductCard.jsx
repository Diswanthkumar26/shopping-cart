import { FiTag, FiClock } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 rounded-xl shadow bg-white hover:scale-105 transition-all duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="h-35 w-full object-cover mb-1 rounded"
      />
      <div className="flex items-center gap-2 mb-1">
        <img src={product.titleImg} alt="icon" className="h-6 object-cover" />
        <h3 className="text-sm font-semibold">{product.title}</h3>
      </div>
      <p className="text-sm text-gray-700">{product.price}</p>
      <div className="flex text-sm text-gray-700">
        <FiClock className="text-gray-500 text-lg pt-1 mr-1" />
        {product.time}
      </div>
      <span
        className={`inline-block px-2 py-1 text-xs rounded mt-2 ${
          product.tagType === "coupon"
            ? "bg-yellow-200"
            : product.tagType === "bank"
            ? "bg-yellow-200"
            : "bg-yellow-200"
        }`}
      >
        <div className="flex">
          <FiTag className="text-yellow-600 text-sm pt-1 mr-1" />
          {product.tag}
        </div>
      </span>
      <button className="bg-green-600 text-white px-4 py-2 mt-3 rounded hover:bg-green-700 w-full">
        🛒 Buy Now
      </button>
    </div>
  );
};

export default ProductCard;

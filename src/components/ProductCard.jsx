import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 rounded-xl shadow bg-white">
     <img src={product.image} alt={product.title} className="h-35 w-full object-cover mb-1 rounded" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-700">{product.price}</p>
      <p className="text-xs text-gray-500">{product.time}</p>
      <span className={`inline-block px-2 py-1 text-xs rounded mt-2
        ${product.tagType === 'coupon' ? 'bg-yellow-200' :
           product.tagType === 'bank' ? 'bg-yellow-200' :
           'bg-yellow-200'}
      `}>
        {product.tag}
      </span>
      <button className="bg-green-600 text-white px-4 py-2 mt-3 rounded hover:bg-green-700 w-full">
        🛒 Buy Now
      </button>
    </div>
  );
};

export default ProductCard;

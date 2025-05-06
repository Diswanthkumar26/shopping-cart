import React, { useState } from 'react';

const categories = ['All', 'Live Deals', 'Hot Deals', 'Coupons'];

export default function DealsFilter() {
  const [active, setActive] = useState('All');

  return (
    <div className="flex justify-center space-x-4 py-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all bg-blue-600 
            ${
              active === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-black text-sm hover:bg-gray-200'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

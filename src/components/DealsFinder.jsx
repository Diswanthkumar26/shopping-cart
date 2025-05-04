import React, { useState } from "react";
import AmazonImg from "../assets/Amazon_logo.svg.png";

export default function DealsFinder() {
  const [primeOnly, setPrimeOnly] = useState(false);
  const [discountRange, setDiscountRange] = useState([20, 80]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [keyword, setKeyword] = useState("");

  return (
    <div className="pt-8 pb-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-100 to-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-red-600 text-center mb-4">
          Deal Finder | Find Your Best Deals 🔥
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-lg font-semibold text-red-600">
              Search Keyword
            </label>
            <input
              type="text"
              placeholder="Search for Products, Brands..."
              className="w-full border border-gray-300 rounded-lg p-3 mt-1 text-gray-700 shadow-sm focus:ring-2 focus:ring-red-400"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />

            <div className="flex items-center justify-between my-3">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-2 text-gray-600">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <label className="text-lg font-semibold text-red-600">
              Select Category
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-3 mt-1 text-gray-700 shadow-sm focus:ring-2 focus:ring-red-400">
              <option>All</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home Appliances</option>
              <option>Books</option>
              <option>Beauty & Health</option>
            </select>

            <label className="text-lg font-semibold text-red-600 mt-4 block">
              Discount Percentage
            </label>
            <p className="text-sm text-teal-600">
              Between <strong>{discountRange[0]}%</strong> and{" "}
              <strong>{discountRange[1]}%</strong>
            </p>

            <div className="flex space-x-4 items-center">
              <input
                type="range"
                min="0"
                max="100"
                value={discountRange[0]}
                onChange={(e) =>
                  setDiscountRange([Number(e.target.value), discountRange[1]])
                }
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="100"
                value={discountRange[1]}
                onChange={(e) =>
                  setDiscountRange([discountRange[0], Number(e.target.value)])
                }
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-semibold text-red-600">
              Price Range
            </label>
            <div className="flex space-x-2 mt-1">
              <input
                type="number"
                placeholder="Min. Price"
                className="w-1/2 border border-gray-300 rounded-lg p-3 text-gray-700 shadow-sm"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max. Price"
                className="w-1/2 border border-gray-300 rounded-lg p-3 text-gray-700 shadow-sm"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>

            <label className="text-lg font-semibold text-red-600 mt-4 block">
              Sort By
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-3 mt-1 text-gray-700 shadow-sm focus:ring-2 focus:ring-red-400">
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Ratings</option>
              <option>Newest Arrivals</option>
            </select>

            <label className="text-lg font-semibold text-red-600 mt-4 block">
              Prime Deals Only
            </label>
            <div className="flex items-center space-x-3 bg-gray-200 p-3 rounded-lg shadow-sm">
              <span className="text-gray-700 font-medium">
                Show Only Prime Deals
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={primeOnly}
                  onChange={() => setPrimeOnly(!primeOnly)}
                />
                <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-blue-600 relative transition-colors duration-300">
                  <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 transform peer-checked:translate-x-7"></span>
                </div>
              </label>
              <img src={AmazonImg} alt="Prime" className="h-4 ml-1" />
            </div>

            <button className="w-full bg-red-600 text-white py-3 mt-6 rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
              🔎 Find Deals Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

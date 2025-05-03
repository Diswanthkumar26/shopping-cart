import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false);
  return (
    <nav className="bg-blue-800 text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="text-white-800 font-bold px-2 py-1 border border-white-800 square">RQ</div>
        <span className="text-xl font-semibold">Offerhubdeals</span>
      </div>
      <div className="flex-1 flex justify-center ml-[-50px] space-x-6 font-medium">
        <NavLink to="/" className="hover:underline text-white-300 text-lg">Live Deals</NavLink>
        <NavLink to="/" className="hover:underline text-white-300 text-lg">Hotdeals</NavLink>
        <NavLink to="/" className="hover:underline text-white-300 text-lg">Deal Finder</NavLink>
        <NavLink to="/" className="hover:underline text-white-300 text-lg">Coupons</NavLink>
        <NavLink to="/" className="hover:underline text-white-300 text-lg">Quiz</NavLink>
        <NavLink to="/blog" className="hover:underline text-white-300 text-lg">Blog</NavLink>
      </div>
      <div className="relative">
        <button
          onClick={() => setShowSearch((prev) => !prev)}
          className="p-2 bg-blue-700 rounded hover:bg-blue-600"
        >
          <FiSearch size={20} />
        </button>
        {showSearch && (
          <div className="absolute bg-white top-12 right-0 w-48 p-2 rounded shadow-md text-gray-800">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-200 outline-none"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

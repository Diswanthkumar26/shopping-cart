import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDealFinderPage = location.pathname === "/deal-finder";

  const defaultLinks = [
    { to: "/", label: "Live Deals" },
    { to: "/hotdeals", label: "Hotdeals" },
    { to: "/deal-finder", label: "Deal Finder" },
    { to: "/coupons", label: "Coupons" },
    { to: "/quiz", label: "Quiz" },
    { to: "/blog", label: "Blog" },
  ];

  const dealFinderLinks = [
    { to: "/", label: "Justin" },
    { to: "/hotdeals", label: "Hotdeals" },
    { to: "/whatsapp", label: "WhatsApp" },
    { to: "/telegram", label: "Telegram" },
  ];

  const navLinks = isDealFinderPage ? dealFinderLinks : defaultLinks;

  return (
    <nav className="bg-blue-800 text-white px-6 py-4 flex items-center justify-between relative">
      <div className="flex items-center space-x-2 z-20">
        <div className="text-white font-bold px-2 py-1 border border-white">DK</div>
        <span className="text-xl font-semibold">Offerhubdeals</span>
      </div>
      <div className="hidden md:flex flex-1 justify-center space-x-6 font-medium">
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.to} className="hover:underline text-lg">
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center space-x-4 z-20">
        <button
          onClick={() => setShowSearch((prev) => !prev)}
          className="p-2 bg-blue-700 rounded hover:bg-blue-600"
        >
          <FiSearch size={20} />
        </button>
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-full right-0 w-[200px] h-[100vh] bg-blue-800 flex flex-col items-start p-4 space-y-2 font-medium z-10">
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.to} className="w-full hover:underline">
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
      {showSearch && (
        <div className="absolute bg-white top-16 right-4 w-48 p-2 rounded shadow-md text-gray-800 z-20">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 outline-none rounded"
          />
        </div>
      )}
    </nav>
  );
}

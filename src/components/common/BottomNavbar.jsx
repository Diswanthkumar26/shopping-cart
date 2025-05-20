import { NavLink } from "react-router-dom";

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-700 text-white flex justify-around items-center py-3 shadow-lg z-50 transition-opacity duration-300 opacity-100">
      
      <NavLink
        to="/"
        className="flex flex-col items-center text-sm hover:text-blue-200"
      >
        <span className="text-lg">🏠</span>
        <span className="text-sm">Just In</span>
      </NavLink>

      <NavLink
        to="/deal-finder"
        className="flex flex-col items-center text-sm hover:text-blue-200"
      >
        <span className="text-lg">🔖</span>
        <span className="text-sm">Deal Finder</span>
      </NavLink>

      <NavLink
        to="/quiz"
        className="flex flex-col items-center text-sm hover:text-blue-200"
      >
        <span className="text-lg">❓</span>
        <span className="text-sm">Quiz</span>
      </NavLink>

      <NavLink
        to="/coupons"
        className="flex flex-col items-center text-sm hover:text-blue-200"
      >
        <span className="text-lg">🎟️</span>
        <span className="text-sm">Coupon</span>
      </NavLink>
    </div>
  );
}


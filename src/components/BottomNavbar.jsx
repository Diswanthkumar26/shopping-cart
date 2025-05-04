export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-700 text-white flex justify-around items-center py-3 shadow-lg z-50 transition-opacity duration-300 opacity-100">
      <div className="flex flex-col items-center text-sm">
        <span class="text-lg">🏠</span>
        <span className="text-sm">Just In</span>
      </div>
      <div className="flex flex-col items-center text-sm">
        <span class="text-lg">🔖</span>
        <span className="text-sm">Deal Finder</span>
      </div>
      <div className="flex flex-col items-center text-sm">
        <span class="text-lg">❓</span>
        <span className="text-sm">Quiz</span>
      </div>
      <div className="flex flex-col items-center text-sm">
        <span class="text-lg">🎟️</span>
        <span className="text-sm">Coupon</span>
      </div>
    </div>
  );
}

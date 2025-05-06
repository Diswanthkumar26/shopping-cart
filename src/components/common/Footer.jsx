import GooglePlay from "../../assets/google.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mb-16">
      <div className="max-w-7xl mx-auto px-5 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between">
          {/* Logo & Description */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-xl font-semibold">DEALSMAGNET®</h1>
            <p className="mt-2 text-gray-300">
              Deals, Discounts, Offers, Freebies and Saving in Online Shopping -
              Dealsmagnet
            </p>
            <a href="#" className="mt-4">
              <img
                src={GooglePlay}
                alt="Get it on Google Play"
                className="w-40"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-lg font-bold">
            {/* Deals Section */}
            <div>
              <h2 className="font-semibold">Deals</h2>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <a href="#" className="hover:underline">
                    Live Deals
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:underline">
                    Hot Deals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Coupons
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Quiz Answers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* About Section */}
            <div>
              <h2 className="font-semibold">About</h2>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Bug Report
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Stores & Categories */}
            <div>
              <h2 className="font-semibold ">Stores</h2>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <a href="#" className="hover:underline">
                    Amazon
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Flipkart
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Myntra
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Ajio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Croma
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold ">Categories</h2>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <a href="#" className="hover:underline">
                    Mobile Phones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Laptop Deals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Refrigerators
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Washing Machines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Televisions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-600 pt-6 text-center text-gray-400 text-sm">
          {/* Bottom Text */}
          <div className="text-center text-gray-200 text-xs">
            <p className="text-gray-400">
              By Using This Site, you Agree to the{" "}
              <a href="#" className="text-white">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-white">
                Privacy Policy
              </a>{" "}
              of Dealsmagnet.
            </p>
            <p className="mt-2 text-gray-400">
              Website is in Development Stage, users shall use website with
              Caution.
            </p>
            <p className="mt-2 text-gray-400">
            © 2025 | Dealsmagnet® Proudly, Made in India with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

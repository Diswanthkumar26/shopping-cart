import React, { useState } from "react";
import PrimeLogo from "../assets/amazon_prime_logo.png";
import AmazonDeals from "../assets/amazon-deal-finder-1.webp";

export default function DealFinder() {
  const [isPrime, setIsPrime] = useState(false);
  const [discountRange, setDiscountRange] = useState([20, 80]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="px-4 pb-20 bg-gray-100  sm:px-8 md:px-16 lg:px-24 xl:px-50 mx-auto">
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full md:w-96">
          <h1 className="text-red-600 text-xl font-bold mb-4 text-center">
            Amazon Deal Finder
          </h1>
          <input
            type="text"
            placeholder="Search for Products, Brands or Categories"
            className="w-full border-b border-gray-300 focus:outline-none text-sm pb-1 mb-2"
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

          <label className="text-lg font-semibold text-red-600">
            Price Range
          </label>
          <div className="flex space-x-2 mt-1">
            <input
              type="number"
              placeholder="Min. Price"
              className="w-1/2 border-b border-gray-300 p-3 text-gray-700"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max. Price"
              className="w-1/2 border-b border-gray-300 p-3 text-gray-700"
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

          <div className="flex items-center gap-2 mt-6 mb-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isPrime}
                onChange={() => setIsPrime(!isPrime)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
            <img
            src={PrimeLogo}
            alt="Amazon Deal Finder Logo"
            className="max-h-40 object-contain"
          />
          </div>

          <div className="mb-4">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-red-600 font-semibold text-sm"
            >
              <span className="text-purple-600">⚙</span> Advance Filter
            </button>
          </div>

          {showAdvanced && (
            <div className="border border-gray-300 rounded-md p-4 mb-4">
              <p className="text-red-600 font-semibold mb-2">
                Average Customer Review
              </p>
              <select className="w-full border-b border-gray-300 mb-4 text-sm focus:outline-none">
                <option>All</option>
                <option>4 stars & up</option>
                <option>3 stars & up</option>
                <option>2 stars & up</option>
              </select>

              <p className="text-red-600 font-semibold mb-2">
                Filter By Brands
              </p>
              <input
                type="text"
                placeholder="Type Brand Name & Press Enter"
                className="w-full border-b border-gray-300 focus:outline-none text-sm"
              />
            </div>
          )}

          <div className="flex gap-4">
            <button className="bg-gray-700 text-white px-4 py-2 rounded shadow">
              Share
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded shadow">
              View Deals
            </button>
          </div>
        </div>

        <div className="bg-white  p-6 flex items-center justify-center w-full h-60 md:w-[500px]">
          <img
            src={AmazonDeals}
            alt="Amazon Deal Finder Logo"
            className="max-h-40 object-contain"
          />
        </div>
      </div>
    </div>
    <div className="mt-6 pt-6">
      <div className="w-full px-4 md:px-0 md:w-11/12 mx-auto">
        <h3 className="text-lg font-bold mt-6 mb-2">About Amazon Deal Finder:</h3>

        <h4 className="text-base font-semibold mt-4">What is Amazon Deal Finder?</h4>
        <p className="text-gray-600 text-justify mb-2">
          Amazon Deal Finder is a Shopping tool to help you find the best deals on Amazon.
          With Amazon Deal finder you can search for deals with your choice of Discount, Price Range and filters.
          This World’s Most Advance Amazon Deal Finder can filter Deals by Categories, Price, Discount, Rating &amp;
          Reviews and Brands. Find Crazy Deals, Deep Discounted Products and Hidden Offers from Millions of products
          on Amazon India.
        </p>

        <h4 className="text-base font-semibold mt-4">How to Use Amazon Deal Finder?</h4>
        <p className="text-gray-600 text-justify mb-2">
          Finding Deals with Amazon Deal finder is easy. Just enter your Query in the search box or select your choice
          of category, Select the discount you desire to get and bam, hit the Find Deals button. It doesn't End here,
          You Can use Additional Features such as Prime Only &amp; Top Brands filters and Filter Deals By your choice
          of Brands.
        </p>

        <h4 className="text-base font-semibold mt-4">Why It's World’s Most Advance Amazon Deal Finder?</h4>
        <p className="text-gray-600 text-justify mb-2">
          To find you the best deals from millions of products on Amazon.in, we have developed following unique features for you:
        </p>
        <ul className="list-disc list-inside pl-4 text-gray-600 mb-2">
          <li>
            <strong>More than 7000+ Categories &amp; Sub Categories Option:</strong> We Have the Highest Number of Categories &amp; Sub-Categories options to find deals easily.
          </li>
          <li>
            <strong>Filter Deals by Brands:</strong> You can filter deals by your choice of Brands with Most Advance Amazon Deal finder.
            Just Enter the Brand name and Press Enter, That's it. You can add up to 20 Brands in each search.
          </li>
          <li>
            <strong>Top Brands Filter for Fashion Category:</strong> We have Added Top Brand filter in Fashion Categories. Amazon Deal Finder "Top Brands" filter also Includes "Made for Amazon" and if you select a filter, You will get products from Top Brands on Amazon &amp; Made for Amazon.
          </li>
          <li>
            <strong>Filter Products by Ratings:</strong> Rating is also a major decision-maker for your Purchase. For your convenience, we have Included this option in Amazon Deal finder to filter Products by user ratings.
          </li>
        </ul>

        <p className="text-gray-600 text-justify mb-2 mt-4">
          <strong>Please Note:</strong> Discount &amp; Price Filter are based on the lowest third-party Sellers and used item prices.
          This Tool is in Development &amp; May not Provide intended results sometimes. You can report Such incident with Feedback and{" "}
          <a
            href="https://forms.gle/JQVP3ZAVRfhexRPH6"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-blue-600 underline"
          >
            Comment here
          </a>.
        </p>

        <p className="text-gray-600 text-justify mb-2 mt-4">
          <strong>Disclaimer:</strong> Dealsmagnet.com is a participant in the Amazon Associates Program, an affiliate advertising
          program designed to provide a means for sites to earn advertising fees by advertising and linking to amazon.in. All the
          Links Generated by Tool Are Affiliated Links and We May Earn Commission from Qualifying Purchase.
        </p>
      </div>
    </div>
  </div>    
  );
}

import { FiClock, FiTag } from "react-icons/fi";
import productImg from '../assets/gradient-product-card-template_23-2149656335.avif'
import productImg2 from '../assets/Amazon_logo.svg.png'

const hotDealsProducts = [
  {
    id: 1,
    titleImg: productImg2,
    title: "Wireless Earbuds",
    price: "₹1,299",
    time: "56 mins ago",
    tag: "Apply Rs.2600 Coupon",
    tagType: "coupon",
    image: productImg,
  },
  {
    id: 2,
    titleImg: productImg2,
    title: "Smartwatch",
    price: "₹2,999",
    time: "1 hr ago",
    tag: "Pay Using SBI CC",
    tagType: "bank",
    image: productImg,
  },
  {
    id: 3,
    titleImg: productImg2,
    title: "Gaming Mouse",
    price: "₹799",
    time: "2 hrs ago",
    tag: "Limited Time Deal",
    tagType: "limited",
    image: productImg,
  },
  {
    id: 4,
    titleImg: productImg2,
    title: "4K TV",
    price: "₹34,999",
    time: "30 mins ago",
    tag: "Apply Rs.1000 Discount",
    tagType: "limited",
    image: productImg,
  },
  {
    id: 5,
    titleImg: productImg2,
    title: "Air Fryer",
    price: "₹4,999",
    time: "2 hrs ago",
    tag: "Bank Offer Available",
    tagType: "limited",
    image: productImg,
  },
  {
    id: 6,
    titleImg: productImg2,
    title: "Smartphone",
    price: "₹18,999",
    time: "3 hrs ago",
    tag: "No Cost EMI",
    tagType: "limited",
    image: productImg,
  },
  {
    id: 7,
    titleImg: productImg2,
    title: "Amazon ₹500 Cashback",
    price: "₹0",
    time: "10 mins ago",
    tag: "Cashback Offer",
    tagType: "limited",
    image: productImg,
  },
  {
    id: 8,
    titleImg: productImg2,
    title: "Laptop Discount Coupon",
    price: "₹2000 Off",
    time: "1 hrs ago",
    tag: "Apply Coupon",
    tagType: "limited",
    image: productImg,
  },
  {
    id: 9,
    titleImg: productImg2,
    title: "Headphone Discount",
    price: "₹500 Off",
    time: "4 hrs ago",
    tag: "Limited Time Offer",
    tagType: "limited",
    image: productImg,
  },
];

function ProductCard({ product }) {
  return (
    <div className="p-4 rounded-xl shadow bg-white hover:scale-105 transition-all duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="h-35 w-full object-cover mb-1 rounded"
      />
      <div className="flex items-center gap-2 mb-1">
        <img
          src={product.titleImg}
          alt="icon"
          className=" h-6 object-cover"
        />
        <h3 className="text-sm font-semibold">{product.title}</h3>
      </div>
      <p className="text-sm text-gray-700">{product.price}</p>
      <p className="text-sm text-gray-700">
        <div className="flex">
          <FiClock className="text-gray-500 text-lg pt-1" />
          {product.time}
        </div>
      </p>
      <span
        className={`inline-block px-2 py-1 text-xs rounded mt-2
        ${
          product.tagType === "coupon"
            ? "bg-yellow-200"
            : product.tagType === "bank"
            ? "bg-yellow-200"
            : "bg-yellow-200"
        }
      `}
      >
        <div className="flex">
          <FiTag className="text-yellow-600 text-sm pt-1" />
          {product.tag}
        </div>
      </span>
      <button className="bg-green-600 text-white px-4 py-2 mt-3 rounded hover:bg-green-700 w-full">
        🛒 Buy Now
      </button>
    </div>
  );
}

export default function HotDeals() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-50 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 py-2">
      {hotDealsProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
}

import { createSlice } from '@reduxjs/toolkit';
import productImg from '../assets/gradient-product-card-template_23-2149656335.avif'

const initialState = {
  products: [
    {
      id: 1,
      title: "Wireless Earbuds",
      price: "₹1,299",
      time: "56 mins ago",
      tag: "Apply Rs.2600 Coupon",
      tagType: "coupon",
      image: productImg,
    },
    {
      id: 2,
      title: "Smartwatch",
      price: "₹2,999",
      time: "1 hr ago",
      tag: "Pay Using SBI CC",
      tagType: "bank",
      image: productImg,
    },
    {
      id: 3,
      title: "Gaming Mouse",
      price: "₹799",
      time: "2 hrs ago",
      tag: "Limited Time Deal",
      tagType: "limited",
      image: productImg,
    },
    {
      id: 4,
      title: "Gaming Mouse",
      price: "₹799",
      time: "2 hrs ago",
      tag: "Limited Time Deal",
      tagType: "limited",
      image: productImg,
    },
    {
      id: 5,
      title: "Gaming Mouse",
      price: "₹799",
      time: "2 hrs ago",
      tag: "Limited Time Deal",
      tagType: "limited",
      image: productImg,
    },
    {
      id: 6,
      title: "Gaming Mouse",
      price: "₹799",
      time: "2 hrs ago",
      tag: "Limited Time Deal",
      tagType: "limited",
      image: productImg,
    },
    {
      id: 7,
      title: "Gaming Mouse",
      price: "₹799",
      time: "2 hrs ago",
      tag: "Limited Time Deal",
      tagType: "limited",
      image: productImg,
    },
    {
      id: 8,
      title: "Gaming Mouse",
      price: "₹799",
      time: "2 hrs ago",
      tag: "Limited Time Deal",
      tagType: "limited",
      image: productImg,
    },
    {
      id: 9,
      title: "Gaming Mouse",
      price: "₹799",
      time: "2 hrs ago",
      tag: "Limited Time Deal",
      tagType: "limited",
      image: productImg,
    },
  ],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {}
});

export default productSlice.reducer;

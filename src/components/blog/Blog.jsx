import Banner from "./Bannar"
import BlogList from "./BlogList";
import FaqItem from "./FaqItem";
import Pagination from "../product/Pagination";


export default function Blog() {
  return (
    <>
      <Banner />
      <BlogList/>
      <Pagination />
      <FaqItem/>
    </>
  );
}
import Banner from "../blogs/Bannar"
import BlogList from "../subComponents/BlogList";
import FaqItem from "../blogs/FaqItem";
import Pagination from "../subComponents/Pagination";


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
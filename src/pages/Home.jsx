import DealsFilter from "../components/deals/DealsFilter";
import ProductList from "../components/product/ProductList";
import CarouselCards from "../components/carousel/CarouselCards";
import DealsFinder from "../components/deals/DealFining";

export default function Home() {
  return (
    <>
      <DealsFilter />
      <ProductList />
      <CarouselCards />
      <DealsFinder />
    </>
  );
}
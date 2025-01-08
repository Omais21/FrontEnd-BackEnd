import Hero from "../components/hero.jsx";
import Timer from "../components/Timer.jsx";
import FlashSale from "../components/FlashSale.jsx";
import SellingProduct from "../components/SellingProducts.jsx";
import BrowserCategories from "../components/BrowserCategories.jsx";
import Categories from "../components/Categories.jsx";
import ExploreProduct from "../components/ExploreProduct.jsx";
import Feature from "../components/Feature.jsx";
import DeliverySection from "../components/DeliverySection.jsx";
import { useSelector } from "react-redux";

export default function Home() { 
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div className={`${darkMode ? "bg-slate-900 text-white" : ""}`}>
      <Hero />
      <Timer />
      <FlashSale />
      <BrowserCategories />
      <SellingProduct />
      <Categories />
      <ExploreProduct />
      <Feature />
      <DeliverySection />
    </div>
  );
}

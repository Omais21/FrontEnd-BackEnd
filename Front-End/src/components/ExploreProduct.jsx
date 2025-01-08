import ProductCard from "./productcard";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useproducts";

export default function ExploreProduct() {
  
    const { Products , isLoading, error} = useProducts("limit=8&skip=10");
 
  return (
    <div>
      <div className=" mx-[92px] mt-16">
        <div className="flex gap-4 items-center">
          <span className="bg-primary py-5 px-[10px] rounded"></span>
          <span className="text-primary font-semibold text-base">
            Our Products
          </span>
        </div>

        <div className="flex justify-between items-center text-center mt-5 ">
          <div className="flex items-center gap-5 ">
            <p className="text-4xl font-semibold ">Explore Our Products</p>
          </div>

        </div>
      </div>

      <div className="flex flex-wrap gap-7 mx-[92px] pt-9">
      {isLoading ? "loading..." : ""}
      {error}
      {Products?.map((item)=>(
            <ProductCard
            key={item.id} 
            id={item.id} 
            cardDiscount={item.discountPercentage}
            cardImage={item.thumbnail} 
            cardName={item.title} 
            discountPercentage={item.discountPercentage} 
            price={item.price} 
            rating={item.rating}
          />
          )) }
      
      </div>
      <div className="bg-primary text-white w-60 h-14 rounded my-10 mx-auto text-center p-[18px] hover:cursor-pointer ">
      <Link to={"../products"} className="">{""}View All Products{""}</Link>
      </div>
    </div>
  );
}







































//  { const ApI_KeY='https://dummyjson.com/products?'

//   const [products,setProducts] = useState(null)
 
//    const geT_DatA = async () => {
 
//    const response= await axios(ApI_KeY);
 
 
//    setProducts(response?.data?.products);
 
//    };
 
//      useEffect(()=>{
     
//      geT_DatA();
 
//      },[])
   
//     geT_DatA();
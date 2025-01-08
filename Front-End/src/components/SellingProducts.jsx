import ProductCard from "./productcard";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useproducts";

export default function SellingProduct(){

    const { Products , isLoading, error} = useProducts('limit=4&skip=4');

  return (
    <div>
      <div className="container-x pt-12">
        <div className="flex gap-4 items-center">
          <span className="bg-primary py-5 px-[10px] rounded"></span>
          <span className="text-primary font-semibold text-base">
            This Month
          </span>
        </div>

        <div className="flex justify-between items-center text-center mt-5 ">
          <div className="flex items-center gap-5 ">
            <p className="text-4xl font-semibold ">Best Selling Products</p>
          </div>

          <div className="bg-primary w-40 h-14 rounded text-white text-center pt-4 -mt-3 hover:cursor-pointer">
          <Link to={"../products"} className="">{""}View All Products{""}</Link>
          </div>
        </div>
      </div>
      <div className="flex container-x gap-7 pt-7">  
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
    </div>
  );
}





























//  { const ApI_KeY='https://dummyjson.com/products?limit=4&skip=4'

//   const [products,setProducts] = useState(null)
 
//    const geT_DatA = async () => {
 
//    const response= await axios(ApI_KeY);
 
//    // console.log(response.data.products);
 
//    setProducts(response?.data?.products);
 
//    };
 
//      useEffect(()=>{
     
//      geT_DatA();
 
//      },[])
   
//     geT_DatA();
 
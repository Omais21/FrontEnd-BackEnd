import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ProductCard from "./productcard";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useproducts";


export default function FlashSale() {

    const { Products , isLoading, error} = useProducts('limit=4');

   
    return (
    <>
        <div className="flex container-x gap-7 flex-wrap">
        {isLoading ? 'Loading' || <Skeleton count={4} /> || "Loading"   : ""}
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
        <div className="bg-primary text-white w-60 h-14 rounded my-8 mx-auto text-center p-[18px] hover:cursor-pointer ">
          <Link to={"../products"} className="">{""}View All Products{""}</Link>
        </div>
        <div className="border-b border-y-gray-300 -mb-12 container-x pt-5"></div>
        </>
    );
  }

















  //   const ApI_KeY='https://dummyjson.com/products?limit=4'

//   const [products,setProducts] = useState(null)
 
//    const geT_DatA = async () => {
 
//    const response= await axios(ApI_KeY);
 
 
//    setProducts(response?.data?.products);
 
//    };
 
//      useEffect(()=>{
     
//      geT_DatA();
 
//      },[])
   
//     geT_DatA();
 
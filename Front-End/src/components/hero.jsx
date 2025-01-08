// import hero_img from "../assets/images/Hero.png";

// export default function Hero() {
//   return (
//     <div className="flex justify-between  container-x items-center">
//       <div className="flex min-w-[19%] border-r border-r-gray-300">
//         <ul className="flex flex-col gap-y-[17px] text-base mt-9">
//         <li>  <a >Woman’s Fashion</a>  </li>
//         <li>  <a >Men’s Fashion</a>  </li>
//         <li>  <a >Electronics</a>    </li>
//         <li>  <a >Home & Lifestyle</a>  </li>
//         <li>   <a >Medicine</a>  </li>
//         <li>   <a >Sports & Outdoor</a>  </li>
//         <li>   <a >Baby’s & Toys</a>  </li>
//         <li>   <a >Groceries & Pets</a>  </li>
//         <li>   <a >Health & Beauty</a>  </li>
//         </ul>
//       </div>
//       <div className="mt-10 w-[77%]">
//         <img src={hero_img} alt="Hero_image" />
//       </div>
//     </div>
//   );
// }




import hero_img from "../assets/images/Hero.png";
import { useSelector } from "react-redux";

export default function Hero() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
     <div className={`flex flex-col sm:flex-row justify-between items-start container-x    ${darkMode ? "bg-slate-900 text-white" : ""}`}>
      {/* Sidebar navigation */}
      <div className="w-full sm:w-[19%] sm:border-r border-gray-300">
        <ul className="flex flex-col gap-y-4 text-base mt-4 sm:mt-9 px-4 sm:px-0">
          <li>
            <a href="#" className="block hover:text-blue-500">
              Woman’s Fashion
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-500">
              Men’s Fashion
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-500">
              Electronics
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-500">
              Home & Lifestyle
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-500">
              Medicine
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-500">
              Sports & Outdoor
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-500">
              Baby’s & Toys
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-500">
              Groceries & Pets
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-500">
              Health & Beauty
            </a>
          </li>
        </ul>
      </div>

      {/* Hero image */}
      <div className="mt-4 sm:mt-10 w-full">
        <img
          src={hero_img}
          alt="Hero_image"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}


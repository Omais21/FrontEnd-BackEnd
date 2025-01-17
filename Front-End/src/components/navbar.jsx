// import { CiSearch } from "react-icons/ci";
// import { IoHeartOutline } from "react-icons/io5";
// import { IoCartOutline } from "react-icons/io5";
// import { HiMiniUserCircle } from "react-icons/hi2";
// import { Link } from "react-router-dom";
// import { IoMenu } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";
// import profileImg from "../assets/images/ProfileImg.jpeg";
// import { useState } from "react";

// //LINKS
// const links = [
//   { title: "Home", link: "/" },
//   { title: "About", link: "/about" },
//   { title: "Contact Us", link: "/contact" },
// ];


// export default function Navbar() {

//   const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
//   const isLoggedIn = false;

//   return (
//     <div className="border-b border-b-gray-300  z-10 top-12 bg-white ">
//       <div className="h-[85px] flex justify-between items-center text-center container-x pt-5">
//         <h1 className="font-bold text-2xl">Exclusive</h1>
//         <ul className="hidden lg:flex gap-10 font-normal ">
//           {links.map((item, i) => {
//             return (
//               <li key={i}>
//                 <Link to={item.link}>{item.title}</Link>
//               </li>
//             );
//           })}
//           {!isLoggedIn ? (
//             <li className="link_hover">
//               <Link to="/signup">Sign Up</Link>
//             </li>
//           ) : null}
//         </ul>
//         {!isHamburgerOpen && (
//           <button
//             onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
//             className="text-3xl lg:hidden order-3"
//           >
//             <IoMenu />
//           </button>
//         )}
//         {isHamburgerOpen && (
//           <div className="bg-white fixed h-[100%] w-[350px] z-10 top-0 right-0 pt-[105px] box-shadow border-l border-l-gray-100 shadow-xl	">
//             <button
//               onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
//               className="text-3xl lg:hidden relative"
//             >
//               <IoClose className="text-3xl absolute left-24 -top-8" />
//             </button>

//             <ul className=" flex flex-col gap-4 text-start ">
//               {links.map((item, i) => {
//                 return (
//                   <li className="border-b border-b-gray-300 pb-3 " key={i}>
//                     <Link className="pl-6 hover:text-primary" to={item.link}>
//                       {item.title}
//                     </Link>
//                   </li>
//                 );
//               })}
//               {!isLoggedIn ? (
//                 <li className="border-b border-b-gray-300 pb-3">
//                   <Link className="pl-6 hover:text-primary" to="/signup">
//                     Sign Up
//                   </Link>
//                 </li>
//               ) : null}
//             </ul>
//           </div>
//         )}

//         <div className="flex items-center gap-6 text-center">
//           <div className="flex bg-secondary color-black w-40 md:w-60 md:h-9 justify-around items-center  text-sm rounded px-4">
//             <input
//               type="search"
//               className="nav_input bg-transparent outline-none w-full"
//               placeholder="What are you looking for?"
//             />
//             <CiSearch className="text-2xl font-extrabold text-black" />
//           </div>

//           <div className="flex items-center gap-4">
//             {isLoggedIn ? (
//               <>
//                 <IoHeartOutline className="text-2xl" />
//                 <IoCartOutline className="text-2xl" />
//               </>
//             ) : null}
//             <div className="h-8 w-8 text-4xl bg-white rounded-full  overflow-hidden text-primary flex">
//               {isLoggedIn ? (
//                 <img src={profileImg} alt="" />
//               ) : (
//                 <HiMiniUserCircle />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import { CiSearch } from "react-icons/ci";
import { IoHeartOutline, IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import profileImg from "../assets/images/ProfileImg.jpeg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/darkModeSlice";
import { BsFillMoonFill } from 'react-icons/bs';
import { AiOutlineSun } from 'react-icons/ai';


// LINKS
const links = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact Us", link: "/contact" },
];

export default function Navbar() {
  
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);




  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = false;
  

  return (
    <div
  className={`${darkMode ? "bg-slate-900 text-white" : ""} border-b border-b-gray-300 z-10 top-12 md:w-full`}>
      <div className="h-[85px] flex justify-between items-center text-center container-x ">
        <h1 className="font-bold text-2xl">Exclusive</h1>
        {/* Links for larger screens */}
        <ul className="hidden lg:flex gap-10 font-normal">
          {links.map((item, i) => (
            <li key={i}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
          {!isLoggedIn && (
            <li className="link_hover">
              <Link to="/signup">Log In</Link>
            </li>
          )}
        </ul>

        {!isHamburgerOpen && (
          <button
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            className="text-3xl lg:hidden order-3"
          >
            <IoMenu />
          </button>
        )}

        {/* Mobile Menu */}
        {isHamburgerOpen && (
          <div className="bg-white fixed h-[100%] w-[350px] z-10 top-0 right-0 pt-[105px] box-shadow border-l border-l-gray-100 shadow-xl">
            <button
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              className="text-3xl lg:hidden relative"
            >
              <IoClose className="text-3xl absolute left-24 -top-8" />
            </button>

            <ul className="flex flex-col gap-4 text-start">
              {links.map((item, i) => (
                <li className="border-b border-b-gray-300 pb-3" key={i}>
                  <Link className="pl-6 hover:text-primary" to={item.link}>
                    {item.title}
                  </Link>
                </li>
              ))}
              {!isLoggedIn && (
                <li className="border-b border-b-gray-300 pb-3">
                  <Link className="pl-6 hover:text-primary" to="/signup">
                    Sign Up
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Search Bar and Profile Icons */}
        <div className="flex items-center gap-6 text-center">
          {/* Search Bar */}
          <div className="flex bg-secondary text-black w-40 md:w-60 md:h-9 justify-around items-center text-sm rounded px-4">
            <input
              type="search"
              className="nav_input bg-transparent outline-none w-full"
              placeholder="What are you looking for?"
            />
            <CiSearch className="text-2xl font-extrabold text-black" />
          </div>

          <button 
onClick={()=>{
   dispatch(toggleDarkMode())
}} 
>
  {darkMode ? <AiOutlineSun /> : <BsFillMoonFill />}
  </button>

          {/* Profile and Icons */}
          <div className="flex items-center ">
            {isLoggedIn && (
              <>
                <IoHeartOutline className="text-2xl" />
                <IoCartOutline className="text-2xl" />
              </>
            )}
            <div className="h-8 w-8 text-4xl  rounded-full overflow-hidden text-primary flex">
              {isLoggedIn ? (
                <img src={profileImg} alt="Profile" />
              ) : (
                <HiMiniUserCircle />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

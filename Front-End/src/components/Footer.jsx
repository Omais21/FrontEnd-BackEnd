// import { VscSend } from "react-icons/vsc";
// import QrCodeImg from "../assets/images/footer_imges/Qr Code.png";
// import GooglePlayImg from "../assets/images/footer_imges/GooglePlay.png";
// import AppStoreImg from "../assets/images/footer_imges/AppStore.png";
// import { LiaFacebookF } from "react-icons/lia";
// import { FiTwitter } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa";
// import { RiLinkedinLine } from "react-icons/ri";
// import { PiCopyright } from "react-icons/pi";

// export default function Footer() {
//   return (
//     <div className="bg-black text-white min-h-96 mt-8">
//       <div className="mx-[92px] flex justify-between items-baseline text-start pt-[72px]">
//         <div className="flex flex-col gap-4">
//           <h2 className="font-bold text-2xl ">Exclusive</h2>
//           <p className="text-[20px] font-medium pt-1.5">Subscribe</p>
//           <p className=" footer_text">Get 10% off your first order</p>
//           <div className="flex w-[215px] h-12 items-center text-center rounded border-2 border-white px-4">
//             <input
//               type="search"
//               className="w-full bg-transparent outline-none border-none placeholder-zinc-600"
//               placeholder="Enter your email"
//             />
//             <VscSend className=" text-3xl" />
//           </div>
//         </div>
//         <div className="flex flex-col gap-4">
//           <h3 className=" text-[20px] font-medium">Support</h3>
//           <p className="pt-1.5 footer_text">
//             111 Bijoy sarani, Dhaka,
//             <br /> DH 1515, Bangladesh.
//           </p>
//           <p className=" footer_text">exclusive@gmail.com</p>
//           <p className=" footer_text">+88015-88888-9999</p>
//         </div>
//         <div className="flex flex-col gap-4">
//           <h3 className=" text-[20px] font-medium">Account</h3>
//           <p className="pt-1.5 footer_text">My Account</p>
//           <p className="footer_text">Login / Register</p>
//           <p className="footer_text">Cart</p>
//           <p className="footer_text">Wishlist</p>
//           <p className="footer_text">Shop</p>
//         </div>
//         <div className="flex flex-col gap-4">
//           <h3 className=" text-[20px] font-medium">Quick Link</h3>
//           <p className="pt-1.5 footer_text">Privacy Policy</p>
//           <p className="footer_text">Terms Of Use</p>
//           <p className="footer_text">FAQ</p>
//           <p className="footer_text">Contact</p>
//         </div>
//         <div className="flex flex-col gap-4">
//           <h3 className=" text-[20px] font-medium">Download App</h3>
//           <p className="pt-1.5 text-xs font-medium text-zinc-400">
//             Save $3 with App New User Only{" "}
//           </p>
//           <div className="flex gap-2 items-center">
//             <div>
//               <img src={QrCodeImg} alt="" />
//             </div>
//             <div className="flex flex-col gap-1">
//               <img src={GooglePlayImg} alt="" />
//               <img src={AppStoreImg} alt="" />
//             </div>
//           </div>
//           <div className="flex gap-6 text-xl pt-2">
//             <LiaFacebookF />
//             <FiTwitter />
//             <FaInstagram />
//             <RiLinkedinLine />
//           </div>
//         </div>
//       </div>
      
//       <div className="flex justify-center items-center text-center gap-[6px] mt-[70px] text-zinc-500 pb-6">
//         <PiCopyright className="text-[22px]" />
//         <p>Copyright Rimel 2022. All right reserved</p>
//       </div>
//     </div>
//   );
// }



import { VscSend } from "react-icons/vsc";
import QrCodeImg from "../assets/images/footer_imges/Qr Code.png";
import GooglePlayImg from "../assets/images/footer_imges/GooglePlay.png";
import AppStoreImg from "../assets/images/footer_imges/AppStore.png";
import { LiaFacebookF } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { PiCopyright } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="bg-black text-white min-h-[500px] ">
      <div className="mx-[92px] flex flex-col lg:flex-row justify-between items-start lg:items-baseline text-start pt-[72px] space-y-8 lg:space-y-0">
        {/* Left Column - Subscription */}
        <div className="flex flex-col gap-4 lg:w-1/4">
          <h2 className="font-bold text-2xl">Exclusive</h2>
          <p className="text-[20px] font-medium pt-1.5">Subscribe</p>
          <p className="footer_text">Get 10% off your first order</p>
          <div className="flex w-full lg:w-[215px] h-12 items-center text-center rounded border-2 border-white px-4">
            <input
              type="search"
              className="w-full bg-transparent outline-none border-none placeholder-zinc-600"
              placeholder="Enter your email"
            />
            <VscSend className=" text-3xl" />
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-4 lg:w-1/4">
          <h3 className="text-[20px] font-medium">Support</h3>
          <p className="pt-1.5 footer_text">
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </p>
          <p className="footer_text">exclusive@gmail.com</p>
          <p className="footer_text">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="flex flex-col gap-4 lg:w-1/4">
          <h3 className="text-[20px] font-medium">Account</h3>
          <p className="pt-1.5 footer_text">My Account</p>
          <p className="footer_text">Login / Register</p>
          <p className="footer_text">Cart</p>
          <p className="footer_text">Wishlist</p>
          <p className="footer_text">Shop</p>
        </div>

        {/* Quick Link Section */}
        <div className="flex flex-col gap-4 lg:w-1/4">
          <h3 className="text-[20px] font-medium">Quick Link</h3>
          <p className="pt-1.5 footer_text">Privacy Policy</p>
          <p className="footer_text">Terms Of Use</p>
          <p className="footer_text">FAQ</p>
          <p className="footer_text">Contact</p>
        </div>

        {/* Download App Section */}
        <div className="flex flex-col gap-4 lg:w-1/4">
          <h3 className="text-[20px] font-medium">Download App</h3>
          <p className="pt-1.5 text-xs font-medium text-zinc-400">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-2 items-center justify-start lg:justify-start">
            <div>
              <img src={QrCodeImg} alt="QR Code" className="w-[80px] lg:w-[120px]" />
            </div>
            <div className="flex flex-col gap-1">
              <img src={GooglePlayImg} alt="Google Play" className="w-[100px] lg:w-[150px]" />
              <img src={AppStoreImg} alt="App Store" className="w-[100px] lg:w-[150px]" />
            </div>
          </div>
          <div className="flex gap-6 text-xl pt-2 justify-center lg:justify-start">
            <LiaFacebookF />
            <FiTwitter />
            <FaInstagram />
            <RiLinkedinLine />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex justify-center items-center text-center gap-[6px] mt-[70px] text-zinc-500 pb-6">
        <PiCopyright className="text-[22px]" />
        <p>Copyright Rimel 2022. All rights reserved</p>
      </div>
    </div>
  );
}

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import ProductCard from "./productcard";
import Joystick from '../assets/images/joystick.png'
import Keyboard from '../assets/images/keyboard.png'
import Screen from '../assets/images/screen.png'
import Chair from '../assets/images/chair.png'


export default function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation, Pagination, Autoplay, A11y]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
     
        navigation
      
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
        <ProductCard  postimage={Joystick} postname="HAVIT HV-G92 Gamepad" postsale="-40%" now="120$" was="160$" rating="88"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard postimage={Keyboard} postname="AK-900 Wired Keyboard"  postsale="-35%" now="960$" was="1160%" rating="85"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard postimage={Screen} postname="IPS LCD Gaming Monitor"  postsale="-30%" now="370$" was="400$" rating="75"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard postimage={Chair} postname="S-Series Comfort Chair"  postsale="-25%" now="375$" was="400$" rating="99"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard postimage={Chair} postname="S-Series Comfort Chair"  postsale="-25%" now="375$" was="400$" rating="99"/>
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard postimage={Chair} postname="S-Series Comfort Chair"  postsale="-25%" now="375$" was="400$" rating="99"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

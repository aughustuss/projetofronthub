import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { SwiperModule } from "swiper/types";
import { EffectCoverflow } from "swiper/modules";
interface SlideProps {
  children: React.ReactNode;
  slideWidth?: string;
  slidesPerView?: number;
  modules: SwiperModule[]
}
const Slide = ({ children, modules }: SlideProps) => {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  return (
    <>
      <Swiper
        
        autoplay
        freeMode
        modules={modules}
        className={`w-full rounded-lg bg-transparent`}
        grabCursor
        effect={"coverflow"}
        breakpoints={!modules.includes(EffectCoverflow) ? {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            512: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            648: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        } : {}}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
      >
        {children}
        <div
          className="absolute left-0 top-[40%] cursor-pointer z-10 p-[2px] bg-primaryBg opacity-80 rounded-lg text-white font-semibold"
          ref={prevRef}
        >
          <MdKeyboardArrowLeft size={30} />
        </div>
        <div
          className="absolute right-0 top-[40%] z-10 cursor-pointer p-[2px] bg-primaryBg opacity-80 rounded-lg text-white "
          ref={nextRef}
        >
          <MdKeyboardArrowRight size={30} />
        </div>
      </Swiper>
    </>
  );
};

export default Slide;
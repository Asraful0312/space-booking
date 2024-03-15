import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import "./style.css";

const SingleItem = () => {
  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
  ];

  return (
    <div>
      <div className="rounded-2xl overflow-hidden relative mb-3">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {images?.map((img) => (
            <SwiperSlide key={img}>
              <Link to="/space/1">
                <div className="h-[300px] md:h-[250px] lg:h-[285px] xl:h-[305px]">
                  <img
                    src={img}
                    className="w-full h-full hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute right-3 top-3 z-50 h-12 w-12 rounded-full bg-black flex items-center justify-center">
          <FaRegHeart className="text-white text-2xl" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Link to="/space/1">
          <p className="font-bold text-lg">Lorem ipsum dolor sit</p>
        </Link>
        <div className="flex items-center gap-1">
          <IoIosStar className="text-sm text-black" />
          <h1 className="text-black font-normal">4.93</h1>
        </div>
      </div>
      <p className="text-lg my-2 text-black/50">
        Lorem ipsum dolor sit <br /> amet
      </p>
      <h1 className="text-black text-lg font-bold">$102</h1>
    </div>
  );
};

export default SingleItem;

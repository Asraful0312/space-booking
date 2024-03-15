import Heading from "../shared/Heading";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";

const buttons = ["Offices", "Homes", "Cafe"];
const items = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
];

const Categories = () => {
  const [active, setActive] = useState("Offices");
  return (
    <section className="mb-12">
      <div className="container">
        <Heading title="Explore the categories" />
        <div className="flex items-center gap-3">
          {buttons?.map((btn) => (
            <button
              key={btn}
              onClick={() => setActive(btn)}
              className={`py-3
          rounded-[100px] border px-6 ${
            btn === active
              ? "bg-black text-white border-transparent"
              : "bg-transparent border text-black"
          }`}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="mt-9 mb-16">
          <Swiper
            grid={{
              cols: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            <div className="grid mt-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/*  grid items */}
              {items?.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={img}
                      className="w-full h-[305px] hover:scale-110 transition-all duration-300"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        {/* <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 p-1 bg-black rounded-full"></div>
          <div className="w-2 h-2 p-1 bg-[#D9D9D9] rounded-full"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Categories;

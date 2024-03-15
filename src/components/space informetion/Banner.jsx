const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row  w-full gap-4 mb-16">
      <div className="w-full md:w-[70%] rounded-[30px] overflow-hidden">
        <img
          className="w-full h-full hover:scale-110 transition-all duration-300"
          src="/images/d3.png"
          alt="banner"
        />
      </div>
      <div className="w-full flex flex-col gap-4 md:w-[30%] overflow-hidden">
        <div className="rounded-[30px] w-full h-full overflow-hidden">
          <img
            className="w-full h-full hover:scale-110 transition-all duration-300"
            src="/images/d2.png"
            alt="banner"
          />
        </div>
        <div className="rounded-[30px] w-full h-full overflow-hidden">
          <img
            className="w-full h-full hover:scale-110 transition-all duration-300"
            src="/images/d1.png"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

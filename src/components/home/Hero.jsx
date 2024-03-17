import { GoSearch } from "react-icons/go";

const Hero = () => {
  return (
    <section className="container mb-16 p-5">
      <div className="rounded-[32px] h-[46vh] sm:h-[65vh]  md:h-[70vh] xl:h-full overflow-hidden relative">
        <img className="w-full h-full" src="/images/hero.jpeg" alt="hero" />
        <div className="bg-black/25 absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-full sm:w-[70%] flex flex-col items-center">
            <h1 className="text-white text-center font-medium text-2xl sm:text-5xl lg:text-7xl 2xl:text-8xl md:mb-6 mb-1">
              Find Your Next <br /> Coworking Office
            </h1>
            <p className="md:mb-10 mb-2 text-sm sm:text-xl md:text-2xl xl:text-3xl font-normal text-white">
              Explore the workspaces
            </p>
            {/* search */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:bg-white bg-transparent rounded-full p-[10px] w-full  mb-5 md:mb-10">
              <div className="bg-white w-full rounded-full lg:w-[45%] flex items-center gap-6 px-10 md:px-16">
                <h3 className="text-lg sm:text-2xl">Find</h3>
                <input
                  className="py-4 w-full bg-transparent outline-none text-lg"
                  type="text"
                  placeholder="Ex: workspace"
                />
              </div>
              <div className="hidden lg:block w-[1px] bg-gray min-h-[40px]" />
              <div className="bg-white w-full rounded-full lg:w-[45%] flex items-center gap-6 px-10  md:px-16">
                <h3 className="text-lg sm:text-2xl">Where</h3>
                <input
                  className="py-4 w-full bg-transparent outline-none text-lg"
                  type="text"
                  placeholder="Your City"
                />
              </div>
              <div className="w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center cursor-pointer transition-all hover:opacity-60">
                <GoSearch className="text-white text-xl" />
              </div>
            </div>

            <p className="text-xs text-center md:text-2xl xl:text-3xl text-white font-medium">
              The {`World's`} Largest Coworking Space Marketplace | Search & Get
              Quotes Today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

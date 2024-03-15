import Heading from "../shared/Heading";
import Button from "../ui/Button";

const ExploreSection = () => {
  return (
    <section className="mb-20">
      <div className="container">
        <Heading
          title="Continue exploring more trending places"
          size="text-2xl"
          className="text-center"
        />
        <div className="flex items-center justify-center mb-9">
          <Button to="/dashboard" variant="white">
            Show More
          </Button>
        </div>
        <div className="bg-black lg:h-[424px] pt-10 lg:pt-0 w-full flex flex-col items-center lg:flex-row rounded-[35px]">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="text-center lg:text-left lg:ml-10">
              {" "}
              {/* Added text alignment for small screens */}
              <h1 className="text-4xl lg:text-6xl font-medium mb-3 text-white">
                {" "}
                {/* Reduced text size for small screens */}
                Get the App
              </h1>
              <p className="text-white text-lg lg:text-2xl">
                {" "}
                {/* Reduced text size for small screens */}
                Download the app and explore the workspaces
              </p>
              <div className="flex items-center gap-3 md:gap-7 mt-12 justify-center lg:justify-start">
                <img
                  className="w-[140px] lg:w-[230px] cursor-pointer"
                  src="/images/playstore.png"
                  alt="playstore image"
                />
                <img
                  className="w-[140px] lg:w-[230px] cursor-pointer"
                  src="/images/applestore.png"
                  alt="playstore image"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {" "}
            {/* Centered image for small screens */}
            <div className="lg:w-[750px] lg:h-[520px] md:w-[400px] md:h-[320px] w-[300px] h-[240px]">
              <img
                className="w-full h-full"
                src="/images/phone.png"
                alt="phone image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;

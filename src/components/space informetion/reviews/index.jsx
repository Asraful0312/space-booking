import { IoIosStar } from "react-icons/io";
import Ratings from "./Ratings";
import ReviewCard from "./ReviewCard";
import Button from "../../ui/Button";

const Reviews = () => {
  return (
    <div className="py-6 border-b border-b-lightGray">
      <div className="pb-6 flex items-center gap-2">
        <IoIosStar className="text-3xl" />
        <div className="flex items-center gap-1">
          <h1 className="text-xl font-medium">4.86</h1>
          <img className="rounded-full" src="/images/dot.png" alt="image" />
          <h1 className="text-xl font-medium">300 Reviews</h1>
        </div>
      </div>
      {/* ratings */}
      <div className="flex gap-5 md:gap-10 flex-wrap xl:gap-28">
        <div>
          <h1 className="font-medium mb-3">Overall rating</h1>
          <div className="flex flex-col items-center">
            <Ratings rating="5" />
            <Ratings rating="4" />
            <Ratings rating="3" />
            <Ratings rating="2" />
            <Ratings rating="1" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-5 lg:gap-0">
          <div className="px-6 border-l border-l-lightGray">
            <h1 className="font-medium mb-3 ">Cleanliness</h1>
            <h1 className="font-medium mb-3">5.0</h1>
            <img src="/images/reviews section/Cleanliness.png" alt="image" />
          </div>
          <div className="px-6 border-l border-l-lightGray">
            <h1 className="font-medium mb-3 ">Accuracy</h1>
            <h1 className="font-medium mb-3">5.0</h1>
            <img src="/images/reviews section/Accuracy.png" alt="image" />
          </div>
          <div className="px-6 border-l border-l-lightGray">
            <h1 className="font-medium mb-3 ">Check-in</h1>
            <h1 className="font-medium mb-3">5.0</h1>
            <img src="/images/reviews section/check.png" alt="image" />
          </div>
          <div className="px-6 border-l border-l-lightGray">
            <h1 className="font-medium mb-3 ">Communication</h1>
            <h1 className="font-medium mb-3">5.0</h1>
            <img src="/images/reviews section/massege.png" alt="image" />
          </div>
          <div className="px-6 border-l border-l-lightGray">
            <h1 className="font-medium mb-3 ">Value</h1>
            <h1 className="font-medium mb-3">5.0</h1>
            <img src="/images/reviews section/value.png" alt="image" />
          </div>
        </div>
      </div>
      {/* reviws */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 ">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className="flex items-end justify-center mt-10 mb-8">
        <Button variant="white" className={"border px-9 border-lightGray"}>
          Show More Reviws
        </Button>
      </div>
    </div>
  );
};

export default Reviews;

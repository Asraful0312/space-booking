import CircleProgressBar from "../../progress bar/CircleProgressBar";
import SingleCard from "./SingleCard";
import SingleStatus from "./SingleStatus";

const bars = [
  { percentage: 100, color: "#E6E6E6" },
  { percentage: 20, color: "#CBCBCB" },
  { percentage: 15, color: "#919191" },
];

const Analysis = () => {
  return (
    <div className="flex gap-5 flex-col lg:flex-row mb-20">
      <div className="grid w-full lg:w-[75%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
      {/* status progress */}
      <div className="w-full lg:w-[25%] bg-secondry rounded-2xl py-4 px-5">
        <h3 className="text-lg 2xl:text-xl font-medium text-black/70 leading-9">
          Bookings Breakdown
        </h3>
        <div className="flex items-center justify-center mt-4">
          <CircleProgressBar bars={bars} />
        </div>
        <div className="space-y-4 mt-4">
          <SingleStatus status="confirmed" bookings="220 bookings" />
          <SingleStatus status="pending" bookings="48 bookings" />
          <SingleStatus status="cancelled" bookings="32 bookings" />
        </div>
      </div>
    </div>
  );
};

export default Analysis;

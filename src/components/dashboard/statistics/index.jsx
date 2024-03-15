import Heading from "../../shared/Heading";
import Chart from "./Chart";
import TransectionCard from "./TransectionCard";

const Statistics = () => {
  return (
    <section className="mt-10 mb-16">
      <div className="container">
        {/* balance */}
        <div className="flex items-center justify-between mb-10">
          <Heading
            size="text-2xl sm:text-4xl 2xl:text-5xl"
            mb={"mb-0"}
            title="Available Balance"
          />
          <div className="flex items-center gap-3">
            <img
              className="w-5 h-5 sm:w-9 sm:h-9"
              src="/images/icons/money bag.png"
              alt="money bag image"
            />
            <h1 className="text-lg sm:text-2xl 2xl:text-3xl font-bold">
              Top up
            </h1>
          </div>
        </div>
        <h1 className="font-bold text-4xl sm:text-6xl 2xl:text-8xl mb-10 2xl:mb-20">
          Rs 127,000
        </h1>
        {/* Statistics */}
        <div>
          <h1 className="text-xl sm:text-4xl 2xl:text-5xl font-medium mb-12">
            Statistics
          </h1>
          <Chart />
        </div>
        {/* Transactions */}
        <div>
          <div className="flex items-center justify-between mt-12 sm:mt-24">
            <h1 className="text-xl sm:text-4xl 2xl:text-5xl font-medium mb-12">
              Transactions
            </h1>
            <h1 className="text-lg sm:text-2xl cursor-pointer font-medium mb-12 hover:underline transition-all duration-300">
              View all
            </h1>
          </div>
          <div className="space-y-8">
            <TransectionCard />
            <TransectionCard />
            <TransectionCard />
            <TransectionCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

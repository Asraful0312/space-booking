import { IoIosStar } from "react-icons/io";

const ReviewCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-5">
      <img
        className="w-[60px] h-[60px] rounded-full"
        src="/images/1.jpeg"
        alt=""
      />
      <div>
        <h1 className="font-bold">Aslam</h1>
        <p>Hyderabad, Pakistan</p>
        <div className="flex items-center mb-2 gap-3">
          <div className="flex items-center gap-1">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <img className="rounded-full" src="/images/dot.png" alt="dot image" />
          <h1 className="font-bold text-lg">October 22</h1>
        </div>
        <p className="text-lg text-black/70">
          Beautiful setting with clean and comfty rooms. Great price too. would
          recommend.
        </p>
        <button className="my-7 font-bold underline">Show more</button>
      </div>
    </div>
  );
};

export default ReviewCard;

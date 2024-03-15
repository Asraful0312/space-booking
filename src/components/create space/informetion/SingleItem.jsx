import { useState } from "react";

const SingleItem = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={`w-full border py-6 px-10  rounded-3xl text-start ${
        isActive ? "border-black" : "border-lightGray hover:border-black"
      }`}
    >
      <h2 className="text-2xl mb-3">{title}</h2>
      <p className="font-medium text-black/70 text-xl">{description}</p>
    </button>
  );
};

export default SingleItem;

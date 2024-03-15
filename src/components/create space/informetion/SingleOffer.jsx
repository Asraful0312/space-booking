import { useState } from "react";

const SingleOffer = ({
  text,
  image,
  index,
  setSelectedOffers,
  selectedOffers,
  setOffersError,
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
    if (selectedOffers.includes(index)) {
      const newItems = selectedOffers.filter((item) => item !== index);
      setSelectedOffers(newItems);
    } else {
      setSelectedOffers([...selectedOffers, index]);
    }
    setOffersError(false);
  };

  return (
    <button
      onClick={handleActive}
      className={`rounded-3xl py-11 border flex items-center justify-center ${
        isActive ? "border-black" : "border-lightGray hover:border-black"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <img src={image} alt="offer image" />
        <h1 className="text-3xl">{text}</h1>
      </div>
    </button>
  );
};

export default SingleOffer;

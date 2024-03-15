import Heading from "../../../components/shared/Heading";
import SingleItem from "./SingleItem";
import { FaLocationDot } from "react-icons/fa6";
import SingleOffer from "./SingleOffer";
import ErrorMessage from "../../shared/ErrorMessage";
import { useState } from "react";
import Button from "../../ui/Button";

const offers = [
  { image: "/images/offer/wifi.png", text: "Wifi" },
  { image: "/images/offer/tv.png", text: "TV" },
  { image: "/images/offer/kitchen.png", text: "Kitchen" },
  { image: "/images/offer/printer.png", text: "Printer" },
  { image: "/images/offer/parking.png", text: "Parking" },
  { image: "/images/offer/air-condition.png", text: "Air Conditioning" },
];

const Informetion = ({ setCurrentStep }) => {
  const [selectedOffers, setSelectedOffers] = useState([]);
  const [offersError, setOffersError] = useState(false);

  const handleNext = () => {
    if (selectedOffers.length > 0) {
      setCurrentStep(2);
    }
    setOffersError(true);
  };

  console.log(offersError);

  return (
    <div>
      <Heading title="What type of place will guests have?" />
      {/* what guests will have */}
      <div className="space-y-10 mb-20">
        <SingleItem
          title="An entire place"
          description="Guests have whole place to themselves."
        />
        <SingleItem
          title="A room"
          description="Guests have their own room in a home, plus access to shared spaces."
        />
        <SingleItem
          title="A shared room"
          description="Guests sleep in a room or common area that may be shared with you or others."
        />
        <ErrorMessage text="Please select one" />
      </div>
      {/* location */}
      <div className="mb-20">
        <Heading
          title="Where’s your place located?"
          desc="Your address is only shared with guests after they’ve made a
          reservation."
        />

        <div className="relative mt-5 flex items-center justify-center">
          <img className="w-ful h-full" src="/images/map.png" alt="map image" />
          <div className="w-[70%] rounded-[80px] shadow-xl bg-white absolute top-8 lg:top-12 py-3 px-4 lg:py-8 lg:px-12 flex items-center gap-4">
            <FaLocationDot className=" lg:text-4xl" />
            <input
              className="border-none outline-none text-sm lg:text-xl w-full"
              placeholder="Enter your address"
              type="text"
            />
          </div>
        </div>
        <ErrorMessage text="Please select your location" />
      </div>
      {/* offers */}
      <div className="mb-20">
        <Heading
          className="mb-0"
          title="Tell guests what your place has to offer"
          desc="You can add more after publish your listing"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-5 mb-20">
          {offers?.map((offer, index) => (
            <SingleOffer
              key={offer?.text}
              index={index}
              text={offer?.text}
              image={offer?.image}
              selectedOffers={selectedOffers}
              setSelectedOffers={setSelectedOffers}
              setOffersError={setOffersError}
            />
          ))}
          {offersError && <ErrorMessage text="Please select your offers" />}
        </div>
      </div>
      {/* rules */}
      <div className="mb-20">
        <Heading title="Workspace rules" />
        <div className="flex flex-col gap-5">
          <div className="flex justify-between flex-wrap gap-5">
            <p className="text-black/70 text-xl">No smoking</p>
            <input className="custom-checkbox" type="checkbox" />
          </div>
          <div className="flex justify-between flex-wrap gap-5">
            <p className="text-black/70 text-xl">No pets</p>
            <input className="custom-checkbox" type="checkbox" />
          </div>
          <div className="flex justify-between flex-wrap gap-5">
            <p className="text-black/70 text-xl">Keep workspace clean</p>
            <input className="custom-checkbox" type="checkbox" />
          </div>
          <ErrorMessage text="Please select your rules" />
        </div>
      </div>
      {/* next step */}
      <div className="flex items-center justify-end mb-16">
        <Button variant="primary" onClick={handleNext} className="px-8">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Informetion;

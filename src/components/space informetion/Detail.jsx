import Heading from "../../components/shared/Heading";
import { IoIosStar } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { TbSmokingNo } from "react-icons/tb";
import { FaPaw } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex flex-col-reverse md:flex-row gap-11 w-full">
        <div className="w-full lg:w-[70%]">
          <div className="border-b border-b-lightGray">
            <Heading
              title="Coworking Space: Corporate Suites Rockefeller Center in New York City"
              mb="mb-6"
              weight="font-bold"
            />
            {/* reviews */}
            <div className="pb-6 flex items-center gap-2">
              <IoIosStar className="text-3xl" />
              <div className="flex items-center gap-1">
                <h1 className="text-xl font-medium">4.86</h1>
                <img
                  className="rounded-full"
                  src="/images/dot.png"
                  alt="image"
                />
                <h1 className="text-xl font-medium">300 Reviews</h1>
              </div>
            </div>
          </div>
          <div className="py-7 border-b border-b-lightGray flex flex-wrap items-center gap-3 lg:gap-[160px]">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-medium">1 Guest</h1>
              <img className="rounded-full" src="/images/dot.png" alt="image" />
              <h1 className="text-2xl font-medium">1 Table</h1>
            </div>
            <p>Access Hours : 9:00am - 6:00pm</p>
          </div>
          <div className="py-7 border-b border-b-lightGray">
            <h1 className="text-2xl font-medium mb-5">
              Coworking Space Amenities
            </h1>
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-4">
                <FaWifi className="text-2xl text-[#323232]" />
                <p className="text-black/70">High-Speed WiFi</p>
              </div>
              <div className="flex items-center gap-4">
                <FaRegSnowflake className="text-2xl text-[#323232]" />
                <p className="text-black/70">Air Conditioning</p>
              </div>
              <div className="flex items-center gap-4">
                <MdAirlineSeatReclineExtra className="text-2xl text-[#323232]" />
                <p className="text-black/70">Lounge / Chill-out Area</p>
              </div>
            </div>
          </div>
        </div>
        {/* reserve */}
        <div className="w-full lg:w-[30%] rounded-2xl shadow-lg py-6 px-7 border">
          <h1 className="text-2xl font-medium mb-2">Coworking Space</h1>
          <p className="text-sm pb-5 border-b border-b-lightGray">
            Access to shared workspace
          </p>
          <div className="flex items-center border-b border-b-lightGray justify-between py-5">
            <p className="text-lg font-normal">1 - 20 People</p>
            <p className="text-lg font-normal">
              <span className="font-bold">$19</span> / person / day
            </p>
          </div>
          <div className="flex items-center border-b border-b-lightGray justify-between py-5">
            <p className="text-lg font-normal">Check In</p>
            <div className="flex items-center gap-2">
              <p className="text-lg font-normal underline">12/7/2023</p>
              <FaRegCalendar className="text-xl" />
            </div>
          </div>

          <Button
            onClick={() => navigate("/reserve")}
            hover="white"
            className="w-full text-center my-9"
          >
            Reserve Space
          </Button>

          <div className="flex items-center justify-between">
            <p className="text-lg font-normal">$19 x 5 days</p>
            <p className="text-lg font-bold">150$</p>
          </div>
        </div>
      </div>
      <div className="py-7 border-b border-b-lightGray">
        <h1 className="text-2xl font-medium mb-5">Workspace Rules</h1>
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-4">
            <TbSmokingNo className="text-2xl text-[#323232]" />
            <p className="text-black/70">No Smoking</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPaw className="text-2xl text-[#323232]" />
            <p className="text-black/70">No Pets Allowed</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="/images/icons/recept.png" alt="" />
            <p className="text-black/70">Lounge / Chill-out Area</p>
          </div>
          <div className="flex items-center gap-4">
            <MdCleaningServices className="text-2xl text-[#323232]" />
            <p className="text-black/70">Keep Workspace Clean</p>
          </div>
        </div>
      </div>
      {/* about */}
      <div className="py-10 border-b border-b-lightGray">
        <h1 className="text-2xl font-medium mt-5">About Place</h1>
        <p className="text-lg leading-9 text-primary/70">
          1180 Avenue of the Americas at 46th Street is a world class location
          and prominent business address with fantastic amenities, including
          24/7 access and security, lobby attendants, imposing on-the-avenue
          entrance and modern lobby with multiple high speed elevators. It is
          easily accessible from all major transportation hubs, including Penn
          Station.
        </p>
        <h1 className="mt-3">...</h1>
        <button className="my-7 font-bold underline">Show more</button>
      </div>
    </div>
  );
};

export default Detail;

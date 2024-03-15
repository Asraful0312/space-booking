import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useRef } from "react";
import { useState } from "react";
import Button from "../components/ui/Button";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ReserveConfirm = () => {
  const inputRef = useRef(null);
  const inputNumberRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPeople, setIsEditingPeople] = useState(false);
  const [date, setDate] = useState("Dec 13-18");
  const navigate = useNavigate();

  const handleDateClick = () => {
    setIsEditing(!isEditing);

    // Optionally, focus the input field on edit
    if (isEditing) {
      inputRef.current.focus();
    }
  };

  const handlePeopleClick = () => {
    setIsEditingPeople(!isEditingPeople);

    // Optionally, focus the input field on edit
    if (setIsEditingPeople) {
      inputNumberRef.current.focus();
    }
  };

  return (
    <section className=" h-screen mb-28">
      <div className="container">
        <div className="flex items-center gap-3 mb-20">
          <MdOutlineKeyboardArrowLeft
            onClick={() => navigate(-1)}
            className="text-5xl cursor-pointer"
          />
          <h2 className="text-4xl font-medium xl:text-[44px]">Reserve space</h2>
        </div>
        <div className="flex flex-col gap-10 px-5 md:px-0 md:gap-32 md:flex-row w-full">
          {/* details */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl xl:text-4xl mb-6">Your trip</h2>
            <div className="flex justify-between mb-12">
              <div>
                <h1 className="text-xl mb-3">Date</h1>
                <p className="text-xl text-black/70">{date}</p>
              </div>
              <div className="flex items-start gap-3">
                <label
                  className="text-xl font-bold underline"
                  htmlFor="dateInput"
                  onClick={handleDateClick}
                >
                  {isEditing ? "Close" : "Edit"}
                </label>
                {isEditing && (
                  <input
                    ref={inputRef}
                    type="date"
                    id="dateInput"
                    className="date-input outline-none"
                    onChange={(e) => setDate(e.target.value)}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-between mb-12">
              <div>
                <h1 className="text-xl mb-3">People</h1>
                <p className="text-xl text-black/70">03</p>
              </div>
              <div className="flex items-start gap-3">
                <label
                  className="text-xl font-bold underline"
                  htmlFor="dateInput"
                  onClick={handlePeopleClick}
                >
                  {isEditingPeople ? "Close" : "Edit"}
                </label>
                {isEditingPeople && (
                  <input
                    className="border border-lightGray w-24 px-3 ouline-none"
                    ref={inputNumberRef}
                    type="number"
                    id="dateInput"
                  />
                )}
              </div>
            </div>
            <Button
              onClick={() => navigate("/history")}
              size="medium"
              className="w-full"
              hover="white"
            >
              Confirm reservation
            </Button>
          </div>
          {/* pricing */}
          <div className="w-full md:w-1/2 rounded-3xl border border-lightGray px-10 py-12">
            <div className="pb-4 border-b border-b-lightGray flex flex-col lg:flex-row items-start gap-6">
              <img
                className="w-auto h-auto max-w-[147px] max-h-[168px]"
                src="/images/5.png"
                alt="image"
              />
              <div>
                <h1 className="text-black/70 text-xl mb-2">Reservation</h1>
                <p className="text-lg leading-8 text-black/70 mb-2">
                  Coworking Space: Corporate Suites Rockefeller Center in New
                  York City
                </p>
                <div className="pb-6 flex items-center gap-2">
                  <IoIosStar className="text-2xl" />
                  <div className="flex items-center gap-1">
                    <h1 className="text-lg font-medium">4.86</h1>
                    <img
                      className="rounded-full"
                      src="/images/dot.png"
                      alt="image"
                    />
                    <h1 className="text-lg font-medium">300 Reviews</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-8 border-b border-b-lightGray">
              <h3 className="text-2xl mb-6">Price details</h3>
              <div className="flex items-center justify-between mb-8">
                <p className="text-xl font-medium text-black/70 underline">
                  $19 X 5 People
                </p>
                <p className="text-xl font-medium text-black/70 ">$95.00</p>
              </div>
              <div className="flex items-center justify-between mb-8">
                <p className="text-xl font-medium text-black/70 underline">
                  Our fee
                </p>
                <p className="text-xl font-medium text-black/70 ">$10.00</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-6">
              <p className="text-xl font-medium text-black">Total (USD)</p>
              <p className="text-xl font-medium text-black/70 ">$105.38</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveConfirm;

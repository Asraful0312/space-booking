import { useState } from "react";
import Heading from "../shared/Heading";
import Button from "../ui/Button";

const MoreInformetion = ({ setCurrentStep }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("35");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    if (e.length <= 40) {
      setTitle(e);
    }
  };

  const handleDescription = (e) => {
    if (e.length <= 500) {
      setDescription(e);
    }
  };

  const handlePriceChange = (e) => {
    const value = e;
    const newValue = value.replace("$", "");
    const numberValue = newValue.replace(/[^0-9]/g, "");
    setPrice(numberValue);
  };

  const youPrice = Math.floor((Number(price) + 5) * 0.94);

  return (
    <section className="mb-20">
      <Heading
        title="Add some photos of your place"
        desc="You'll need 5 photos to get started. You can add more or make changes later."
      />
      {/* add informetions */}
      <div className="space-y-20 mt-5">
        {/* add image */}
        <div className="py-20 lg:py-28 bg-[#F2F2F2]">
          <label
            className="flex flex-col items-center justify-center"
            htmlFor="uploadImage"
          >
            <img
              className="w-auto h-auto"
              src="/images/image.png"
              alt="upolad image"
            />
            <h2 className="mt-10 text-xl lg:text-3xl">Drag your photos here</h2>
            <p className="font-medium text-black/70 mt-3 mb-5  text-lg lg:text-xl">
              Choose at least 5 photos
            </p>
            <p className="font-bold border-b-2 border-b-black/70 text-black/70 mb-5 text-lg lg:text-xl">
              Upload from your device
            </p>
          </label>
          <input className="hidden" type="file" name="" id="uploadImage" />
        </div>
        {/* add title */}
        <div className="">
          <Heading
            title="Let’s give title to your place"
            desc="Short titles work best.Have fun with it! You can always change it later"
          />
          <textarea
            className="my-7 py-6 px-9 border w-full text-xl text-black/70 border-lightGray rounded-3xl outline-none"
            placeholder="Add your title."
            cols="30"
            rows="5"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
          ></textarea>
          <h3 className="text-xl font-bold">
            <span>{title.length}</span>/<span>40</span>
          </h3>
        </div>
        {/* add description */}
        <div className="">
          <Heading
            title="Create your description"
            desc="Share what makes your place special."
          />
          <textarea
            className="my-7 py-6 px-9 border w-full text-xl text-black/70 border-lightGray rounded-3xl outline-none"
            placeholder="Take it easy and write your description."
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => handleDescription(e.target.value)}
          ></textarea>
          <h3 className="text-xl font-bold">
            <span>{description.length}</span>/<span>500</span>
          </h3>
        </div>
        {/* Set price */}
        <div>
          <Heading
            title="Set your price"
            desc="Your address is only shared with guests after they’ve made a reservation."
          />
          <div className="flex items-center justify-center mt-10">
            <input
              type="text"
              value={`$${price}`}
              onChange={(e) => handlePriceChange(e.target.value)}
              className="text-5xl lg:text-[100px] w-full outline-none font-bold text-center"
            />
          </div>
        </div>
        {/* prices */}
        <div>
          <div className="mb-9 rounded-3xl border p-7 border-lightGray space-y-5 ">
            <div className="pb-5 border-b space-y-3 border-b-lightGray">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xl text-black/70 font-medium">Best Price</p>
                <p className="text-xl text-black/70 font-medium">
                  ${price}/Per Person
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xl text-black/70 font-medium">
                  Guest service fee
                </p>
                <p className="text-xl text-black/70 font-medium">$5</p>
              </div>
            </div>
            <div className="flex items-center justify-between pb-2">
              <p className="text-xl text-black font-medium">
                Guest service fee
              </p>
              <p className="text-xl text-black/70 font-medium">
                ${Number(price) + 5}
              </p>
            </div>
          </div>
          <div className="rounded-3xl border p-7 border-lightGray">
            <div className="flex items-center justify-between pb-2">
              <p className="text-xl text-black font-medium">You earn</p>
              <div>
                <p className="text-xl text-black/70 font-medium">${youPrice}</p>
                <p className="text-red-500">-6%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mb-16">
          <Button
            onClick={() => setCurrentStep(2)}
            variant="primary"
            className="px-8"
          >
            Publish
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MoreInformetion;

import { IoSearch } from "react-icons/io5";

const Controller = () => {
  return (
    <div className="flex items-center justify-between mb-12 flex-wrap gap-8">
      <div className="flex items-center gap-3 ">
        <h2 className="text-3xl lg:text-4xl font-bold 2xl:text-[44px]">
          Dashboard
        </h2>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <select
          className="border bg-white border-black rounded-lg p-[14px]"
          id=""
        >
          <option value="">Choosea a option</option>
          <option value="">Weekly</option>
          <option value="">Monthly</option>
        </select>
        <div className="flex items-center gap-5 border border-black py-3 px-4 rounded-lg ">
          <input placeholder="Search" type="text" className="outline-none" />

          <IoSearch className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Controller;

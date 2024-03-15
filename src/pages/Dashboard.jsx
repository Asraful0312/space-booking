import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Controller from "../components/dashboard/Controller";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import data from "../data/bookingData";
import Table from "../components/Table";
import Analysis from "../components/dashboard/analysis";

const itemsPerPage = 2;

const Dashboard = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="mt-5 mb-28">
      <div className="container">
        <Controller />
        <Analysis />
        <Table
          headData={[
            "Space",
            "Location",
            "Access Hours",
            "Reservation Date",
            "No of People",
            "Price",
            "Table",
            "Guests",
          ]}
          data={currentItems}
        />
        {/* pagination */}
        <div className="mb-20 mt-10 flex justify-end">
          <ReactPaginate
            breakLabel="..."
            breakClassName="dots"
            nextLabel={
              <div className="text-xl text-[#A3A3A3] bg-[#F9F9F9] p-3 px-3 border-lightGray">
                <MdOutlineKeyboardArrowRight />
              </div>
            }
            containerClassName={"pagination"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            pageLinkClassName="link"
            activeLinkClassName="active-link"
            previousLabel={
              <div className="text-xl text-[#A3A3A3] bg-[#F9F9F9] p-3 px-3 border-lightGray">
                <MdOutlineKeyboardArrowLeft />
              </div>
            }
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

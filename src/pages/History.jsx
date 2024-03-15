import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import Table from "../components/Table";
import data from "../data/bookingData";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const itemsPerPage = 1;

const History = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const [searchedItems, setSearchedItems] = useState(currentItems);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    const newCurrentItems = data.slice(newOffset, newOffset + itemsPerPage);

    setSearchedItems(newCurrentItems);
    setSearchValue("");
    setItemOffset(newOffset);
  };

  const filterSearchItem = (e) => {
    setSearchValue(e.target.value);
    if (searchedItems.length === 0) {
      const newItems = data.filter((item) => {
        if (item?.space.toLowerCase().includes(e.target.value.toLowerCase())) {
          return item;
        }
      });
      setSearchedItems(newItems);
    } else {
      const newItems = currentItems.filter((item) => {
        if (item?.space.toLowerCase().includes(e.target.value.toLowerCase())) {
          return item;
        }
      });
      setSearchedItems(newItems);
    }
  };

  const handleDateSearch = (value) => {
    setDateValue(value);
    if (searchedItems.length === 0) {
      const newItems = data?.filter((item) => {
        if (item?.date.toLowerCase().includes(value.toLowerCase())) {
          return item;
        }
        return;
      });
      setSearchedItems(newItems);
      console.log(newItems);
    } else {
      const newItems = currentItems.filter((item) => {
        if (item?.date.toLowerCase().includes(value.toLowerCase())) {
          return item;
        }
      });
      setSearchedItems(newItems);
    }
  };

  return (
    <section className="">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-8">
          <div className="flex items-center gap-3 ">
            <MdOutlineKeyboardArrowLeft
              onClick={() => navigate(-1)}
              className="text-5xl cursor-pointer"
            />
            <h2 className="text-3xl font-medium xl:text-[44px]">
              Booking history
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <input
              onChange={(e) => handleDateSearch(e.target.value)}
              value={dateValue}
              type="date"
              className="border border-black rounded-lg p-3"
            />
            <div className="flex items-center gap-5 border border-black py-3 px-4 rounded-lg ">
              <input
                value={searchValue}
                onChange={(e) => filterSearchItem(e)}
                type="text"
                className="outline-none"
              />

              <IoSearch className="text-lg" />
            </div>
          </div>
        </div>
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
          data={searchedItems || currentItems}
        />
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
            pageRangeDisplayed={2}
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

export default History;

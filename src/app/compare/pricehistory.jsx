import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import search from "../../images/brand.svg";
import Image from "next/image";
import close from "../../images/close.svg";
import storeimg from "../../images/stores.svg";
import droped from "../../images/g.svg";
import undroped from "../../images/2.svg";

const Pricehistory = ({ priceData, handleclose, stores }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedStore, setSelectedStore] = useState([]);
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);

  console.log(priceData);

  const toggleStoreDropdown = () => {
    setIsStoreDropdownOpen(!isStoreDropdownOpen);
  };

  const handleStoreChange = (selectedStore) => {
    setSelectedStore(selectedStore);
    setIsStoreDropdownOpen(false);
  };

  return (
    <div className="absolute right-0 flex top-0 z-50 w-full h-full bg-[#00000041]">
      <div className=" bg-[#f7f2f2] m-auto rounded-lg z-50 flex flex-col p-10 justify-evenly">
        {/* Price History */}
        <div className="relative justify-between p-5">
          <h2 className="text-bold">Price History</h2>
          <button onClick={handleclose}>
            <Image
              src={close}
              alt="ss"
              className="top-0 absolute right-0 w-[1.5em]"
            />
          </button>
        </div>
        <div className="first">
          <div className="w-full border pr-2  rounded-lg bg-white flex mb-6">
            <Image src={search} alt="ss" className="top-0 w-6" />
            <input
              type="search"
              className="border-none rounded-lg bg-inherit p-2 w-full focus:outline-none"
            />
          </div>
          <div
            className="flex cursor-pointer justify-between w-full p-2 items-center border rounded-lg bg-[#57545411] "
            onClick={toggleStoreDropdown}
          >
            <Image src={storeimg} alt="b" className="w-[1.4em]" />
            <span className="ml-6 text-[#05050585]">
              {selectedStore.name || "choose a store"}
            </span>
            <Image
              src={isStoreDropdownOpen ? undroped : droped}
              className="w-4 ml-auto"
              alt="k"
            />
          </div>
          {isStoreDropdownOpen && (
            <div className="bg-white text-black border flex flex-col max-h-[10em] rounded-lg overflow-scroll">
              {stores.map((store) => (
                <div
                  key={store.id}
                  className={`cursor-pointer text-black p-4 hover:bg-gray-200${
                    selectedStore && selectedStore.id === store.id
                      ? " bg-gray-200"
                      : ""
                  }`}
                  onClick={() => handleStoreChange(store)}
                >
                  {store.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="flex justify-between">
          <input type="checkbox" name="all data points" id="all data points" />

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd MMMM yyyy"
            className="text-center border rounded-lg"
          />

          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd MMMM yyyy"
            className="text-center border rounded-lg"
          />
        </div>

        {/* Inventory History */}

        <div className="price-trends min-h-[3em] rounded-sm"></div>

        <div className="inventory min-h-[3em] rounded-sm shadow-sm"></div>

        <div className="inventory-history min-h-[3em] rounded-sm shadow-sm"></div>
      </div>
    </div>
  );
};

export default Pricehistory;

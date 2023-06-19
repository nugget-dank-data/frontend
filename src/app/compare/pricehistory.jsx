import React, { useState, useEffect } from "react";
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
import axios from "axios";
import PriceInventoryGraph from "./pricegraph";

const Pricehistory = ({ priceData, handleclose, stores, selectedStore }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedstore, setSelectedStore] = useState({});
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  const [priceHistory, setPriceHistory] = useState([]);

  useEffect(() => {
    if (priceData.inv && priceData.inv.length > 0) {
      const storeId = priceData.inv[0].store_id;
      const productId = priceData.inv[0].product_id;
      setSelectedStore(selectedStore); // <- Change this line
      fetchPriceHistory(storeId, productId);
    }
  }, [priceData]);
  console.log(selectedStore);

  const fetchPriceHistory = async (storeId, productId) => {
    try {
      const response = await axios.get(
        `http://142.93.146.70:420/scraper/product-history-api?store_bb_id=${storeId}&product_id=${productId}`
      );
      setPriceHistory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleStoreDropdown = () => {
    setIsStoreDropdownOpen(!isStoreDropdownOpen);
  };

  const handleStoreChange = (selectedstore) => {
    setSelectedStore(selectedstore);
    setIsStoreDropdownOpen(false);
  };

  return (
    <div className="absolute z-50 flex top-0 p-10 bg-[#00000041] flex-col scrollbar-thin bottom-0 w-full overflow-y-scroll scrollbar-thumb-blue-500 scrollbar-track-gray-100"
    
    >
      <div className="bg-white m-auto rounded-lg flex flex-col items-center justify-center relative p-4">
        {/* Price History */}
        <div className="flex justify-between w-full">
          <h2 className="font-bold text-2xl">Price History</h2>
          <button onClick={handleclose}>
            <Image
              src={close}
              alt="Close"
              className="w-6 h-6 absolute top-0 right-0"
            />
          </button>
        </div>
        <div className="first mt-4 w-full">
          <div className="w-full border pr-2 rounded-lg bg-white flex mb-6">
            <Image src={search} alt="Search" className="w-6 h-6" />
            <input
              type="search"
              className="border-none rounded-lg bg-transparent p-2 w-full focus:outline-none text-sm"
            />
          </div>
          <div
            className="flex cursor-pointer justify-between w-full p-2 items-center border rounded-lg bg-[#57545411]"
            onClick={toggleStoreDropdown}
          >
            <Image src={storeimg} alt="Store" className="w-6 h-6" />
            <span className="ml-6 text-sm text-[#05050585]">
              {selectedstore && selectedstore.name
                ? selectedstore.name
                : "Choose a store"}
            </span>
            <Image
              src={isStoreDropdownOpen ? undroped : droped}
              className="w-4 ml-auto"
              alt="Dropdown"
            />
          </div>
          {isStoreDropdownOpen && (
            <div className="bg-white text-black border flex flex-col max-h-[10em] rounded-lg overflow-scroll mt-1">
              {stores.map((store) => (
                <div
                  key={store.id}
                  className={`cursor-pointer text-black p-4 hover:bg-gray-200${
                    selectedstore && selectedstore.id === store.id
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
        <div className="flex flex-wrap justify-between items-center my-4">
          <label htmlFor="all-data-points" className="text-sm">
            All Data Points
          </label>
          <input
            type="checkbox"
            name="all-data-points"
            id="all-data-points"
            className="mr-1"
          />

          <div className="w-full sm:w-auto my-2 sm:my-0">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd MMMM yyyy"
              className="text-center border rounded-lg text-sm w-full sm:w-auto"
              wrapperClassName="mr-2"
            />
          </div>

          <div className="w-full sm:w-auto">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd MMMM yyyy"
              className="text-center border rounded-lg text-sm w-full sm:w-auto"
              wrapperClassName="ml-2"
            />
          </div>
        </div>

        <PriceInventoryGraph priceData={priceHistory} />

        {/* Inventory History */}
        <div className="inventory-history mt-8 shadow-lg border m-auto flex w-[70%] flex-col rounded-lg p-4">
          <h3 className="font-bold text-2xl">Inventory History</h3>
          {priceHistory.map((item) => (
            <div key={item.id} className="flex justify-between mt-2 text-sm p-4">
              <p>{new Date(item.created_at).toLocaleDateString()}</p>
              <p>${item.price}</p>
              <p>{item.stock} in stock</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Pricehistory;

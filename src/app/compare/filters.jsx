"use client"
import React, { useState, useEffect, useRef } from "react";
import store from "../../images/stores.svg";
import Image from "next/image";
import droped from "../../images/g.svg";
import undroped from "../../images/2.svg";
import category from "../../images/category.svg";
import brand from "../../images/brand.svg";
import Results from "./results";
import PriceRange from "@/components/PriceRange";
import Compsetprop from "./compset";
// import axios from "axios";

const Filters = () => {
  const [range, setRange] = useState([0, 300]);
  const [stores, setStores] = useState([]);
  const [storesData, setStoresData] = useState([]);
  const [selectedStore, setSelectedStore] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
  const [showCompset, setShowCompset] = useState(false);
  const compsetRef = useRef(null);

  const url =
    "http://142.93.146.70:420/scraper/unique-products?bb_store_ids=1634398753441x245681641891824400,1669086638769x751534285670987000";

  useEffect(() => {
    fetch(url, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then(({ data }) => {
        setStores(data);
      })
      .catch((error) => {
        console.error("Error fetching stores:", error);
      });
  }, []);

  const handleStoreChange = (store) => {
    setSelectedStore(store);
    setIsStoreDropdownOpen(false);
  };

  const handlecompset = () => {
    setShowCompset(!showCompset);
  };

  function handlePriceChanges(event, newValue) {
    setRange(newValue);
  }

  const toggleStoreDropdown = () => {
    setIsStoreDropdownOpen(!isStoreDropdownOpen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsCategoryDropdownOpen(false);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setIsSizeDropdownOpen(false);
  };

  const toggleSizeDropdown = () => {
    setIsSizeDropdownOpen(!isSizeDropdownOpen);
  };

  const applyFilters = () => {
    console.log("Selected Store:", selectedStore);
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Size:", selectedSize);
    console.log("Selected Price Range:", range);
  };

  return (
    <>
      <div className="relative flex flex-col md:flex-row border-b w-full">
        <div className="store p-4 w-full">
          <h1 className="text-[1.5em]">Store</h1>
          <div
            className="flex cursor-pointer justify-between w-3/4 p-2 items-center border rounded-lg bg-[#57545411] "
            onClick={toggleStoreDropdown}
          >
            <Image src={store} alt="b" className="w-[1.4em]" />
            <span className="ml-6 text-[#05050585]">
              {selectedStore.name || "Search store ..."}
            </span>
            <Image
              src={isStoreDropdownOpen ? undroped : droped}
              className="w-4 ml-auto"
              alt="k"
            />
          </div>
          {isStoreDropdownOpen && (
            <div className="bg-white text-black border w-full">
              {stores.map((store) => (
                <div
                  key={store.id}
                  className="cursor-pointer text-black p-4 hover:bg-gray-200"
                  onClick={() => handleStoreChange(store)}
                >
                  {store.name}
                </div>
              ))}
            </div>
          )}
          <div className="compset mt-5">
            <button onClick={handlecompset} className="text-[#9c0195fd]">
              populate with comp-set
            </button>
          </div>
        </div>
        <div className="filters w-full p-4">
          <h1 className="text-[1.5em]">Filters</h1>
          <div className="flex flex-col md:flex-row">
            {/* <div className="flex-col flex w-full">
              <div
                className="flex mb-8 cursor-pointer mr-0 sm:mb-0 sm:mr-8 justify-between p-2 w-full items-center border rounded-lg bg-[#57545431]"
                onClick={toggleCategoryDropdown}
              >
                <Image src={category} alt="b" className="w-[1.4em]" />
                <span className="ml-1 text-[#05050585]">
                  {selectedCategory.name || "Category"}
                </span>
                <Image
                  src={isCategoryDropdownOpen ? undroped : droped}
                  className="w-4 ml-auto"
                  alt="kk"
                />
              </div>
              {isCategoryDropdownOpen && (
                <div className="bg-white text-black border w-full">
                  {stores.map((store) => (
                    <div
                      key={store.id}
                      className="cursor-pointer text-black p-4 hover:bg-gray-200"
                      onClick={() => handleCategoryChange(store.category)}
                    >
                      {store.category}
                    </div>
                  ))}
                </div>
              )}
            </div> */}
            <div className="flex-col flex w-full md:w-1/2 mt-4 md:mt-0">
              <div
                className="flex cursor-pointer w-full justify-between p-2 items-center border rounded-lg bg-[#57545431]"
                onClick={toggleSizeDropdown}
              >
                <Image src={category} alt="b" className="w-[1.4em]" />
                <span className="ml-1 text-[#05050585]">
                  {selectedSize.name || "Size"}
                </span>
                <Image
                  src={isSizeDropdownOpen ? undroped : droped}
                  className="w-4 ml-auto"
                  alt="kk"
                />
              </div>
              {isSizeDropdownOpen && (
                <div className="bg-white text-black border w-full">
                  {stores.map((store) => (
                    <div
                      key={store.id}
                      className="cursor-pointer text-black p-4 hover:bg-gray-200"
                      onClick={() => handleSizeChange(store.size)}
                    >
                      {store.size}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="brand border bg-[#57545431] rounded-lg flex m-auto w-2/4 p-2 mt-3">
            <div className="relative flex-grow">
              <Image
                src={brand}
                alt="b"
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
              />
              <input
                type="text"
                className="pl-8 bg-transparent outline-none text-[#0a0a0a83] w-full"
                placeholder="Brand"
              />
            </div>
          </div>

          <div className="price w-full">
            <PriceRange range={range} handlePriceChanges={handlePriceChanges} />
          </div>

          <div className="m-auto flex items-center justify-center mt-4">
            <button
              type="submit"
              className="bg-[#12335a] m-auto p-2 pl-4 pr-4 rounded-lg text-white"
              onClick={applyFilters}
            >
              Apply filters
            </button>
          </div>
        </div>
      </div>
      {showCompset && (
        <div ref={compsetRef}>
          <Compsetprop closeFunction={handlecompset} />
        </div>
      )}
      <Results storesData={storesData} />
    </>
  );
};

export default Filters;

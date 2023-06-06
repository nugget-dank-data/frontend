"use client";
import React, { useState, useEffect } from "react";
import store from "../../images/stores.svg";
import Image from "next/image";
import droped from "../../images/g.svg";
import undroped from "../../images/2.svg";
import category from "../../images/category.svg";
import brand from "../../images/brand.svg";
import Results from "./results";
import PriceRange from "@/components/PriceRange";

const Filters = () => {
  const [range, setRange] = React.useState([0, 300]);
  const [stores, setStores] = useState([]);
  const [storesData, setStoresData] = useState([]);
  const [selectedStore, setSelectedStore] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);

  useEffect(() => {
    // Fetch stores from API
    const fetchStores = async () => {
      try {
        const response = await fetch("your-api-url"); // replace with the actual API endpoint
        const data = await response.json();
        setStores(data); // Set the fetched stores in state
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);


  useEffect(() => {
    // Fetch stores from API
    const fetchStoresData = async () => {
      try {
        const response = await fetch("your-api-url"); // replace with the actual API endpoint
        const data = await response.json();
        setStoresData(data); // Set the fetched stores in state
      } catch (error) {
        console.error("Error fetching stores data:", error);
      }
    };

    fetchStoresData();
  }, []);

  const handleStoreChange = (store) => {
    setSelectedStore(store);
    setIsStoreDropdownOpen(false);
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
    // Apply filters to selected store details
    // Example console log to display the selected filters
    console.log("Selected Store:", selectedStore);
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Size:", selectedSize);
    console.log("Selected Price Range:", range);
  };

  return (
    <>
    <div className="p-6 flex flex-col md:flex-row border-b"> 
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
          <a href="#" className="text-[#9c0195fd]">populate with comp-set</a>
        </div>
      </div>
      <div className="filters w-full p-4">
        <h1 className="text-[1.5em]">Filters</h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex-col flex w-full md:w-1/2">
            <div
              className="flex mb-8 cursor-pointer mr-0 sm:mb-0 sm:mr-8 justify-between p-2 items-center border rounded-lg bg-[#57545431]"
              onClick={toggleCategoryDropdown}
            >
              <Image src={category} alt="b" className="w-[1.4em]" />
              <span className="ml-1 text-[#05050585]">
                {selectedCategory.name || "Category"}
              </span>
              <Image
                src={isCategoryDropdownOpen ? undroped : droped}
                className="w-4 ml-auto"
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
          </div>
          <div className="flex-col flex w-full md:w-1/2">
            <div
              className="flex cursor-pointer ml-0 sm:mb-0 sm:ml-8 justify-between p-2 items-center border rounded-lg bg-[#57545431]"
              onClick={toggleSizeDropdown}
            >
              <Image src={category} alt="b" className="w-[1.4em]" />
              <span className="ml-1 text-[#05050585]">
                {selectedSize.name || "Size"}
              </span>
              <Image
                src={isSizeDropdownOpen ? undroped : droped}
                className="w-4 ml-auto"
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

        <div className="price">
         <PriceRange
         range={range}
         handlePriceChanges={handlePriceChanges}
         />
        </div>
        
        <div className="m-auto flex items-center justify-center mt-4">
        <button type="submit" className="bg-[#12335a] m-auto p-2 pl-4 pr-4 rounded-lg text-white" onClick={applyFilters}>
          Apply filters
        </button>
        </div>
      </div>

    </div>
      <Results storesData={storesData} />
      </>
  );
};

export default Filters;

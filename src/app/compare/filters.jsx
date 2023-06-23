"use client";
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
import Axios from "../api/axios";

const Filters = () => {
  const [range, setRange] = useState([0, 300]);
  const [allstores, setStores] = useState([]);
  const [storesData, setStoresData] = useState([]);
  const [selectedStore, setSelectedStore] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
  const [showCompset, setShowCompset] = useState(false);
  const compsetRef = useRef(null);
  const [selectedFilters, setSelectedFilters] = useState({});

  const allstoresurl = "http://142.93.146.70:420/scraper/get-all-stores";

  useEffect(() => {
    if (selectedStore.length > 0) {
      const storeIds = selectedStore.map((store) => store.bb_id).join(",");
      const url = `http://142.93.146.70:420/scraper/unique-products?bb_store_ids=${storeIds}`;
      Axios.get(url)
        .then(({ data }) => {
          setStoresData(data);
          console.log("data", data);
        })
        .catch((error) => {
          console.error("Error fetching store data:", error);
        });
    }
  }, [selectedStore]);

  // FETCH ALL STORES
  useEffect(() => {
    Axios.get(allstoresurl)
      .then(({ data }) => {
        setStores(data.data);
        console.log("allstores:", data.data);
      })
      .catch((error) => {
        console.error("Error fetching stores:", error);
      });
  }, []);

  const applyFilters = () => {
    setSelectedFilters({
      selectedStore,
      selectedCategory,
      selectedSize,
      range
    });
  };

  const handleStoreChange = (store) => {
    // Check if the selected store is already in the array
    const isSelected = selectedStore.some(
      (selectedStore) => selectedStore.id === store.id
    );

    if (isSelected) {
      // Remove the store from the selected stores array
      setSelectedStore(
        selectedStore.filter((selectedStore) => selectedStore.id !== store.id)
      );
    } else {
      // Add the store to the selected stores array
      setSelectedStore([...selectedStore, store]);
    }
    setIsStoreDropdownOpen(!isStoreDropdownOpen);
  };

  const handlecompset = () => {
    setShowCompset(!showCompset);
  };

  const handlePriceChanges = (event, newValue) => {
    setRange(newValue);
  };

  const toggleStoreDropdown = () => {
    setIsStoreDropdownOpen(!isStoreDropdownOpen);
    setIsCategoryDropdownOpen(false);
    setIsSizeDropdownOpen(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsCategoryDropdownOpen(false);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    setIsStoreDropdownOpen(false);
    setIsSizeDropdownOpen(false);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setIsSizeDropdownOpen(false);
  };

  const toggleSizeDropdown = () => {
    setIsSizeDropdownOpen(!isSizeDropdownOpen);
    setIsStoreDropdownOpen(false);
    setIsCategoryDropdownOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (compsetRef.current && !compsetRef.current.contains(event.target)) {
      setShowCompset(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (selectedStore.length > 0) {
      const storeIds = selectedStore.map((store) => store.bb_id).join(",");
      const url = `http://142.93.146.70:420/scraper/unique-products?bb_store_ids=${storeIds}`;
      Axios.get(url)
        .then(({ data }) => {
          setStoresData(data);
          console.log("data", data);

          // Extract unique categories and sizes from the data
          const uniqueCategories = [
            ...new Set(data.map((item) => item.Category)),
          ];
          const uniqueSizes = [...new Set(data.map((item) => item.size))];
          setCategories(uniqueCategories);
          setSizes(uniqueSizes);
        })
        .catch((error) => {
          console.error("Error fetching store data:", error);
        });
    }
  }, [selectedStore]);

  return (
    <div className="w-full">
      <div className="relative flex flex-col md:flex-row border-b w-full">
        <div className="store p-4 w-full">
          <h1 className="text-[1.5em]">Stores</h1>

          <div className="selected-stores w-full">
            {selectedStore.map((store) => (
              <div
                key={store.id}
                className="flex items-center w-3/4 justify-between p-2 bg-gray-200 mb-2 rounded-lg"
              >
                <span>{store.name}</span>
                <button
                  className="text-red-500"
                  onClick={() => handleStoreChange(store)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div
            className="flex cursor-pointer justify-between w-3/4 p-2 items-center border rounded-lg bg-[#57545411] "
            onClick={toggleStoreDropdown}
          >
            <Image src={store} alt="b" className="w-[1.4em]" />
            <span className="ml-6 text-[#05050585]">Search store ...</span>
            <Image
              src={isStoreDropdownOpen ? undroped : droped}
              className="w-4 ml-auto"
              alt="k"
            />
          </div>
          {isStoreDropdownOpen && (
            <div className="flex cursor-pointer h-[7em] text-left flex-col overflow-y-scroll justify-between w-3/4 border rounded-lg bg-[#57545411] scrollbar-thin scrollbar-thumb-blue-[#7F56D9] scrollbar-track-gray-100">
              {allstores.map((store) => (
                <div
                  key={store.id}
                  className={`cursor-pointer  text-left justify-start text-black py-4 px-1 hover:bg-gray-200 ${
                    selectedStore.some(
                      (selectedStore) => selectedStore.id === store.id
                    )
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
          <div className="compset mt-5">
            <button onClick={handlecompset} className="text-[#7F56D9]">
              populate with comp-set
            </button>
          </div>
        </div>

        {/* Display selected stores */}

        <div className="filters w-full p-4">
          <h1 className="text-[1.5em]">Filters</h1>
          <div className="flex flex-col md:flex-row">
            <div className="flex-col flex w-full">
              <div
                className="flex mb-8 cursor-pointer mr-0 sm:mb-0 sm:mr-8 justify-between p-2 w-3/4 items-center border rounded-lg bg-[#57545431]"
                onClick={toggleCategoryDropdown}
              >
                <Image src={category} alt="b" className="w-[1.4em]" />
                <span className="ml-1 text-[#05050585]">
                  {selectedCategory || "Category"}
                </span>
                <Image
                  src={isCategoryDropdownOpen ? undroped : droped}
                  className="w-4 ml-auto"
                  alt="kk"
                />
              </div>
              {isCategoryDropdownOpen && (
                <div className="flex cursor-pointer h-[7em] text-left flex-col overflow-y-scroll justify-between w-3/4 border rounded-lg bg-[#57545411] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100">
                  {categories.sort().map((category) => (
                    <div
                      key={category}
                      className={`cursor-pointer text-black p-4 hover:bg-gray-200 ${
                        selectedCategory === category ? " bg-gray-200" : ""
                      }`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex-col flex w-full md:w-1/2 mt-4 md:mt-0">
              <div
                className="flex cursor-pointer w-full justify-between p-2 items-center border rounded-lg bg-[#57545431]"
                onClick={toggleSizeDropdown}
              >
                <Image src={category} alt="b" className="w-[1.4em]" />
                <span className="ml-1 text-[#05050585]">
                  {selectedSize || "Size"}
                </span>
                <Image
                  src={isSizeDropdownOpen ? undroped : droped}
                  className="w-4 ml-auto"
                  alt="kk"
                />
              </div>
              {isSizeDropdownOpen && (
                <div className="flex cursor-pointer h-[7em] md:w-1/2 mt-4 md:mt-0 text-left flex-col overflow-y-scroll justify-between w-3/4 border rounded-lg bg-[#57545411] scrollbar-thin scrollbar-thumb-[#7F56D9] scrollbar-track-gray-100">
                  {sizes.sort((a, b) => a - b).map((size) => (
                    <div
                      key={size}
                      className={`cursor-pointer text-black p-4 hover:bg-gray-200 ${
                        selectedSize === size ? " bg-gray-200" : ""
                      }`}
                      onClick={() => handleSizeChange(size)}
                    >
                      {size}
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
              className="bg-[#7F56D9] m-auto p-2 pl-4 pr-4 rounded-lg text-white"
              onClick={applyFilters}
            >
              Apply filters
            </button>
          </div>
        </div>
      </div>
      {showCompset && (
        <div
          ref={compsetRef}
          className="absolute top-0 right-0 bg-white w-80 mt-12 rounded-lg shadow-md"
        >
          <Compsetprop />
        </div>
      )}
      <div>
      <Results storesData={storesData} allstores={allstores} selectedFilters={selectedFilters} selectedstores={selectedStore} />
      </div>
    </div>
  );
};

export default Filters;

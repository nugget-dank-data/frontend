"use client";
import React, { useState, useEffect, useRef } from "react";
import Store from "../../images/stores.svg";
import Image from "next/image";
import droped from "../../images/g.svg";
import undroped from "../../images/2.svg";
import category from "../../images/category.svg";
import brand from "../../images/brand.svg";
import Results from "./results";
import PriceRange from "@/components/PriceRange";
import Compsetprop from "./compset";
import Axios from "../api/axios";
import SelectedFilters from "./selecedfilters";
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
import { FaTimes } from 'react-icons/fa';


const Filters = () => {
  const [range, setRange] = useState([0, 300]);
  const [allstores, setStores] = useState([]);
  const [storesData, setStoresData] = useState([]);
  const [selectedStore, setSelectedStore] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
  const [showCompset, setShowCompset] = useState(false);
  const [compsetid, setCompsetId] = useState(Number)
  const compsetRef = useRef(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [productLoading, setIsProductLoading] = useState(false);
  const [storeLoading, setIsStoreLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [brandSearch, setBrandSearch] = useState([]);
  const [brandvalue, setbrandvalue] = useState('')
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const allstoresurl = "http://35.229.42.75:420/scraper/get-all-stores";

  useEffect(() => {
    setIsStoreLoading(true);
    Axios.get(allstoresurl)
      .then(({ data }) => {
        setStores(data.data);
        console.log("allstores:", data.data);
      })
      .catch((error) => {
        console.error("Error fetching stores:", error);
      })
      .finally(() => {
        setIsStoreLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedStore.length > 0) {
      const storeIds = selectedStore.map((store) => store.bb_id).join(",");
      const url = `http://35.229.42.75:420/scraper/unique-products?bb_store_ids=${storeIds}`;
      setIsProductLoading(true);
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
        })
        .finally(() => {
          setIsProductLoading(false);
        });
    }
  }, [selectedStore]);


  

  const applyFilters = () => {
    setSelectedFilters({
      selectedCategory,
      selectedSize,
      range,
      brandSearch,
    });
    add()
    setbrandvalue('')
  };

  const handleStoreChange = (store) => {
    // Check if the selected store is already in the array
    const isSelected = selectedStore.some(
      (selectedStore) => selectedStore.id === store.id
    );

    if (isSelected) {
      setSelectedStore(
        selectedStore.filter((selectedStore) => selectedStore.id !== store.id)
      );
    } else {
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

  const handleCategoryChange = (category) => {
    const isSelected = selectedCategory.includes(category);

    if (isSelected) {
      setSelectedCategory((prevSelectedCategory) =>
        prevSelectedCategory.filter((item) => item !== category)
      );
    } else {
      setSelectedCategory((prevSelectedCategory) => [
        ...prevSelectedCategory,
        category,
      ]);
    }

    setIsCategoryDropdownOpen(false);
  };

  const handleSizeChange = (size) => {
    const isSelected = selectedSize.includes(size);

    if (isSelected) {
      setSelectedSize((prevSelectedSize) =>
        prevSelectedSize.filter((item) => item !== size)
      );
    } else {
      setSelectedSize((prevSelectedSize) => [...prevSelectedSize, size]);
    }

    setIsSizeDropdownOpen(false);
  };

  const handleBrandSearchChange = (event) => {
    const value = event.target.value;
    setbrandvalue(value)
    

  };

  const handlesetstoredata = (data)=>{
    setStoresData(data)
    console.log('data:::::::',data)
    
    console.log('products',storesData)
  }

  const add = () => {
    
    if (brandvalue && brandvalue.trim() !== '') {
      setBrandSearch((prevBrandSearch) => {
        
        if (!prevBrandSearch.includes(brandvalue)) {
          
          return [...prevBrandSearch, brandvalue];
        }
        return prevBrandSearch;
      });
    }
  };
  
  const isStoreSelected = selectedStore.length > 0;

  const resetFilters = () => {
    
    setSelectedCategory([]);
    setSelectedSize([]);
    setRange([0, 300]);
    setBrandSearch("");
    setSelectedFilters({});
  };

  const handleRemoveItem = (type, value) => {
    switch (type) {
      case "category":
        setSelectedCategory((prevSelectedCategory) =>
          prevSelectedCategory.filter((category) => category !== value)
        );
        break;
      case "size":
        setSelectedSize((prevSelectedSize) =>
          prevSelectedSize.filter((size) => size !== value)
        );
        break;
      case "brand":
        setBrandSearch((prevBrandSearch) =>
          prevBrandSearch.filter((brand) => brand !== value)
        );
        break;
      default:
        break;
    }
  };

  const toggleStoreDropdown = () => {
    setIsStoreDropdownOpen(!isStoreDropdownOpen);
    setIsCategoryDropdownOpen(false);
    setIsSizeDropdownOpen(false);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    setIsStoreDropdownOpen(false);
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

  const handlecompsetselect = (id)=>{
    compsetfetch(id)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex flex-col border-l w-full ">
      <div className="relative flex flex-col pr-9 gap-6  md:flex-row border-b w-full justify-between">
        <div className="store p-4 w-[80%] ">
          <h1 className="text-[1.5em]">Stores</h1>

          <div className="selected-stores w-full">
            {selectedStore.map((store) => (
              <div
                key={store.id}
                className="flex items-center w-3/4 justify-between text-[0.955em] p-2 border mb-2 rounded-[0.7em]"
              >
                <div className="flex gap-4">
                <Image src={Store} alt="b" className="w-[1.4em]" />
                <span>{store.name}</span>
                </div>
                <FaTimes
            
            className="w-[1.5em] mr-2 mt-2 text-red-500 float-right cursor-pointer"
                  onClick={() => handleStoreChange(store)}
          />
             
              </div>
            ))}
          </div>

          <div
            className="flex cursor-pointer justify-between w-3/4 p-2 items-center border rounded-[0.7em]  "
            onClick={toggleStoreDropdown}
          >
            <Image src={Store} alt="b" className="w-[1.4em]" />
            <span className="ml-6 text-[#05050585] text-[0.9em]">Search store ...</span>
            <Image
              src={isStoreDropdownOpen ? undroped : droped}
              className="w-4 ml-auto"
              alt="k"
            />
          </div>
          {isStoreDropdownOpen && (
            <div className="flex cursor-pointer h-[7em] text-left flex-col overflow-y-scroll justify-between w-3/4 border rounded-[0.7em] bg-[#57545411] scrollbar-thin scrollbar-thumb-[#7F56D9] scrollbar-track-gray-100">
              {storeLoading ? (
                <div className="flex justify-center items-center h-16">
                  <Dots size={32} color="#7F56D9" />
                </div>
              ) : (
                allstores.map((store) => (
                  <div
                    key={store.id}
                    className={`cursor-pointer text-[1em]  text-left justify-start text-black py-4 px-1 hover:bg-gray-200 ${
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
                ))
              )}
            </div>
          )}
          <div className="compset mt-5 flex">
            <button onClick={handlecompset} className="text-[#7F56D9] cursor-pointer">
              populate with comp-set
            </button>

            {selectedStore.length > 0 && <button onClick={handlecompset} className=" ml-8 cursor-pointer text-[#7F56D9]">
              download
            </button>}
          </div>
        </div>

        {/* Display selected stores */}

        <div className="filters w-full flex flex-col">
          <h1 className="text-[1.5em]">Filters</h1>
          <div className="flex flex-col md:flex-row w-full justify-between gap-5 ">
            <div className="block w-full">
              <div className="w-full">
              <div
                className={`flex mb-8 cursor-pointer mr-0 sm:mb-0 sm:mr-8 justify-between p-2 w-full items-center border rounded-[0.7em] text-[0.9555em] ${
                  isStoreSelected ? "" : "cursor-not-allowed opacity-50"
                }`}
                onClick={toggleCategoryDropdown}
              >
                  <Image src={category} alt="b" className="w-[1.4em]" />
                  <span className="ml-1 text-[#05050585]">{"Category"}</span>
                  <Image
                    src={isCategoryDropdownOpen ? undroped : droped}
                    className="w-4 ml-auto"
                    alt="kk"
                  />
                </div>
                {isStoreSelected && isCategoryDropdownOpen && (
                  <div className="flex cursor-pointer h-[7em] text-left flex-col overflow-y-scroll justify-between w-full border rounded-[0.7em] bg-[#57545411] scrollbar-thin scrollbar-thumb-[#7F56D9] scrollbar-track-gray-100">
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
            </div>
            <div className="flex-col flex w-[70%]">
            <div
              className={`flex cursor-pointer w-full text-[0.9em] justify-between p-2 items-center border rounded-[0.7em] ${
                isStoreSelected ? "" : "cursor-not-allowed opacity-50"
              }`}
              onClick={toggleSizeDropdown}
            >
                <Image src={category} alt="b" className="w-[1.4em]" />
                <span className="ml-1 text-[#05050585]">{"Size"}</span>
                <Image
                  src={isSizeDropdownOpen ? undroped : droped}
                  className="w-4 ml-auto"
                  alt="kk"
                />
              </div>
              {isStoreSelected && isSizeDropdownOpen && (
                <div className="flex cursor-pointer h-[7em] mt-4 md:mt-0 text-left flex-col overflow-y-scroll justify-between w-full border rounded-[0.7em] bg-[#57545411] scrollbar-thin scrollbar-thumb-[#7F56D9] scrollbar-track-gray-100">
                  {sizes
                    .sort((a, b) => a - b)
                    .map((size) => (
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

            <div className="block w-[70%]">
            <div
              className={`border rounded-[0.7em] text-[0.9em] w-full p-2 ${
                isStoreSelected ? "" : "cursor-not-allowed opacity-50"
              }`}
            >
                <div className="relative">
                  <Image
                    src={brand}
                    alt="b"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                  />
                 <input
                  type="text"
                  className={`pl-8 bg-transparent outline-none text-[#0a0a0a83] w-full ${
                    isStoreSelected ? "" : "cursor-not-allowed"
                  }`}
                  placeholder="Brand"
                  value={brandvalue}
                  onChange={handleBrandSearchChange}
                  readOnly={!isStoreSelected}
                />
                </div>
              </div>
            </div>
          </div>

          <SelectedFilters
            selectedCategory={selectedCategory}
            selectedSize={selectedSize}
            brandSearch={brandSearch}
            removeItem={handleRemoveItem}
            apply ={applyFilters}
          />
         
          <div className="price ">
            <PriceRange range={range} handlePriceChanges={handlePriceChanges} disabled={!isStoreSelected} />
          </div>
          
          <div className="flex w-full justify-center gap-8 items-center">
  {/* Reset Button */}
  {selectedCategory.length || brandSearch.length || selectedSize.length || range[0] !== 0 || range[1] !== 300 ? (
  <div className="flex items-center justify-center mt-4">
  <button
        type="button"
        className="border-[#7F56D9] border hover:bg-[#7F56D9] hover:text-white p-2 px-4 rounded-lg w-full"
        onClick={resetFilters}
      >
        Reset
      </button>
    </div>
  ) : null}

  <div className="flex items-center justify-center mt-4">
    <button
      type="submit"
      className={`bg-[#7F56D9] m-auto w-full p-2 pl-4 pr-4 rounded-[0.7em] text-white ${isStoreSelected ? '' : 'cursor-not-allowed opacity-50'}`}
      onClick={applyFilters}
      disabled={!isStoreSelected}
    >
      Apply filters
    </button>
  </div>

          </div>
        </div>
      </div>

      {showCompset && (
        <div
          ref={compsetRef}
          className="absolute top-0 right-0 bg-white w-80 mt-12 rounded-[0.7em] shadow-md"
        >
          <Compsetprop closeFunction={handlecompset} selectcompset={handlecompsetselect} setdata={handlesetstoredata} />
        </div>
      )}

<div>
      <Results
        storesData={storesData}
        allstores={allstores}
        selectedFilters={selectedFilters}
        selectedstores={selectedStore}
        isfetching={productLoading}
        page={page}
        itemsPerPage={itemsPerPage}
      />
      </div>
    </div>
  );
};

export default Filters;

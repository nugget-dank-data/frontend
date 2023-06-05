"use client";
import React, { useState, useEffect } from "react";
import store from "../../images/stores.svg";
import Image from "next/image";
import droped from "../../images/g.svg";
import undroped from "../../images/2.svg";
import category from "../../images/category.svg";
import brand from '../../images/brand.svg'

const Compare = () => {
  const [stores, setStores] = useState([]);
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

  const handleStoreChange = (store) => {
    setSelectedStore(store);
    setIsStoreDropdownOpen(false);
  };

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

  return (
    <div className="p-6 flex flex-row">
      <div className="store p-4 w-full">
        <h1 className="text-[1.5em]">Store</h1>
        <div
          className="flex cursor-pointer justify-between p-2 items-center border rounded-lg bg-white border-black"
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
        <div className="compset">
          <a href="#">populate with comp-set</a>
        </div>
      </div>
      <div className="filters w-full p-4">
        <h1 className="text-[1.5em]">Filters</h1>
        <div className="flex justify-between">
          <div className="flex-col flex w-full">
            <div
              className="flex cursor-pointer mr-8 justify-between p-2 items-center border rounded-lg bg-white border-black"
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
          <div className="flex-col flex w-full">
            <div
              className="flex cursor-pointer ml-8 justify-between p-2 items-center border rounded-lg bg-white border-black"
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
     
     <div className="brand border flex m-auto ">
      <Image src={brand} alt="b" />
      <p>Brand</p>
     </div>
      </div>
    </div>
  );
};

export default Compare;

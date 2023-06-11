import React, { useState } from "react";
import search from "../../images/brand.svg";
import Image from "next/image";
import category from "../../images/category.svg";
import expand from "../../images/expand.svg";
import Pricehistory from './pricehistory';

const Results = ({ storesData }) => {
  const [sortOption, setSortOption] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleToggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const sortStores = (data) => {
    if (sortOption === "name-asc") {
      return data.sort((a, b) => a.Name.localeCompare(b.Name));
    } else if (sortOption === "name-desc") {
      return data.sort((a, b) => b.Name.localeCompare(a.Name));
    } else if (sortOption === "category-asc") {
      return data.sort((a, b) => a.Category.localeCompare(b.Category));
    } else if (sortOption === "category-desc") {
      return data.sort((a, b) => b.Category.localeCompare(a.Category));
    } else if (sortOption === "brand-asc") {
      return data.sort((a, b) => a.Brand.localeCompare(b.Brand));
    } else if (sortOption === "brand-desc") {
      return data.sort((a, b) => b.Brand.localeCompare(a.Brand));
    } else {
      return data;
    }
  };

  const sortedData = Array.isArray(sortStores(storesData))
    ? sortStores(storesData)
    : [];

  const uniqueStoreNames = Array.from(
    new Set(sortedData.map((store) => store.Name))
  );
  const countByName = (name) => {
    return sortedData.filter((store) => store.Name === name).length;
  };

  return (
    <div className="flex flex-col">
      {showHistory && selectedProduct && (
        <Pricehistory
          priceData={selectedProduct}
          onClose={() => setShowHistory(false)}
        />
      )}
      <div className="flex flex-col md:flex-row justify-between p-4 mx-auto">
        <div className="flex md:mb-0 mb-4">
          <h2 className="text-[1.4em] font-bold">Results</h2>
          <p className="w-10 h-10 ml-3 flex items-center text-[1.4em] justify-center text-center border shadow-lg rounded-lg">
            {uniqueStoreNames.length || 0}
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 items-center">
          <div className="flex md:flex-grow-0 flex-grow justify-center md:mb-0 mb-3 md:mr-3 md:items-center bg-white p-0 rounded-lg">
            <Image src={search} alt="search" className="ml-4" />
            <input
              type="search"
              name=""
              placeholder="Keyword Search"
              id=""
              className="bg-transparent p-2 border-none focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-1 md:space-x-4">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">On Sale</label>
            <div className="relative">
              <Image
                src={category}
                alt="category"
                className="absolute w-5 h-5 left-2 top-1/2 transform -translate-y-1/2"
              />
              <select
                name="az-selection"
                id="az-selection"
                className="pl-10 pr-4 py-1 bg-white border rounded-lg"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="category-asc">Category (A-Z)</option>
                <option value="category-desc">Category (Z-A)</option>
                <option value="brand-asc">Brand (A-Z)</option>
                <option value="brand-desc">Brand (Z-A)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[50%] bg-slate-300 rounded-tl-[5px] rounded-tr-[5px] py-[0.5em] pl-[1em] ">
          <h1>Product</h1>
        </div>
        <div className="w-[50%]">
          <h1>{"" || "storename"}</h1>
        </div>
      </div>
      <div className=" overflow-y-scroll rounded-2xl border-b shadow-xl h-[30em] w-[90%] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100 mb-80">
      {uniqueStoreNames.map((name) => {
        const stores = sortedData.filter((store) => store.Name === name);
        const count = countByName(name);
        return (
          <div key={name} className="flex border-b">
            <div className="max-w-[40%] min-w-[40%] p-3">
              <div className="text-[0.9em]">
                <p className="pb-[2%]">{name}</p>
                <p className="pb-[2%]">
                  <span className="font-bold">Producer: </span>
                  {stores[0].lowercase_brand}
                </p>
              </div>
              <div className="flex justify-between w-[85 %]">
                <p>
                  <span className="font-bold">Category: </span> {stores[0].Category}
                </p>
                <p>
                  <span className="font-bold">Size: </span>
                  {stores[0].size_concat}
                </p>
              </div>
            </div>
            <div className=" w-1/6 flex flex-col relative ml-4">
              <div className="w-full justify-end items-end">
              <a
                href={stores[0].inv[0].url}
                className=" items-end text-right"
              >
                <Image src={expand} alt="ee" className="w-[1.3em] float-right" />
              </a>
              </div>
              <div
                className="hover:bg-[#8b8b8b79] justify-between flex flex-col p-[0.5em]"
                onClick={() => {
                  handleSelectProduct(stores[0]);
                  handleToggleHistory();
                }}
              >
                <p className="mb-4">${stores[0].inv[0].price}</p>
                <p className="mt-8">{stores[0].inv[0].raw_stock} in stock</p>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Results;

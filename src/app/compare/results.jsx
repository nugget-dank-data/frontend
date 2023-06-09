import React, { useState } from "react";
import search from "../../images/brand.svg";
import Image from "next/image";
import category from "../../images/category.svg";

const Results = ({ storesData }) => {
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortStores = (data) => {
    if (sortOption === "name-asc") {
      return data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      return data.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "category-asc") {
      return data.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortOption === "category-desc") {
      return data.sort((a, b) => b.category.localeCompare(a.category));
    } else if (sortOption === "brand-asc") {
      return data.sort((a, b) => a.brand.localeCompare(b.brand));
    } else if (sortOption === "brand-desc") {
      return data.sort((a, b) => b.brand.localeCompare(a.brand));
    } else {
      return data;
    }
  };

  const sortedData = sortStores(storesData);

  const uniqueStoreNames = Array.from(
    new Set(sortedData.map((store) => store.Name))
  );

  const countByName = (name) => {
    return sortedData.filter((store) => store.Name === name).length;
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between p-4 mx-auto">
        <div className="flex md:mb-0 mb-4">
          <h2 className="text-[1.4em] font-bold">Results</h2>
          <p className="w-10 h-10 ml-3 flex items-center text-[1.4em] justify-center text-center bg-gray-200 rounded-lg">
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
        <div className="w-[50%] bg-slate-300 rounded-tl-[5px] rounded-tr-[5px] py-[0.5em] pl-[1em] "><h1>Product</h1></div>
        <div className="w-[50%]"><h1>{'' || 'storename'}</h1></div>
      </div>
      {uniqueStoreNames.map((name) => {
        const store = sortedData.find((store) => store.Name === name);
        const count = countByName(name);
        return (
         
          <div key={store.id} className="mt-4 flex justify-between p-[1em]">
            <div className="max-w-[40%] min-w-[40%]">
              <div className="">
                <p className="pb-[2%]">{store.Name}</p>
                <p className="pb-[2%]"><span className="font-bold">Producer: </span>{store.lowercase_brand}</p>
              </div>
              <div className="flex justify-between w-[85 %]">
                <p><span className="font-bold">Category: </span> {store.Category}</p>
                <p><span className="font-bold">Size: </span>{store.size_concat}</p>
              </div>
            </div>
            <div className="bg-blue-500 w-[50%]">
                dedew
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Results;

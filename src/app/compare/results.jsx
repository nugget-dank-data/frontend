import React, { useState } from "react";
import search from "../../images/brand.svg";
import Image from "next/image";
import category from '../../images/category.svg';

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

  return (
    <div className="flex p-4 m-auto">
      <div className="data flex flex-col min-w-[40%]">
        <div className="flex">
          <h2 className="p-1 text-[1.3em]">Results</h2>
          <p className="rounded-lg text-center items-center justify-center border w-10 flex h-10">
            {sortedData.length || 0}
          </p>
        </div>
        {sortedData.map((store) => (
          <div key={store.id}>
            <h2>{store.name}</h2>
            {/* other details of the store */}
          </div>
        ))}
      </div>
      <div className="search flex flex-col w-full justify-between">
        <div className=" w-full flex items-center border rounded-lg">
          <Image src={search} alt="s" className="ml-4" />
          <input
            type="search"
            name=""
            placeholder="Keyword Search"
            id=""
            className="p-2 border-none focus:outline-none w-full flex-grow"
          />
        </div>
        <div className="check flex p-2">
          <div className="flex justify-center p-2">
            <input type="checkbox" name="" id="checkbox" />
            <label htmlFor="checkbox" className="ml-2">
              <p>on sale</p>
            </label>
          </div>
          {/* A-Z filter */}
          <div className="relative">
            <select
              name="az-selection"
              id="az-selection"
              className="ml-4 border p-2 rounded-lg pl-10"
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
            <div className="absolute left-5 top-2">
              <Image src={category} alt="n" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

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
    <div className="flex flex-col md:flex-row justify-between p-4 mx-auto">
      <div className="flex md:mb-0 mb-4">
        <h2 className="text-[1.4em] font-bold">Results</h2>
        <p className="w-10 h-10 ml-3 flex items-center text-[1.4em] justify-center text-center bg-gray-200 rounded-lg">
          {sortedData.length || 0}
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
            <Image src={category} alt="category" className="absolute w-5 h-5 left-2 top-1/2 transform -translate-y-1/2" />
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
      {sortedData.map((store) => (
        <div key={store.id} className="mt-4">
          <h2>{store.name}</h2>
          {/* other details of the store */}
        </div>
      ))}
    </div>
  );
};

export default Results;
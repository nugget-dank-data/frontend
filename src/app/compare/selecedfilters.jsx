import React from 'react';
import { FaTimes } from 'react-icons/fa';

const SelectedFilters = ({ selectedCategory, selectedSize, brandSearch, removeItem, apply }) => {
  return (
    <div className="selected-filters p-4 space-y-4 w-full flex">
      <div className="w-full flex flex-col">
        {selectedCategory.map((category) => (
          <div key={category} className="selected-filter-item">
            <div className="flex items-center bg-[#7f56d92e] w-fit mb-4 p-2 rounded-lg">
              <div className="mr-2">{category}</div>
              <div
                className="filter-icon"
                onClick={() => {
                  removeItem("category", category);
                  apply(); // Call the apply function when the remove icon is clicked
                }}
              >
                <FaTimes className="text-[#7F56D9] cursor-pointer font-extralight" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[70%]">
        {selectedSize.map((size) => (
          <div key={size} className="selected-filter-item">
            <div className="flex items-center bg-[#7f56d92e] w-fit mb-4 p-2 rounded-lg">
              <div className="mr-2">{size}</div>
              <div
                className="filter-icon"
                onClick={() => {
                  removeItem("size", size);
                  apply(); // Call the apply function when the remove icon is clicked
                }}
              >
                <FaTimes className="text-[#7f56d9] cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[70%]">
        {brandSearch.map((brand) => (
          <div key={brand} className="selected-filter-item">
            <div className="flex items-center bg-[#7f56d92e] w-fit mb-4 p-2 rounded-lg">
              <div className="mr-2">{brand}</div>
              <div
                className="filter-icon"
                onClick={() => {
                  removeItem("brand", brand);
                  apply(); // Call the apply function when the remove icon is clicked
                }}
              >
                <FaTimes className="text-[#7F56D9] cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedFilters;

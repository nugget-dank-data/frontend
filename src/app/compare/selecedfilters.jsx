import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const SelectedFilters = ({ selectedCategory, selectedSize, brandSearch, removeItem, apply }) => {
  // Use useEffect to apply the filters whenever the selected filters change
  useEffect(() => {
    apply();
  }, [selectedCategory, selectedSize, brandSearch]);

  const handleReset = () => {
    removeItem('category', ''); // Replace '' with the default value for categories (e.g., 'All' or '')
    removeItem('size', ''); // Replace '' with the default value for sizes (e.g., 'All' or '')
    removeItem('brand', ''); // Replace '' with the default value for brands (e.g., 'All' or '')
  };

  return (
    <div className="selected-filters p-4 space-y-4 w-full flex">
      <div className="w-full flex flex-col">
        {selectedCategory && selectedCategory.map((category) => (
          <div key={category} className="selected-filter-item">
            <div className="flex items-center bg-[#7f56d92e] w-fit mb-4 p-2 rounded-lg">
              <div className="mr-2">{category}</div>
              <div
                className="filter-icon"
                onClick={() => removeItem('category', category)}
              >
                <FaTimes className="text-[#7F56D9] cursor-pointer font-extralight" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[70%]">
        {selectedSize && selectedSize.map((size) => (
          <div key={size} className="selected-filter-item">
            <div className="flex items-center bg-[#7f56d92e] w-fit mb-4 p-2 rounded-lg">
              <div className="mr-2">{size}</div>
              <div
                className="filter-icon"
                onClick={() => removeItem('size', size)}
              >
                <FaTimes className="text-[#7f56d9] cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[70%]">
        {brandSearch && brandSearch.map((brand) => (
          <div key={brand} className="selected-filter-item">
            <div className="flex items-center bg-[#7f56d92e] w-fit mb-4 p-2 rounded-lg">
              <div className="mr-2">{brand}</div>
              <div
                className="filter-icon"
                onClick={() => removeItem('brand', brand)}
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

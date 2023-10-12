import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const SelectedFilters = ({ selectedCategory, selectedSize, brandSearch, removeItem, apply }) => {
  // Use useEffect to apply the filters whenever the selected filters change
  useEffect(() => {
    apply();
  }, [selectedCategory, selectedSize, brandSearch]);

  const handleReset = () => {
    removeItem('category', ''); 
    removeItem('size', ''); 
    removeItem('brand', '');
  };

  return (
    <div className="selected-filters p-4 w-full flex flex-col">

      <div className="flex-col flex gap-2">

      {selectedCategory != '' &&
        <h2 className="font-[400]">Categories</h2>
         }
      <div className="w-full flex flex-wrap gap-2 leading-[2px]">
        {selectedCategory && selectedCategory.map((category) => (
          <div key={category} className="selected-filter-item text-[#7F56D9]">
            <div className="flex items-center bg-[#7f56d918] w-fit mb-4 p-2 rounded-xl">
              <div className="mr-2">{category}</div>
              <div
                className="filter-icon text-[#7F56D9]"
                onClick={() => removeItem('category', category)}
              >
                <Image src='/cancel.svg' alt='cancel' height={20} width={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      

     
      <div className="flex-col flex gap-2">
      {selectedSize != '' && 
      <h2 className="font-[400]">Sizes</h2>}

      <div className="w-full flex flex-wrap gap-2 leading-[2px]">
        {selectedSize && selectedSize.map((size) => (
          <div key={size} className="selected-filter-item text-[#7F56D9]">
            <div className="flex items-center bg-[#7f56d918] w-fit mb-4 p-2 rounded-xl">
              <div className="mr-2">{size}</div>
              <div
                className="filter-icon text-[#7F56D9]"
                onClick={() => removeItem('size', size)}
              >
                <Image src='/cancel.svg' alt='cancel' height={20} width={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      </div>



      <div className="flex-col flex gap-2">
        
      {brandSearch != '' &&
      <h2 className="font-[400]">Brands</h2>}
      <div className="w-full flex flex-wrap gap-2 leading-[2px]">
        {brandSearch && brandSearch.map((brand) => (
          <div key={brand} className="selected-filter-item text-[#7F56D9]">
            <div className="flex items-center bg-[#7f56d918] w-fit mb-4 p-2 rounded-xl">
              <div className="mr-2">{brand}</div>
              <div
                className="filter-icon"
                onClick={() => removeItem('brand', brand)}
              >
                <Image src='/cancel.svg' alt='cancel' height={20} width={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>


    </div>
  );
};

export default SelectedFilters;

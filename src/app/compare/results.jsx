import React, { useState, useEffect } from "react";
import search from "../../images/brand.svg";
import Image from "next/image";
import category from "../../images/category.svg";
import expand from "../../images/expand.svg";
import Pricehistory from "./pricehistory";

const Results = ({
  storesData,
  allstores,
  selectedFilters,
  selectedstores,
}) => {
  const [sortOption, setSortOption] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { selectedStore, selectedCategory, selectedSize, range } =
    selectedFilters;
  const [filteredData, setFilteredData] = useState([]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleToggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const handleSelectProduct = (product) => {
    filteredData;
    setSelectedProduct(product);
  };

  console.log(selectedstores);
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

  useEffect(() => {
    // Filter the data based on the selected filters
    let updatedFilteredData = storesData || [];

    // if (
    //   selectedFilters.selectedStore &&
    //   selectedFilters.selectedStore.length > 0
    // ) {
    //   const storeIds = selectedFilters.selectedStore.map(
    //     (store) => store.bb_id
    //   );
    //   updatedFilteredData = updatedFilteredData.filter((item) =>
    //     storeIds.includes(item.bb_store_id)
    //   );
    // }

    // if (selectedFilters.selectedCategory !== "") {
    //   updatedFilteredData = updatedFilteredData.filter(
    //     (item) => item.Category === selectedFilters.selectedCategory
    //   );
    // }

    // if (selectedFilters.selectedSize !== "") {
    //   updatedFilteredData = updatedFilteredData.filter(
    //     (item) => item.size === selectedFilters.selectedSize
    //   );
    // }

    // // Apply price range filter
    // let minPrice, maxPrice;

    // if (
    //   Array.isArray(selectedFilters.range) &&
    //   selectedFilters.range.length === 2
    //   ) {
    //     [minPrice, maxPrice] = selectedFilters.range;
    //   updatedFilteredData = updatedFilteredData.filter(
    //     (item) => item.price >= minPrice && item.price <= maxPrice
    //   );
    // }

    // console.log("After selectedStore filter:", updatedFilteredData);
    // Update the filtered data
    setFilteredData(updatedFilteredData);
  }, [storesData, selectedFilters]);

  

  const uniqueproducts = Array.from(
    new Set(filteredData.map((product) => product.Name))
  );
  // console.log("uniqueproducts", uniqueproducts);

  // const countByName = (name) => {
  //   return filteredData.filter((store) => store.Name === name).length;
  // };

  return (
    <div className="flex flex-col">
     
      <div className="flex flex-col md:flex-row justify-between p-4 mx-auto">
        <div className="flex md:mb-0 mb-4">
          <h2 className="text-[1.4em] font-bold">Results</h2>
          <p className="h-10 min-w-[2em] ml-3 flex items-center text-[1.4em] justify-center text-center border shadow-lg rounded-lg">
            {uniqueproducts.length || 0}
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
        <div className="overflow-y-scroll relative rounded-2xl border-b shadow-xl h-[30em] w-[90%] flex scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100 mb-80">
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-between">
              <div className="w-full bg-slate-300 sticky top-0 rounded-tl-[5px] rounded-tr-[5px] py-[0.5em] pl-[1em]">
                <h1>Product</h1>
              </div>

              {Array.isArray(selectedstores) &&
                selectedstores.map((selectedStore) => (
                  <div
                  key={selectedStore.bb_id}
                  className="w-full sticky top-0 rounded-tl-[5px] rounded-tr-[5px] py-[0.5em] pl-[1em]"
                  >
                    {showHistory && selectedProduct && (
                      <Pricehistory
                        priceData={selectedProduct}
                        stores={allstores}
                        handleclose={() => setShowHistory(false)}
                        onClose={() => setShowHistory(false)}
                        selectedStore={selectedStore}
                      />
                    )}
                    <h1>{selectedStore.name}</h1>
                  </div>
                ))}
            </div>
            {filteredData.map((product) => {
              return (
                <div key={product.id} className="flex border-b justify-between">
                  <div className="w-full p-3">
                    <div className="text-[0.9em]">
                      <p className="pb-[2%]">{product.Name}</p>
                      <p className="pb-[2%]">
                        <span className="font-bold">Producer: </span>
                        {product.lowercase_brand}
                      </p>
                    </div>
                    <div className="flex justify-between w-[85 %]">
                      <p>
                        <span className="font-bold">Category: </span>
                        {product.Category}
                      </p>
                      <p>
                        <span className="font-bold">Size: </span>
                        {product.size_concat}
                      </p>
                    </div>
                  </div>
                  {Array.isArray(selectedstores) &&
                    selectedstores.map((selectedStore) => (
                      <div
                        key={selectedStore.id}
                        className="w-full justify-between"
                      >
                     
                        {product.inv[0].store_id == selectedStore.bb_id ? (
                          <div className="flex w-full flex-col m-3">
                            <div className="p-3">
                              <div className="w-full justify-end items-end">
                              <div className="w-3 rounded-full min-h-3 bg-green-500"></div>
                                <a
                                  href={product.inv[0].url}
                                  className="items-end text-right"
                                >
                                  <Image
                                    src={expand}
                                    alt="ee"
                                    className="w-[1.3em] float-right"
                                  />
                                </a>
                              </div>
                              <div
                                className="hover:bg-[#8b8b8b79] w-full justify-between flex flex-col p-[0.5em]"
                                onClick={() => {
                                  handleSelectProduct(product);
                                  handleToggleHistory();
                                }}
                              >
                                <p className="mb-4">${product.inv[0].price}</p>
                                <p className="mt-8">
                                  {product.inv[0].raw_stock} in stock
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex w-full flex-col m-3">
                            <div className="max-w-[40%] min-w-[40%] p-3">
                              <div className="w-full justify-end items-end">
                                <span className="min-w-3 rounded-full min-h-3 bg-red-500"></span>
                                <a
                                  // href={product.inv[0].url}
                                  className="items-end text-right"
                                >
                                
                                </a>
                              </div>
                              <div
                                className="hover:bg-[#8b8b8b79] w-full justify-between flex flex-col p-[0.5em]"
                                onClick={() => {
                                  handleSelectProduct(product);
                                  handleToggleHistory();
                                }}
                              >
                                <p className="mb-4">
                                  {/* ${product.inv[0].price} */}
                                </p>
                                <p className="mt-8">
                                  {/* {product.inv[0].raw_stock} in stock */}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

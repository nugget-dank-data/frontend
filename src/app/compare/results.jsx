import React, { useState, useEffect } from "react";
import search from "../../images/brand.svg";
import Image from "next/image";
import category from "../../images/category.svg";
import expand from "../../images/expand.svg";
import Pricehistory from "./pricehistory";
import "tailwindcss/tailwind.css";
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
import { BioRhyme_Expanded } from "next/font/google";

const Results = ({
  storesData,
  allstores,
  selectedFilters,
  selectedstores,
  isfetching,
  Page,
  itemsPerPage,
}) => {
  const startIndex = (Page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = storesData.slice(startIndex, endIndex);
  const [sortOption, setSortOption] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const handleSortChange = (event) => {
    const newSortOption = event.target.value;
    setSortOption(newSortOption);
    const sortedData = sortData(filteredData, newSortOption);
    setFilteredData(sortedData);
  };

  const handleToggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const keywordsearch = (search) => {
    if (!search) {
      // If the search is empty, return the original array as it is
      return storesData;
    }

    const filtered = storesData.filter((product) => {
      // Convert the product object to a string
      const productString = JSON.stringify(product);

      // Perform a case-insensitive search by converting both the search and product values to lowercase
      const searchString = search.toLowerCase();
      const productStringLower = productString.toLowerCase();

      // Check if the product object as a string contains the search value
      return productStringLower.includes(searchString);
    });

    setFilteredData(filtered);
    console.log('search complete')
  };

  const filterProducts = (filterData) => {
    const { selectedCategory, selectedSize, range, brandSearch } = filterData;

    const filtered = storesData.filter((product) => {
      let isMatch = true;

      if (
        selectedCategory &&
        !product.Category.toLowerCase().includes(selectedCategory.toLowerCase())
      ) {
        isMatch = false;
      }
      if (
        brandSearch &&
        !product.Brand.toLowerCase().includes(brandSearch.toLowerCase())
      ) {
        isMatch = false;
      }

      if (selectedSize) {
        const productSize = product.size || 0;
        if (productSize !== selectedSize) {
          isMatch = false;
        }
      }

      if (range) {
        const priceMatch =
          product.inv &&
          product.inv.length > 0 &&
          product.inv[0]?.price >= range[0] &&
          product.inv[0]?.price <= range[1];

        if (!priceMatch) {
          isMatch = false;
        }
      }

      return isMatch;
    });

    setFilteredData(filtered);
    console.log("mydata::", filteredData);
  };

  // Function to sort the data based on the selected sort option
  const sortData = (data, sortOption) => {
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
    // Filter the storesData based on selected filters
    filterProducts(selectedFilters);
  }, [selectedFilters, storesData]);

  // Function to load more data on scrolling
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !isFetching
    ) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    // Attach event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   // Load more data when isFetching is true
  //   if (!isFetching) return;

  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setPage((prevPage) => prevPage + 1);
  //     setIsFetching(false);
  //   }, 1500);
  // }, [isFetching]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    keywordsearch(value);
  };

  return (
    <div className="m-auto flex flex-col relatve">
          {showHistory && selectedProduct && (
                      <Pricehistory
                        priceData={selectedProduct}
                        stores={allstores}
                        handleclose={() => setShowHistory(false)}
                        onClose={() => setShowHistory(false)}
                        selectedStore={selectedProduct}
                      />
                    )}
      <div className="flex flex-col md:flex-row justify-between p-4 mx-auto">
        <div className="flex md:mb-0 mb-4">
          <h2 className="text-[1.4em] font-bold">Results</h2>
          <p className="h-10 min-w-[2em] ml-3 flex items-center text-[1.4em] justify-center text-center border shadow-lg rounded-lg">
            {isfetching ? (
              <div className="flex justify-center items-center h-16">
                <Dots size={20} color="#7F56D9" />
              </div>
            ) : (
              filteredData.length
            )}
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
              value={searchValue}
              onChange={handleInputChange}
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
        <div className="overflow-y-scroll  rounded-2xl border-b shadow-xl h-[30em] w-[90%] flex scrollbar-thin scrollbar-thumb-[#7F56D9] scrollbar-track-gray-100 mb-80">
          <div className="flex flex-col w-full relative">
              <div className="flex w-full justify-between sticky top-0 bg-white py-2 px-4">
              <div className="w-full bg-[#7f56d95d] sticky top-0 rounded-tl-[5px] rounded-tr-[5px] py-[0.5em] pl-[1em] min-w-[12em]">
                <h1>Product</h1>
              </div>

              {Array.isArray(selectedstores) &&
                selectedstores.map((selectedStore) => (
                  <div
                    key={selectedStore.bb_id}
                    className="w-full top-0 flex flex-col rounded-tl-[5px] rounded-tr-[5px] py-[0.5em] pl-[1em] min-w-[12em]"
                  >
                
                    <h1>{selectedStore.name}</h1>
                  </div>
                ))}
            </div>
            {filteredData.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex border-b justify-between scroll:animate-pulse  duration-[1000ms] taos:opacity-0"
                >
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
                        {product.size || 0} {product.size_unit}
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
                          <div className="flex w-full flex-col m-auto min-w-[12em]">
                            <div className="p-3 w-[50%]">
                              <div className="w-full justify-end items-end">
                                <span className="w-2 rounded-full h-2 block bg-green-500"></span>
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
                                  {product.inv[0].raw_stock ?? 0} in stock
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex w-full flex-col m-3 min-w-[12em]">
                            <div className="max-w-[40%] min-w-[40%] p-3">
                              <div className="w-full justify-end items-end">
                                <span className="w-2 rounded-full h-2 block bg-red-500"></span>
                                <a
                                  // href={product.inv[0].url}
                                  className="items-end text-right"
                                ></a>
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

import React, { useState, useEffect } from "react";
import search from "../../images/brand.svg";
import Image from "next/image";
import category from "../../images/category.svg";
import expand from "../../images/expand.svg";
import Pricehistory from "./pricehistory";
import "tailwindcss/tailwind.css";
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
import Animatepulse from "@/components/animatepulse";

const Results = ({
  storesData,
  allstores,
  selectedFilters,
  selectedstores,
  isfetching,
  page,
  totalitems,
}) => {
  const [sortOption, setSortOption] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedstore, setSelectedStore] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [secondaryFilterData, setSecondaryFilterData] = useState({})
 



  const secondaryfilter = () => {
    const { onSale, storefilter } = secondaryFilterData;
  
    let filteredData = [...storesData];
  
    if (onSale) {
      // Filter data for onSale
      filteredData = filteredData.filter((product) =>
        product.inv.some((invItem) => invItem.on_sale)
      );
    }
  
    if (storefilter) {
      // Filter data for selected store
      filteredData = filteredData.filter((product) =>
        product.inv.some((invItem) => invItem.store_id === storefilter.bb_id)
      );
    }
  
    // Update the filtered data
    setFilteredData(filteredData);
  };
  

  const handleSecondaryFilter = (store) => {
    setSecondaryFilterData((prevData) => ({
      ...prevData,
      storefilter: store,
    }));
    secondaryfilter(); // Call the secondaryfilter function
  };
  
  const handleOnSaleChange = (event) => {
    const { checked } = event.target;
    setSecondaryFilterData((prevData) => ({
      ...prevData,
      onSale: checked,
    }));
    secondaryfilter(); // Call the secondaryfilter function
  };
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
    console.log("search complete");
  };

  const filterProducts = (filterData) => {
    const { selectedCategory, selectedSize, range, brandSearch } =
      filterData;

    const filtered = storesData.filter((product) => {
      let isMatch = true;

      if (selectedCategory?.length > 0) {
        const categories = selectedCategory.map((category) =>
          category.toLowerCase()
        );
        if (!categories.includes(product.Category.toLowerCase())) {
          isMatch = false;
        }
      }

   


      if (brandSearch?.length > 0) {
        const brands = brandSearch.map((brand) => brand.toLowerCase());
        if (!brands.includes(product.Brand.toLowerCase())) {
          isMatch = false;
        }
      }

      if (selectedSize?.length > 0) {
        const productSizes = product.size || []; // Ensure productSizes is an array
        if (
          !Array.isArray(productSizes) ||
          !productSizes.some((size) => selectedSize.includes(size))
        ) {
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
    console.log(storesData);
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

  const isWithin24Hours = (createdAt) => {
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const currentTime = new Date().getTime();
    const createdTime = new Date(createdAt).getTime();

    return currentTime - createdTime <= twentyFourHours;
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  
    if (value === "") {
      // If the search input is empty, reset the filtered data
      setFilteredData(storesData);
    } else {
      // Otherwise, perform the search
      keywordsearch(value);
    }
  };
  
  const handleStoreChange = (selectedstore) => {
    setSelectedStore(selectedstore);
  };

  return (
    <div className="flex flex-col  m-2 w-full p-4 h-full">
      {showHistory && selectedProduct && (
        <div className=" flex m-auto top-0 w-full h-full overflow-scroll items-center left-0 z-[10000] scrollbar-hide p-8 right-0 fixed overflow-y-scroll bg-[#00000041]">
          <Pricehistory
            priceData={selectedProduct}
            stores={allstores}
            handleclose={() => setShowHistory(false)}
            onClose={() => setShowHistory(false)}
            selectedStore={selectedstore}
          />
        </div>
      )}


      <div className="flex flex-col sm:flex-row w-full px-8 gap-4 justify-between p-4 m-auto">
        <div className="flex md:mb-0 mb-4 items-center justify-center ">
          <h2 className="text-[1.4em] font-bold">Results</h2>
          <p className="h-10 min-w-[2em] ml-3 flex items-center text-[1.4em] justify-center text-center border shadow-lg rounded-lg">
            {isfetching ? (
              <div className="flex justify-center items-center h-16">
                <Dots size={20} color="#7F56D9" />
              </div>
            ) : (
              totalitems
            )}
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 justify-between items-center w-full">
          <div className="flex md:flex-grow-0 flex-grow justify-center items-center align-middle m-auto border md:mb-0 mb-3 md:mr-3 md:items-center bg-white p-0 rounded-lg">
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
          <div className="flex flex-wrap-reverse justify-center  items-center space-x-1 ">
          <input
      type="checkbox"
      id="checkbox"
      // checked
      checked={secondaryFilterData.onSale}
      onChange={handleOnSaleChange}
    />
    <label htmlFor="checkbox" className="flex-wrap">On Sale</label>
            <div className="relative">
              <Image
                src={category}
                alt="category"
                className="absolute w-5 h-5 left-2 top-1/2  -translate-y-1/2"
              />
              <select
                name="az-selection"
                id="az-selection"
                className="pl-10 pr-8 py-3 bg-white border rounded-lg"
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



      <div className="flex w-full">
        <div className="overflow-scroll scrollbar-thin scrollbar-thumb-[#7F56D9] w-full scrollbar-track-gray-100 h-[80vh]">
          {selectedstores.length > 0 ? (
            <div className="flex gap-8 sticky m-0 right-0 shadow-md top-0 rounded-xl items-center min-w-full w-fit bg-[#ffff] ">
              <div className="w-[18em] bg-[#ECF0F1] ml-1   rounded-tl-[5px] rounded-tr-[5px] p-2 ">
                <h1 className="ml-4 text-[1.3em]">Product</h1>
              </div>

              {Array.isArray(selectedstores) &&
                selectedstores.map((selectedStore) => (
                  <div
                    key={selectedStore.bb_id}
                    className="w-[15em] top-0 flex border-r bg-white m-2 flex-col rounded-tl-[2em] rounded-tr-[5px] py-[0.5em] pl-[1em] "
                  >
                    <h1>{selectedStore.name}</h1>
                  </div>
                ))}
            </div>
          ) : (
            ""
          )}

          {filteredData.length > 0 ? (
            filteredData.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex border-b gap-8 scroll:animate-pulse  duration-[1000ms] taos:opacity-0 w-full m-auto items-center"
                >
                  <div className="w-[18em] px-3 mt-6 gap-4">
                    <div className="text-[1em] gap-6 flex flex-col">
                      <p className="pb-[2%] text-[1em] leading-5">{product.Name}</p>
                      <p className="pb-[2%] text-[1em]">
                        <span className="font-bold text-[1em]">Producer: </span>
                        {product.lowercase_brand}
                      </p>
                    </div>
                    <div className="flex justify-between w-[85%] ">
                      <p>
                        <span className="font-bold text-[1em]">Category: </span>
                        {product.Category}
                      </p>
                      <p>
                        <span className="font-bold text-[1em]">Size: </span>
                        {product.size || 0}
                        {product.size_unit}
                      </p>
                    </div>
                  </div>
                  {Array.isArray(selectedstores) &&
                    selectedstores.map((selectedStore) => (
                      <div key={selectedStore.id} className="w-[15em] ">
                        {product.inv[0].store_id == selectedStore.bb_id ? (
                          <div className="flex w-full gap-4 flex-col m-auto ">
                            <div className="p-3 gap-3">
                              <div className="w-full justify-between align-middle items-center flex">
                                <span
                                  className={`w-2 rounded-full h-2 block ${
                                    isWithin24Hours(product.inv[0].created_at)
                                      ? "bg-green-500"
                                      : "bg-orange-400"
                                  }`}
                                ></span>
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
                                className="hover:bg-[#ECF0F1] w-full justify-between flex flex-col p-[0.5em]"
                                onClick={() => {
                                  handleSelectProduct(product);
                                  handleToggleHistory();
                                  handleStoreChange(selectedStore);
                                }}
                              >
                                <p
                                  className={`w-2 rounded-full flex h-2 gap-4 ${
                                    parseFloat(product.inv[0].promo_price) >
                                      0 &&
                                    parseFloat(product.inv[0].promo_price) !==
                                      parseFloat(product.inv[0].price)
                                      ? "line-through text-red-600"
                                      : ""
                                  }`}
                                >
                                  {parseFloat(product.inv[0].promo_price) > 0 &&
                                  parseFloat(product.inv[0].promo_price) !==
                                    parseFloat(product.inv[0].price) ? (
                                    <>
                                      <span className="line-through">
                                        {product.inv[0].price}$
                                      </span>
                                      <span className="no-underline text-black">
                                        {product.inv[0].promo_price}$
                                      </span>
                                    </>
                                  ) : (
                                    <span className="no-underline text-black">
                                      {product.inv[0].price}$
                                    </span>
                                  )}
                                </p>

                                <p className="mt-8">
                                  {product.inv[0].raw_stock ?? 0} in stock
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex w-full flex-col m-3 min-w-[12em]">
                            <div className="p-3">
                              <div className="w-full justify-between align-middle items-center flex">
                                <span className="w-2 rounded-full h-2 block bg-red-600"></span>
                                <a
                                  // href={product.inv[0].url}
                                  className="items-end text-right"
                                ></a>
                              </div>
                              <div className="hover:bg-[#ECF0F1] w-full justify-between flex flex-col p-[0.5em]">
                                <p className="mb-4"></p>
                                <p className="mt-8"></p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              );
            })
          ) : (
            <div className="flex text-red text-xl text-center justify-center m-auto">
              {selectedstores.length > 0 ? (
                isfetching ? (
                  <Animatepulse />
                ) : (
                  "No store data available. Please try different stores or clear filters"
                )
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;

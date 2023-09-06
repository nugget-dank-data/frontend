import React, { useState, useEffect } from "react";
import axios from "axios";

const Compsetprop = ({ closeFunction, selectcompset, setdata }) => {
  const [selectedCompset, setSelectedCompset] = useState(0);
  const [compsets, setCompsets] = useState([]);

  useEffect(() => {
    // Fetch compsets when the component mounts
    fetchCompsets();
  }, []);

  const handleCompsetChange = (e) => {
    console.log(e.target.value);
    setSelectedCompset(Number(e.target.value));
  };

  const fetchCompsets = async () => {
    const endpoint =
      "http://35.229.42.75:420/users/organization-compset?organization_id=1";
    
    try {
      const response = await axios.get(endpoint);
      const compsetsData = response.data;
      setCompsets(compsetsData); // Store the fetched compsets in state
    } catch (error) {
      console.error("Error fetching compsets:", error);
    }
  };

  const handleSubmit = async () => {
    closeFunction();

    const apiUrl = `http://35.229.42.75:420/scraper/feapi-compset-inventory?organization_compset_id=${selectedCompset}`;

    try {
      const response = await axios.get(apiUrl);
      // const compsetData = response;
      setdata(response.data);
      console.log('compsetdata::::::',response.data)
      closeFunction();
    } catch (error) {
      console.error("Error fetching compsets:", error);
    }
  };

  return (
    <div className="flex w-full items-center justify-center h-screen left-0 right-0 top-0 z-50 bg-[#bbbabaeb] fixed">
      <div className="rounded-xl bg-[#ffff] relative  flex flex-col p-4 w-[35%] ">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={closeFunction}
        >
          {/* Your close button SVG code */}
        </button>

        <h2 className="font-bold text-[1.4em] text-center p-4">
          Select a Comp-set
        </h2>
        <div className="flex flex-col justify-center items-center m-4 ">
          <div className="relative w-full">
            <p className="z-50 absolute top-0 text-[#8f8d8d] ml-4 left-2">
              comp-set
            </p>
            <select
              name="compset"
              id="compset"
              value={selectedCompset}
              onChange={handleCompsetChange}
              className="w-full py-4 pt-8 bg-transparent border focus:outline-none px-4 text-[1.2em] rounded-xl mb-11"
            >
              {/* Map compsets dynamically */}
              {compsets.map((compset) => (
                <option key={compset.id} value={compset.id}>
                  {compset.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#7F56D9] text-white w-full rounded-xl p-4 m-auto"
          >
            Select comp-set
          </button>

          <p className="text-[#7F56D9] cursor-pointer mt-4" onClick={closeFunction}>
            cancel
          </p>
        </div>
      </div>
    </div>
  );
};

export default Compsetprop;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import storesblue from "../../../images/storesblue.svg";
import { FaPencilAlt, FaAngleUp, FaAngleDown } from "react-icons/fa";
import plus from "../../../images/pluswhite.svg";
import AddStore from "./addstore";

const Compsets = ({ compsets, update, handledelete, handleEditCompset }) => {
  const [expandedCompsets, setExpandedCompsets] = useState([]);
  const [dropped, setDropped] = useState(false);
  const [showAddStore, setShowAddStore] = useState(false);
  const [compsetstore, setCompsetsstore] = useState([]);
  const [compsetid, setCompsetid] = useState(0);

  useEffect(() => {
    // Fetch compset stores for each compset
    fetchUserCompsetsStores();
  }, []); // Call this once when the component mounts

  const handleToggleDropdown = (index) => {
    const isExpanded = expandedCompsets.includes(index);
    setDropped(!dropped);
    if (isExpanded) {
      setExpandedCompsets(expandedCompsets.filter((item) => item !== index));
    } else {
      setExpandedCompsets([...expandedCompsets, index]);
    }
  };

  const endpoint = "http://34.75.96.129:420/users/organization-compset-store/";

  const fetchUserCompsetsStores = async () => {
    try {
      const token = localStorage.getItem("login_key");
      const headers = {
        Authorization: `Token ${token}`,
      };

      const compsetStoresPromises = compsets.map(async (compset) => {
        const compset_id = compset.id;
        const response = await axios.get(endpoint, {
          headers: headers,
          params: {
            compset_id: compset_id,
          },
        });
        return {
          compset_id: compset_id,
          stores: response.data,
        };
      });

      // Wait for all the API requests to finish
      const compsetStoresData = await Promise.all(compsetStoresPromises);

      // Update the compsetstore state with the fetched data
      setCompsetsstore(compsetStoresData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddStore = (id) => {
    setShowAddStore(!showAddStore);
    setCompsetid(id);
  };

  return (
    <div className=" bg--400 justify-center items-center flex flex-col">
      {showAddStore && <AddStore handleclose={handleAddStore} compsetid={compsetid} />}
      <div className="container sm:m-auto sm:w-full w-full">
        {compsets.map((compset, index) => (
          <div key={compset.id} className="compset-item border w-[94%] mb-3 rounded-lg m-auto p-4 flex flex-col">
            <div className="compsores flex  lg:justify-around sm:gap-4 items-start ">
              <div className="rounded-lg flex bg-[#b7a4ce4f] p-2 cursor-pointer">
                <Image src={storesblue} alt="nn" />
                <p className="ml-2 text-[0.9em]">{compset.stores ? compset.stores.length : 0} competitive stores</p>
              </div>
              <div className="rounded-lg flex bg-[#b7a4ce4f] p-2 cursor-pointer">
                <p>Org-wide</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mt-3">
              <div className="flex items-center w-full gap-3 relative p-4">
                <Image src={storesblue} alt="nn" />
                <p className="font-bold text-[1.3em]">{compset.name}</p>
                <div className="hover:opacity-100 absolute w-full opacity-0 transition-opacity duration-200">
                  <button onClick={() => handleEditCompset(index)} className="p-2 ml-[7em]">
                    <FaPencilAlt style={{ color: '#7F56D9' }} size={'1.3em'} />
                  </button>
                </div>
              </div>

              {expandedCompsets.includes(index) && (
                <div className="flex flex-col sm:flex-row sm:justify-between mt-3 w-full  md:mr-[5%]">
                  <button
                    onClick={() => handleAddStore(compset.id)}
                    className="flex items-center rounded-lg text-center px-2 text-[0.9em] w-[7em] bg-[#7F56D9] text-white mb-2 md:mb-0 sm:py-2"
                  >
                    <Image src={plus} alt="icon" className="w-6" />
                    Add New Store
                  </button>
                  <button className="flex items-center w-[5em] p-2 sm:py-0 rounded-lg text-center bg-[#f2c2c23f] text-[#ff0000bb]">
                    Remove
                  </button>
                </div>
              )}
              <button onClick={() => handleToggleDropdown(index)} className="relative">
                <div className="">
                  {expandedCompsets.includes(index) ? (
                    <FaAngleUp style={{}} />
                  ) : (
                    <FaAngleDown style={{ fontWeight: '12px' }} size={'1.2em'} />
                  )}
                </div>
              </button>
            </div>
            <div className="flex-col flex text-[#545454] px-4 mb-4">
              <p className="">{compset.description}</p>
              <p className="">{compset.address}</p>
            </div>

            {expandedCompsets.includes(index) && (
              <div>
                {compset.stores.map((store, storeIndex) => (
                  <div key={storeIndex} className="store-item border w-[94%] mb-3 rounded-lg m-auto p-4 flex flex-col">
                    <div className="flex flex-col ">
                      <p>{store.name}</p>
                      <button className="flex items-center w-[5em] p-2 rounded-lg text-center bg-[#f2c2c23f] text-[#ff0000bb]">
                    Remove
                  </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compsets;

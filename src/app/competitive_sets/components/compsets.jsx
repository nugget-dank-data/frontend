import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import storesblue from "../../../images/storesblue.svg";
import { FaPencilAlt, FaAngleUp, FaAngleDown } from "react-icons/fa";
import plus from "../../../images/pluswhite.svg";
import AddStore from "./addstore";
import EditCompset from "./editcompset";


const Compsets = ({ compsets, update, handledelete, handleEditCompset }) => {
  const [expandedCompsets, setExpandedCompsets] = useState([]);
  const [dropped, setDropped] = useState(false);
  const [showAddStore, setShowAddStore] = useState(false);
  const [compsetstore, setCompsetsstore] = useState([]);
  const [compsetid, setCompsetid] = useState(0);
  const [showeditcompset, setShoweditcompset] = useState(false)

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

  const endpoint = "http://35.229.42.75:420/users/organization-compset-store/";

  const fetchUserCompsetsStores = async () => {
    try {
      const token = sessionStorage.getItem("login_key");
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

  const handleshoweditcompset = () =>{
    setShoweditcompset(!showeditcompset)
  }

  return (
    <div className=" bg--400 justify-center items-center flex flex-col">
      {showAddStore && <div className="transition-opacity" > <AddStore handleclose={handleAddStore} compsetid={compsetid} /> </div>}
      
      <div className="container sm:m-auto sm:w-full w-full">
        {compsets.map((compset, index) => (
          <div key={compset.id} className="compset-item border w-[94%] mb-3 rounded-lg m-auto p-4 flex flex-col">
            <div className="compsores flex sm:gap-4 items-start ">
              <div className="rounded-lg flex bg-[#b7a4ce4f] p-2 cursor-pointer">
                <Image src={storesblue} alt="nn" />
                <p className="ml-2 text-[0.9em]">{compset.stores ? compset.stores.length : 0} competitive stores</p>
              </div>
              <div className="rounded-lg flex bg-[#b7a4ce4f] p-2 cursor-pointer">
                <p>Org-wide</p>
              </div>
            </div>

            <div className="flex  md:flex-row md:items-center justify-between mt-3">
              <div className="flex items-center w-full gap-3 relative p-4">
                <Image src={storesblue} alt="nn" />
                <p className="font-bold text-[1.3em]">{compset.name}</p>
                <div className="hover:opacity-100 absolute w-full opacity-0 transition-opacity duration-200">
                  <button onClick={handleshoweditcompset} className="p-2 ml-[7em]">
                    <FaPencilAlt style={{ color: '#7F56D9' }} size={'1.3em'} />
                    {showeditcompset && <EditCompset handleclose={handleshoweditcompset} compset={compset} />}
                  </button>
                </div>
              </div>

              {expandedCompsets.includes(index) && (
                <div className="flex flex-col sm:flex-row justify-end mt-3 w-full gap-3  md:mr-[5%]">
                  <div>
                  <button
                    onClick={() => handleAddStore(compset.id)}
                    className="flex items-center rounded-lg pr-2 text-center float-right text-[0.9em] py-1 bg-[#7F56D9] text-white mb-2 md:mb-0 sm:py-2"
                  >
                    <Image src={plus} alt="icon" className="w-6" />
                    Add New Store
                  </button>
                  </div>

                  <div>
                  <button className="flex items-center py-2 px-3 rounded-lg text-center bg-[#f2c2c23f] text-[#ff0000bb]">
                    Remove
                  </button>
                  </div>
                </div>
              )}


              <button onClick={() => handleToggleDropdown(index)} className="relative">
                <div className="">
                  {expandedCompsets.includes(index) ? (
                    <FaAngleUp style={{ fontWeight: '12px' }} size={'1.2em'} />
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

import React, { useState } from 'react';
import Image from 'next/image';
import storesblue from '../../../images/storesblue.svg';
import { FaPencilAlt, FaAngleUp, FaAngleDown } from 'react-icons/fa';
import plus from '../../../images/pluswhite.svg';
import AddStore from './addstore';

const Compsets = ({ compsets, update, handledelete, handleEditCompset }) => {
  const [expandedCompsets, setExpandedCompsets] = useState([]);
  const [dropped, setDropped] = useState(false);
  const [showAddStore, setShowAddStore] = useState(false);

  const handleToggleDropdown = (index) => {
    const isExpanded = expandedCompsets.includes(index);
    setDropped(!dropped);
    if (isExpanded) {
      setExpandedCompsets(expandedCompsets.filter((item) => item !== index));
    } else {
      setExpandedCompsets([...expandedCompsets, index]);
    }
  };

  const handleAddStore = () => {
    setShowAddStore(!showAddStore);
  };

  return (
    <div>
      {showAddStore && <AddStore handleClose={handleAddStore} />}
      <div className="container">
        {compsets.map((compset, index) => (
          <div key={compset.id} className="compset-item border w-[94%] mb-3 rounded-lg m-auto p-4 flex flex-col">
            <div className="compsores flex w-1/2 justify-around items-start">
              <div className="rounded-lg flex bg-[#b7a4ce4f] p-2">
                <Image src={storesblue} alt="nn" />
                <p className="ml-2 text-[0.9em]">{compset.stores ? compset.stores.length : 0} competitive stores</p>
              </div>
              <div className="rounded-lg flex bg-[#b7a4ce4f] p-2">
                <p>Org-wide</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center w-full gap-3 relative p-4">
                <Image src={storesblue} alt="nn" />
                <p className="font-bold text-[1.3em]">{compset.name}</p>
                {expandedCompsets.includes(index) && (
                  <div className="hover:opacity-100 absolute opacity-0 transition-opacity duration-200">
                    <button onClick={() => handleEditCompset(index)} className="p-2">
                      <FaPencilAlt style={{ color: '#3b0e71e7' }} size={'1.3em'} />
                    </button>
                  </div>
                )}
              </div>

                    {expandedCompsets.includes(index) && (
                      <div className="flex justify-between mt-3 w-[30%] mr-[5%]">
                        <button
                          onClick={handleAddStore}
                          className="flex items-center p-2 rounded-lg text-center bg-[#2804ac] text-white"
                        >
                          <Image src={plus} alt="icon" className="w-8" />
                          Add New Store
                        </button>
                        <button className="flex items-center p-2 rounded-lg text-center bg-[#8f1a1a3f] text-[#ff0000bb]">
                          Remove
                        </button>
                      </div>
                    )}
              <button onClick={() => handleToggleDropdown(index)} className="relative">
                <div className="">
                  {expandedCompsets.includes(index) ? (
                    <FaAngleUp style={{  }} />
                  ) : (
                    <FaAngleDown style={{ fontWeight: '12px' }} size={'1.2em'} />
                  )}
                </div>
              </button>
            </div>


            {expandedCompsets.includes(index) && (
              <div>
                {compset.stores.map((store, storeIndex) => (
                  <div key={storeIndex} className="store-item border w-[94%] mb-3 rounded-lg m-auto p-4 flex flex-col">
                    <div className="flex items-center">
                      <p>{store.name}</p>
                      <button onClick={() => handleEditCompset(storeIndex)}>
                        <FaPencilAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button onClick={() => handleDeleteCompset(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compsets;

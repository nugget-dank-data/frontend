"use client";
import React, { useState, useEffect } from "react";
import Newcompset from "./newcompset";
import Image from "next/image";
import storesblue from '../../images/storesblue.svg'
import plus from '../../images/pluswhite.svg'

const Competitivesets = () => {
  const [compsets, setCompsets] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [compsetName, setCompsetName] = useState("");
  const [showAddNew, setShowAddNew] = useState(false);

  useEffect(() => {
    // Fetch user's compsets from the API endpoint
    fetchUserCompsets();
  }, []);

  const fetchUserCompsets = () => {
    // Fetch compsets from the API endpoint
    const dummyCompsets = [
      { id: 1, name: "Compset 1" },
      { id: 2, name: "Compset 2" },
      { id: 3, name: "Compset 3" },
    ];
    setCompsets(dummyCompsets);
  };

  const handleAddNew = () => {
    setShowAddNew(!showAddNew);
  };

  const handleAddCompset = () => {
    const newCompset = { id: compsets.length + 1, name: compsetName };
    setCompsets([...compsets, newCompset]);
    setCompsetName("");
    setShowAddNew(false);
  };

  const handleEditCompset = (index) => {
    setEditingIndex(index);
  };

  const handleUpdateCompset = (index, updatedCompset) => {
    const updatedCompsets = [...compsets];
    updatedCompsets[index] = updatedCompset;
    setCompsets(updatedCompsets);
    setEditingIndex(-1);
  };

  const handleDeleteCompset = (index) => {
    const updatedCompsets = compsets.filter((_, i) => i !== index);
    setCompsets(updatedCompsets);
  };

  return (
    <div>
      <div className="crud">
        {showAddNew && (
          <Newcompset
            handleAddCompset={handleAddCompset}
            setCompsetName={setCompsetName}
          />
        )}
        <div>
          <div className="w-full flex justify-between p-6">
            <div className="comp flex justify-between ">
              <h1 className="text-[1.5em] ">Your Competitive Sets</h1>
              <p className="h-10 min-w-[2em] ml-3 flex items-center text-[1.4em] justify-center text-center border  rounded-lg">
                {compsets.length || 0}
              </p>
              <button className="flex ml-3 text-white items-center p-2 rounded-lg text-center bg-[#2804ac]">Download All</button>
            </div>
            <button onClick={handleAddNew} className="flex ml-3 text-white items-center p-2 rounded-lg text-center bg-[#2804ac]">
              <Image src={plus} alt="icon" className="w-8" /> 
              Create New Compset</button>
          </div>
          <div className="container">
          <div className="compset-item">
            <div className="compsores flex w-1/2 justify-between">
              <div className="rounded-lg flex bg-[#686767dd] p-2">
                <Image src={storesblue} alt="nn" />
                <p>Number of Competitive stores</p>
              </div>
              <div className="rounded-lg flex bg-[#686767dd] p-2">
                <p>Org-wide</p>
              </div>
            </div>
            {compsets.map((compset, index) => (
              <div key={compset.id} className="compset-item">
                <p>{compset.name}</p>
                <button onClick={() => handleEditCompset(index)}>Edit</button>
                <button onClick={() => handleDeleteCompset(index)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitivesets;

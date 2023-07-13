"use client";
import React, { useState, useEffect } from "react";
import Newcompset from "./components/newcompset";
import Image from "next/image";
import storesblue from "../../images/storesblue.svg";
import plus from "../../images/pluswhite.svg";
import axios from "axios";

const Competitivesets = () => {
  const [compsets, setCompsets] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [compsetName, setCompsetName] = useState("");
  const [showAddNew, setShowAddNew] = useState(false);

  const url = "http://34.75.96.129:420/users/organization-compset-store/";


  useEffect(() => {
    fetchUserCompsets();
  }, []);

  const fetchUserCompsets = async () => {
    try {
      const token = localStorage.getItem("login_key");
      const headers = {
        Authorization: `Token ${token}`,
      };

      const response = await axios.get(url, { headers }, 2);
      setCompsets(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddNew = () => {
    setShowAddNew(!showAddNew);
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

  const handleDeleteCompset = async (index) => {
    try {
      const token = localStorage.getItem("login_key");
      const headers = {
        Authorization: `Token ${token}`,
      };

      const compsetId = compsets[index].id;

      await axios.delete(`${url}${compsetId}/`, { headers });

      const updatedCompsets = compsets.filter((_, i) => i !== index);
      setCompsets(updatedCompsets);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className="min-h-screen">
      {showAddNew && (
        <Newcompset
          handleclose={handleAddNew}
          className="animate-slide-down transition-opacity ease-in duration-700"
        />
      )}
      <div className="crud">
        <div>
          <div className="w-full flex justify-between p-6">
            <div className="comp flex justify-between">
              <h1 className="text-[1.5em]">Your Competitive Sets</h1>
              <p className="h-10 min-w-[2em] ml-3 flex items-center text-[1.4em] justify-center text-center border rounded-lg">
                {compsets.length || 0}
              </p>
              <button className="flex ml-3 text-white items-center p-2 rounded-lg text-center bg-[#2804ac]">
                Download All
              </button>
            </div>

            <button
              onClick={handleAddNew}
              className="flex ml-3 text-white items-center p-2 rounded-lg text-center bg-[#2804ac]"
            >
              <Image src={plus} alt="icon" className="w-8" />
              Create New Compset
            </button>
          </div>
          <div className="container">
            {compsets.map((compset, index) => (
              <div
                key={compset.id}
                className="compset-item border p-4 flex flex-col"
              >
                <div className="compsores flex w-1/2 justify-around items-start">
                  <div className="rounded-lg flex bg-[#a49d9d43] p-2">
                    <Image src={storesblue} alt="nn" />
                    <p className="ml-2 text-[0.9em]">
                      Number of Competitive stores
                    </p>
                  </div>
                  <div className="rounded-lg flex bg-[#a49d9d43] p-2">
                    <p>Org-wide</p>
                  </div>
                </div>

                <div className="flex">
                  <Image src={storesblue} alt="nn" />
                  <p>{compset.name}</p>
                </div>
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
  );
};

export default Competitivesets;

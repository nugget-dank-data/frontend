"use client";
import React, { useState, useEffect } from "react";
import Newcompset from "./components/newcompset";
import Image from "next/image";

import plus from "../../images/pluswhite.svg";
import axios from "axios";
import Compsets from "./components/compsets";

const Competitivesets = () => {
  const [compsets, setCompsets] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [compsetName, setCompsetName] = useState("");
  const [showAddNew, setShowAddNew] = useState(false);

  const url = "https://64a301f3b45881cc0ae5ff1e.mockapi.io/compsets";


  useEffect(() => {
    fetchUserCompsets();
  }, []);

  const fetchUserCompsets = async () => {
    try {
      const token = localStorage.getItem("login_key");
      // const headers = {
      //   Authorization: `Token ${token}`,
      // };

      const response = await axios.get(url);
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

  const handleUpdateCompset = async (index, updatedCompset) => {
    try {
      const compsetId = compsets[index].id;
      const response = await axios.put(`${url}${compsetId}/`, updatedCompset);
      const updatedCompsets = [...compsets];
      updatedCompsets[index] = response.data;
      setCompsets(updatedCompsets);
      setEditingIndex(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCompset = async (index) => {
    try {
      const compsetId = compsets[index].id;
      await axios.delete(`${url}${compsetId}/`);
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
        
        <Compsets compsets={compsets} update={handleUpdateCompset} delete={handleDeleteCompset} handleEditCompset={handleEditCompset} />
        </div>
      </div>
    </div>
  );
};

export default Competitivesets;

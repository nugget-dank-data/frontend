"use client";
import React, { useState, useEffect } from "react";
import Newcompset from "./components/newcompset";
import Image from "next/image";
import '../globals.css'
import Download from "./components/downloadall";
import plus from "../../images/pluswhite.svg";
import axios from "axios";
import Compsets from "./components/compsets";

const Competitivesets = () => {
  const [compsets, setCompsets] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [compsetName, setCompsetName] = useState("");
  const [showAddNew, setShowAddNew] = useState(false);
  const [showdownload, setShowdownload] =useState(false)
  const [activeTab, setActiveTab] = useState('');
  const [settingstab, setSettingstab] = useState('manage_team');
  const [menustate, setMenustate] = useState(true);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [issettingsPage, setIsSettingsPage] = useState(false);
  const [is404Route, setIs404Route] = useState(false);


  useEffect(() => {
    async function checkIf404Route() {
      const response = await fetch(window.location.href);

      if (response.status === 404) {
        setIs404Route(true);
      }
    }

    checkIf404Route();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenustate(true); 
      } else {
        setMenustate(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount
  }, []);

  useEffect(() => {
    const pathName = window.location.pathname;
    const tabName = pathName.substring(1);
    setActiveTab(tabName);

    setIsLoginPage(
      pathName.includes('/accounts') ||
        pathName.includes('/verify-email/') ||
        pathName.includes('/settings') ||
        pathName.includes('/admin') ||
        pathName.includes('/privacy_policy') ||
        pathName.includes('/terms_of_use')
    );

    setIsSettingsPage(
      pathName.includes('/accounts') ||
        pathName.includes('/verify-email/') ||
        pathName.includes('/admin')
    );
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSettingsTabChange = (tabName) => {
    setSettingstab(tabName);
  };

  const setMenu = () => {
    setMenustate(!menustate);
  };

  const url = "https://64a301f3b45881cc0ae5ff1e.mockapi.io/compsets";
  const endpoint = 'https://prod.nuggetdata.net/users/organization-compset-store/';


  useEffect(() => {
    fetchUserCompsets();
  }, []);
  useEffect(() => {

    const token = sessionStorage.getItem("login_key");
    
    const isUserInSession = !!token;
    console.log('userinsession',isUserInSession)
    
    if ( !isUserInSession) {
      
      
      window.location.href = '/accounts/login';
  console.log('reload Test fAILED')
    }
    }, [])
const fetchUserCompsets = async () => {
  try {
    const token = sessionStorage.getItem("login_key");
    // const headers = {
    //   Authorization: `Token ${token}`,
    // };

    // const compset_id = 1;

    const response = await axios.get(url, {
      // headers: headers,
      // params: {
      //   compset_id: compset_id,
      // },
    });
    setCompsets(response.data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};


const handleshowdownload =() =>{
  setShowdownload(!showdownload)
}

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

      {showdownload && <Download handleclose={handleshowdownload} compsetlength={compsets.length} />}
      <div className="crud">
        <div>
          <div className="w-full flex justify-between p-6">
            <div className="comp flex justify-between">
              <h1 className="text-[1.5em]">Your Competitive Sets</h1>
              <p className="h-10 min-w-[2em] ml-3 flex items-center text-[1.4em] justify-center text-center border rounded-lg">
                {compsets.length || 0}
              </p>
              <button className="flex ml-3 text-white items-center p-2 rounded-lg text-center bg-[#7F56D9]" onClick={handleshowdownload}>
                Download All
              </button>
            </div>

            <button
              onClick={handleAddNew}
              className="flex ml-3 text-white items-center p-2 rounded-lg text-center bg-[#7F56D9]"
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

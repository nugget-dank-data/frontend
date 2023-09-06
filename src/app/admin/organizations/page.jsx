"use client";
import React, {useState, useEffect} from "react";
import AdminSidepane from "../components/sidepane";
import AdminNavbar from "../components/navbar";
import Organizations from "./components/organizations";
import { BrowserRouter } from "react-router-dom";


const Adminorganizations = () => {
  const [activeTab, setActiveTab] = useState('');
  const [activeSubTab, setActiveSubTab] = useState('');

  

  useEffect(() => {

    const token = sessionStorage.getItem("login_key");
    
    const isUserInSession = !!token;
    console.log('userinsession',isUserInSession)
    
    if ( !isUserInSession) {
      
      
      window.location.href = '/accounts/login';
  console.log('reload Test fAILED')
    }
    }, [])
  useEffect(() => {
    const storedActiveTab = localStorage.getItem('activeTab');
    if (storedActiveTab) {
      setActiveTab(storedActiveTab);
    }
  }, []);

  const handleTabClick = (tabName) => {
    if (activeTab === tabName) {
      setActiveTab('');
      localStorage.removeItem('activeTab');
    } else {
      setActiveTab(tabName);
      localStorage.setItem('activeTab', tabName);
    }
  };

    
    



  return (
    <div className="w-full h-full p-0 overflow-hidden relative">
      <div className="flex flex-col sm:flex-row relative m-auto">
        
          <div className="flex absolute md:relative sm:w-1/3 md:1/4">
          <AdminSidepane
            activeTab={activeTab}
            activeSubTab={activeSubTab}
            handleTabClick={handleTabClick}
          />
          </div>
        

        <div className="w-full flex flex-col ">
          {/* <div className=" w-full">
            <BrowserRouter>
              <AdminNavbar />
            </BrowserRouter>
          </div> */}
          <div className="w-full flex flex-col relative ">
            <Organizations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminorganizations;

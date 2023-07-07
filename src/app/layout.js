"use client"
import Sidepane from "@/components/Sidepane";
import './globals.css';

import { useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import Settings from "./settings/page";
import Teams from "./settings/components/teams";



export default function RootLayout({ children }) {
  const [activeTab, setActiveTab] = useState('');
  const [settingstab, setSettingstab] = useState('manage_team');
  const [manageteam, setmanageteam] = useState(false)
  const [accounts, setaccounts] = useState(false)
  const [billing, setbilling] = useState(false)

  console.log('test tab',settingstab)
  const tabname = localStorage.getItem('settingstab')
  console.log('',tabname);

  const handleTabClick = (tabName) => {
    if (activeTab === tabName) {
      setActiveTab('');
    } else {
      setActiveTab(tabName);
    }

    
    
  };
 
  
  const handleSettingsTabChange = (tabName) => {
    setSettingstab(tabName);
    console.log('test tab',settingstab)
  };

  const settab = (tabName) => {
    setSettingstab(tabName);
    console.log('called',tabName)
  };
useEffect(()=>{
  setSettingstab(settingstab)
  console.log('test tab',settingstab)
})
  
  useEffect(() => {
    const pathName = window.location.pathname;
    // Extract the active tab from the URL path
    const tabName = pathName.substring(1); 

    setActiveTab(tabName);
    
  }, []);


  const getTeamsHandler = () =>{
    setSettingstab(settingstab);


  }
  const getaccHandler = () =>{

    setSettingstab(settingstab);
  

  }
  const getbillHandler = () =>{

 
    setSettingstab(settingstab);
  
  }
  
  const isLoginPage = window.location.pathname.includes('/accounts') || window.location.pathname.includes('/verify-email/') || window.location.pathname.includes('/settings') ||window.location.pathname.includes('/admin') ;
  const issettingsPage = window.location.pathname.includes('/accounts') || window.location.pathname.includes('/verify-email/')||window.location.pathname.includes('/admin') ;

  return (
    <html className="">
      <div className="w-full h-full p-0 overflow-hidden relative">
        <div className="flex flex-col sm:flex-row relative m-auto">

          {!issettingsPage && (
            <div className="flex absolute md:relative sm:w-1/3 md:1/4">
              <Sidepane activeTab={activeTab} handleTabClick={handleTabClick} onSettingsTabChange={handleSettingsTabChange} newtabname={settingstab} />
            </div>
          )}

          <div className="w-full flex flex-col ">
            <div className=" w-full">
              {!isLoginPage && (
                <Navbar  getTeams={getTeamsHandler} getAcct={getaccHandler}  getBill={getbillHandler} />
                
              )}
              
            </div>
            <div className="w-full flex flex-col relative ">{children}</div>
          </div>
        </div>
        <div className="w-full bottom-0">
          
        </div>
        



      
      </div>
    </html>
  );
}

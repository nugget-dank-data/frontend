"use client"
import Sidepane from "@/components/Sidepane";
import './globals.css';

import { useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";




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
      <body>
      <div className="w-full h-full p-0 overflow-hidden">
        <div className="flex flex-row  m-auto relative ">

        <div className="flex sticky top-0 lg:w-[30%] z-50">
          {!issettingsPage && (
            <div className="flex lg:fixed lg:w-[23%] ">
              <Sidepane activeTab={activeTab} handleTabClick={handleTabClick} onSettingsTabChange={handleSettingsTabChange} newtabname={settingstab} />
            </div>
          )}
          </div>

          <div className="w-full flex flex-col ">
            <div className=" w-full">
              {!isLoginPage && (
                <Navbar  getTeams={getTeamsHandler} getAcct={getaccHandler}  getBill={getbillHandler} />
                
              )}
              
            </div>
            <div className="w-full flex flex-col">{children}</div>
          </div>
        </div>
        <div className="w-full bottom-0">
          
        </div>
        



      
      </div>
      </body>
    </html>
  );
}
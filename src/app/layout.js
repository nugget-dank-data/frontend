"use client"
import Sidepane from "@/components/Sidepane";
import './globals.css';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [activeTab, setActiveTab] = useState('');
  const [settingstab, setSettingstab] = useState('');

  console.log(settingstab)
  const handleTabClick = (tabName) => {
    if (activeTab === tabName) {
      setActiveTab('');
    } else {
      setActiveTab(tabName);
    }
  };

  const handleSettingsTabChange = (tabName) => {
    setSettingstab(tabName);
  };

  useEffect(() => {
    const pathName = window.location.pathname;
    // Extract the active tab from the URL path
    const tabName = pathName.substring(1); // Assuming the tab name is the path without the leading slash

    setActiveTab(tabName);
  }, []);

  const isLoginPage = window.location.pathname.includes('/accounts') || window.location.pathname.includes('/verify-email/');

  return (
    <html className="">
      <div className="w-full h-full p-0 overflow-hidden relative">
        <div className="flex flex-col sm:flex-row relative m-auto">

          {!isLoginPage && (
            <div className="flex absolute md:relative sm:w-1/3 md:1/4">
              <Sidepane activeTab={activeTab} handleTabClick={handleTabClick} onSettingsTabChange={handleSettingsTabChange} />
            </div>
          )}

          <div className="w-full flex flex-col ">
            <div className=" w-full">
              {!isLoginPage && (
                <Navbar settingstab={settingstab} />
              )}
            </div>
            <div className="w-full flex flex-col relative ">{children}</div>
          </div>
        </div>
        <div className="w-full bottom-0">
          {/* <Footer /> */}
        </div>
      </div>
    </html>
  );
}

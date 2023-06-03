"use client";
import Sidepane from "@/components/Sidepane";
import './globals.css';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tabName) => {
    if (activeTab === tabName) {
      setActiveTab('');
    } else {
      setActiveTab(tabName);
    }
  };

  useEffect(() => {
    const pathName = window.location.pathname;
    // Extract the active tab from the URL path
    const tabName = pathName.substring(1); // Assuming the tab name is the path without the leading slash

    setActiveTab(tabName);
  }, []);

  const isLoginPage = window.location.pathname === '/login';

  return (
    <html lang="en" className="">
      <body className="flex flex-col pb-0">
        <div className="flex flex-row">
        {!isLoginPage && (
          <Sidepane activeTab={activeTab} handleTabClick={handleTabClick} />
        )}
        <div className="w-full">{children}</div>
        </div>
      <div className="w-full bg-slate-700 bottom-0">
      <Footer />
      </div>
      </body>
    </html>
  );
}

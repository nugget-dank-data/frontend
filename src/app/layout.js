"use client";
import Sidepane from '@/components/Sidepane';
import './globals.css';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import compare from './compare/page';

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
    const path = window.location.pathname;
    const tabName = path.split('/')[1];
    setActiveTab(tabName || 'compare');
  }, []);
  

  return (
    <html lang="en" className="">
      <body>
        <div className="flex flex-row">
        <Sidepane activeTab={activeTab} handleTabClick={handleTabClick} />
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}

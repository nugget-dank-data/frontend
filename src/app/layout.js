"use client";
import Sidepane from '@/components/Sidepane';
import './globals.css';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

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
    const queryTab = window.location.search.split('=')[1];
    setActiveTab(queryTab || '');
  }, []);

  return (
    <html lang="en" className="p-1">
      <body>
        <div className="flex flex-row">
          <Sidepane activeTab={activeTab} handleTabClick={handleTabClick} />
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}

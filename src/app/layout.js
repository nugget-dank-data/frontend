"use client"
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

  const isLoginPage = window.location.pathname === '/login';

  return (
    <html lang="en" className="">
      <body className="flex">
        {!isLoginPage && (
          <Sidepane activeTab={activeTab} handleTabClick={handleTabClick} />
        )}
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}

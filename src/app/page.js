"use client"
import React from 'react';
import './globals.css'
import Sidepane from '@/components/Sidepane';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tabName) => {
    if (activeTab === tabName) {
      setActiveTab('');
    } else {
      setActiveTab(tabName);
    }
  };

  return (
      
    <div className="flex">
       
    </div>
      
  );
}

"use client"
import React from 'react';
import Sidepane from '@/components/Sidepane';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './accounts/login/page';
import Compare from './compare/page';
import CompetitiveSets from './competitive_sets/page';
import TermsOfService from './(docs)/terms_of_use/page';
import PrivacyPolicy from './(docs)/privacy_policy/page';
import AdminLogin from './admin/login/page';
import AdminOrganizations from './admin/organizations/page';
import ResetPassword from './settings/reset_password/page';

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

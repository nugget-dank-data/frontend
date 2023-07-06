import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import notification from '../images/notification.svg';
import Link from 'next/link';
import Teams from '@/app/settings/components/teams';
import Accounts from '@/app/settings/components/accounts';
import Billing from '@/app/settings/components/billing';

const Navbar = ({ onSettingsTabChange, getTeams, getAcct, getBill }) => {
  const [settingsTab, setSettingsTab] = useState('manage_team'|| '');

  const [issettings, setissettings] = useState(false);
  const [pageTitle, setPageTitle] = useState('');


  const setTeamsHandler = (data) =>{
    setSettingsTab(data)
    handleSettingsTabClick(data)
    console.log(typeof(onSettingsTabChange))
    getTeams(true);

  }
  const setaccHandler = (data) =>{
    setSettingsTab(data)
    handleSettingsTabClick(data)
    getAcct(true);

  }
  const setbillHandler = (data) =>{
    setSettingsTab(data)
    handleSettingsTabClick(data)
    getBill(true);
  
  }

 


  useEffect(() => {
    setissettings(window.location.pathname === '/settings');
    handleRouteChange(window.location.pathname);
  }, []);

  // useEffect(() => {
  //   handleRouteChange(window.location.pathname);
  // }, [newtabname]);

  const handleRouteChange = (pathname) => {
    const getPageTitle = () => {
      switch (pathname) {
        case '/':
          return '';
        case '/settings':
          return 'Settings';
        case '/compare':
          return 'Compare Products';
        case '/competitive_sets':
          return 'Competitive Sets';
        default:
          return 'Unknown Page';
      }
    };

    setPageTitle(getPageTitle());
  };

  const handleSettingsTabClick = (tabName) => {
    // handleTabClick(tabName);
    onSettingsTabChange(tabName);
    
    
  };

  const isTabActive = (tabname) => {
    
    return settingsTab === tabname ? 'underline' : '';
  };

  return (
    <div className='p-5 justify-between flex flex-col border-b w-full'>
      <div className='p-5 justify-between flex w-full'>
        {pageTitle && <p className='text-[2em] font-medium ml-8 md:ml-0'>{pageTitle}</p>}
        <Image src={notification} alt='n' />
      </div>
      <div className='flex'>
        {issettings && (
          <div className='flex justify-between w-[30%]'>
            <p href="" onClick={() =>{ setTeamsHandler('manage_team');}} className={`${isTabActive('manage_team')} cursor-pointer`}>
              Manage Teams
            </p>
            <p onClick={() => setaccHandler('my_account')} className={`${isTabActive('my_account')} cursor-pointer`}>
              My Account
            </p>
            <p onClick={() => setbillHandler('billing')} className={`${isTabActive('billing')} cursor-pointer`}>
              Billing
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;

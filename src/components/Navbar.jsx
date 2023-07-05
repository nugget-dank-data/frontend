import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import notification from '../images/notification.svg';

const Navbar = ({ settingstab, newtabname }) => {
  const [settingsTab, setSettingsTab] = useState('manage_team'|| '');
  const [issettings, setissettings] = useState(false);
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    setissettings(window.location.pathname === '/settings');
    handleRouteChange(window.location.pathname);
  }, []);

  useEffect(() => {
    handleRouteChange(window.location.pathname);
  }, [newtabname]);

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
    settingstab(tabName);
    setSettingsTab(tabName);
  };

  const isTabActive = (tabname) => {
    return settingsTab && newtabname === tabname ? 'underline' : '';
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
            <p onClick={() => handleSettingsTabClick('manage_team')} className={`${isTabActive('manage_team')} cursor-pointer`}>
              Manage Teams
            </p>
            <p onClick={() => handleSettingsTabClick('my_account')} className={`${isTabActive('my_account')} cursor-pointer`}>
              My Account
            </p>
            <p onClick={() => handleSettingsTabClick('billing')} className={`${isTabActive('billing')} cursor-pointer`}>
              Billing
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

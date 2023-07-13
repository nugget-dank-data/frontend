import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import notification from '../images/notification.svg';
import Link from 'next/link';

const Navbar = ({ getTeams, getAcct, getBill }) => {
  const [settingsTab, setSettingsTab] = useState('manage_team');

  const [issettings, setissettings] = useState(false);
  const [pageTitle, setPageTitle] = useState('');

  const setTeamsHandler = (data) => {
    setSettingsTab(data);
    localStorage.setItem('settingstab', data);
    getTeams(true);
  };

  const setaccHandler = (data) => {
    setSettingsTab(data);
    localStorage.setItem('settingstab', data) 
    getAcct(true);
  };



  const setbillHandler = (data) => {
    setSettingsTab(data);
    localStorage.setItem('settingstab', data);
    getBill(true);
  };

  useEffect(() => {
    setissettings(window.location.pathname.includes('/settings'));
    handleRouteChange(window.location.pathname);
  }, []);





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
        case '/admin/organizations':
          return 'Competitive Sets';
        default:
          return 'Unknown Page';
      }
    };

    setPageTitle(getPageTitle());
  };

  const isTabActive = (tabname) => {
    return localStorage.getItem('settingstab') === tabname ? 'underline' : '';
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
            <Link href='/settings/manage_teams' onClick={() => setTeamsHandler('manage_team')} className={`${isTabActive('manage_team')} cursor-pointer`}>
              Manage Teams
            </Link>
            <Link href='/settings/accounts' onClick={() => setaccHandler('my_account')} className={`${isTabActive('my_account')} cursor-Linkointer`}>
              My Account
            </Link>
            <Link href='/settings/billing' onClick={() => setbillHandler('billing')} className={`${isTabActive('billing')} cursor-pointer`}>
              Billing
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import notification from '../images/notification.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = ({ getTeams, getAcct, getBill }) => {
  const currentRoute = usePathname();

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
    localStorage.setItem('settingstab', data);
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
      if (pathname === '/') {
        return '';
      } else if (pathname.includes('settings')) {
        return 'Settings';
      } else if (pathname === '/compare') {
        return 'Compare Products';
      } else if (pathname === '/competitive_sets') {
        return 'Competitive Sets';
      } else if (pathname === '/admin/organizations') {
        return 'Organizations';
      } else {
        return 'Unknown Page';
      }
    };

    setPageTitle(getPageTitle());
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
            <Link href='/settings/manage_team' passHref
              
                className={`cursor-pointer ${ currentRoute === '/settings/manage_team' ? 'underline text-[#7F56D9]' : ''}`}
                onClick={() => setTeamsHandler('manage_team')}
              >
                Manage Teams
              
            </Link>
            <Link href='/settings/account' passHref
                   className={`cursor-pointer ${currentRoute === '/settings/account' ? 'underline text-[#7F56D9]' : ''}`}
                onClick={() => setaccHandler('my_account')}
              >
                My Account
              
            </Link>
            <Link href='/settings/billing' passHref
              
                className={`cursor-pointer ${currentRoute === '/settings/billing' ? 'underline text-[#7F56D9]' : ''}`}
                onClick={() => setbillHandler('billing')}>
              
                Billing
              
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

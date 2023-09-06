"us client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import notification from '../images/notification.svg'
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';


const Navbar = ({ isMenuOpen, togglemenu }) => {
  const currentRoute = usePathname();

  const [settingsTab, setSettingsTab] = useState('manage_team');
  const [issettings, setissettings] = useState(false);
  const [pageTitle, setPageTitle] = useState('');

  // const setTeamsHandler = (data) => {
  //   setSettingsTab(data);
  //   localStorage.setItem('settingstab', data);
  //   getTeams(true);
  // };

  // const setaccHandler = (data) => {
  //   setSettingsTab(data);
  //   localStorage.setItem('settingstab', data);
  //   getAcct(true);
  // };

  // const setbillHandler = (data) => {
  //   setSettingsTab(data);
  //   localStorage.setItem('settingstab', data);
  //   getBill(true);
  // };

  useEffect(() => {
    setissettings(window.location.pathname.includes('/settings'));
    
  }, []);

  useEffect(() => {
    const getPageTitle = () => {
      if (currentRoute === '/') {
        return '';
      } else if (currentRoute.includes('settings')) {
        return 'Settings';
      } else if (currentRoute === '/compare') {
        return 'Compare Products';
      } else if (currentRoute === '/competitive_sets') {
        return 'Competitive Sets';
      } else if (currentRoute === '/admin/organizations') {
        return 'Organizations';
      } else {
        return 'Unknown Page';
      }
    };

    setPageTitle(getPageTitle());
  }, [currentRoute])


  return (
    <div className='p-5 justify-between flex flex-col border-b w-full'>
      <div className='justify-between flex w-full sticky top-0'>
        {pageTitle && <p className='text-[2em] font-medium ml-8 md:ml-0'>{pageTitle}</p>}
        <div className='flex '>
        <Image src={notification} alt='n' />
          {typeof window !== 'undefined' && window.innerWidth <= 768 && (
            <button
              className="bg-[#ffff] w-[2.5em] h-[2.5em] shadow-md rounded-xl flex items-center justify-center text-white p-2  top-0 right-0 z-50"
              onClick={togglemenu}
            >
              <FaBars className="h-6 w-6 text-black" />
            </button>
          )}
        </div>
      </div>

      
      {issettings && (
          <div className='flex gap-8 mt-8'>
            <Link href='/settings/manage_team' 
              
                className={`cursor-pointer ${ currentRoute === '/settings/manage_team' ? 'underline text-[#7F56D9]' : ''}`}
                // onClick={() => setTeamsHandler('manage_team')}
              >
                Manage Teams
              
            </Link>
            <Link href='/settings/account' 
                   className={`cursor-pointer ${currentRoute === '/settings/account' ? 'underline text-[#7F56D9]' : ''}`}
                // onClick={() => setaccHandler('my_account')}
              >
                My Account
              
            </Link>
          </div>
        )}
      
    </div>
  );
};

export default Navbar;

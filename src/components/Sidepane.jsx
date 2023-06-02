import { useEffect, useState } from 'react';
import nugget from '../images/logo.png'
import Image from 'next/image';
import compare from '../images/compare.svg'
import compsets from '../images/compsets.svg'
import managestores from '../images/managestores.svg'
import settings from '../images/settings.svg';
import logout from '../images/logout.svg'
import Link from 'next/link';

const Sidepane = ({ activeTab, handleTabClick }) => {


  const renderTabClassName = (tabName) => {
    return `mb-4 ${tabName === activeTab ? 'active border-l-2 border-blue-500' : ''}`;
  };
  

  const renderSubMenu = (parentTab, children) => {
    if (activeTab === parentTab) {
      return <ul>{children}</ul>;
    }
    return null;
  };

//   useEffect(() => {
//     setCurrentPath(window.location.pathname);
//     const handleRouteChange = () => {
//       setCurrentPath(window.location.pathname);
//     };

//     window.addEventListener('popstate', handleRouteChange);

//     return () => {
//       window.removeEventListener('popstate', handleRouteChange);
//     };
//   }, []);

  const getIcon = (tabName) => {
    // Map the tab names to their respective icons
    switch (tabName) {
      case 'compare':
        return <Image src={compare} alt="Compare Icon" className="mr-2" />;
      case 'compare-v2':
        return <Image src={compare} alt="Compare V2 Icon" className="mr-2" />;
      case 'comp-sets':
        return <Image src={compsets} alt="Comp Sets Icon" className="mr-2" />;
      case 'manage-stores':
        return <Image src={managestores} alt="Manage Stores Icon" className="mr-2" />;
      case 'settings':
        return <Image src={settings} alt="Settings Icon" className="mr-2" />;
      default:
        return null;
    }
  };

  return (
   
    <div className="bg-[#010716e5] text-white flex flex-col p-5 min-h-screen w-[20em]">
        <div className='flex flex-row p-0 text-[2rem] align-middle items-center justify-center'>
            <Image src={nugget} alt="" className=' w-16' />
            <p className='p-2'>Nugget</p>
        </div>
        <p className='text-[#b3b2b25e] text-[1em]'>menu</p>
      <ul className="list-none  font-semibold">
        <li className={`mb-4 p-4 font-medium rounded-lg shadow-xl  ${renderTabClassName('compare')}`}>
        <Link href="/compare" onClick={() => handleTabClick('compare')} className="flex items-center">

            {getIcon('compare')}
            Compare
          </Link>
        </li>
        <li className={`mb-4 p-4 font-medium rounded-lg shadow-xl ${renderTabClassName('compare-v2')}`}>
          <a
            href="/compare"
            onClick={() => handleTabClick('compare-v2')}
            className="flex"
          >
            {getIcon('compare-v2')}
            Compare V2 [Beta]
          </a>
        </li>
        <li className={`mb-4 p-4 font-medium rounded-lg shadow-xl ${renderTabClassName('competitive_sets')}`}>
          <a
            href="/competitive_sets"
            onClick={() => handleTabClick('competitive_sets')}
            className="flex items-center"
          >
            {getIcon('comp-sets')}
            Comp Sets
          </a>
        </li>
        <li className={`mb-4 p-4 font-medium rounded-lg shadow-xl ${renderTabClassName('manage-stores')}`}>
          <a onClick={() => handleTabClick('manage-stores')} className="flex cursor-pointer">
            {getIcon('manage-stores')}
            Manage Stores
          </a>
          
          {renderSubMenu('manage-stores', (
            <div className='align-left ml-8'>
              <ul className=' list-disc'>
              <li className="font-medium mt-3">
                <a href="/my-stores" onClick={() => handleTabClick('manage-stores')} className="font-medium mt-3">
                  My Stores
                </a>
              </li>
              <li className="font-medium mt-3">
                <a href="/stores-to-monitor" onClick={() => handleTabClick('manage-stores')} className="font-medium mt-3">
                  Stores to Monitor
                </a>
              </li>
              <li className="font-medium mt-3">
                <a href="/organization-stores" onClick={() => handleTabClick('manage-stores')} >
                  Organization Stores
                </a>
              </li>
              </ul>
            </div>
          ))}
        </li>
        <li className={`mb-4 p-4 ${renderTabClassName('settings')}`}>
          <a onClick={() => handleTabClick('settings')} className="flex cursor-pointer">
            {getIcon('settings')}
            Settings
          </a>
          {renderSubMenu('settings', (
            <li className='mt-4 list-disc ml-10'>
              <a href="/settings/reset_password" onClick={() => handleTabClick('reset-password')} className="ml-4">
                Reset Password
              </a>
            </li>
          ))}
        </li>
      </ul>
      <p className='text-[#b3b2b25e] text-[1em]'>Profile</p>
      <div className='justify-between flex text-[0.9em] mt-6'>
        <a href="docs/privacy_policy">Privacy policy</a>
        <a href="docs/terms_of_use">Terms of Use</a>
      </div>
      <div className='m-auto w-3/4 flex flex-row bg-[#1a181863] rounded-lg mt-8'>
      <a href="/login" className='flex w-full align-middle items-center text-center justify-center'>
            <Image src={logout} alt="" />
           <p className='p-2 text-[1em]'> Logout</p>
            </a>
      </div>
    </div>
  
  );
};

export default Sidepane;
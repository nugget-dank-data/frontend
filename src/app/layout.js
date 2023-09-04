"use client"
import { useEffect, useState } from 'react';
import Sidepane from '@/components/Sidepane';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './globals.css'

import { useRouter } from 'next/navigation'

export default function RootLayout({ children }) {
  const [activeTab, setActiveTab] = useState('');
  const [settingstab, setSettingstab] = useState('manage_team');
  const [menustate, setMenustate] = useState(true);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [issettingsPage, setIsSettingsPage] = useState(false);
  const [is404Route, setIs404Route] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Check session token here
    const token = sessionStorage.getItem("login_key");
    const isUserInSession = !!token;
    
    
    if (!isUserInSession && !isLoginPage) {
      router.push('/accounts/login');
    }
  }, [router]);

  useEffect(() => {
    async function checkIf404Route() {
      const response = await fetch(window.location.href);
      
      if (response.status === 404) {
        setIs404Route(true);
      }
    }

    checkIf404Route();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenustate(true); 
      } else {
        setMenustate(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

 
  }, []);
  

  useEffect(() => {
    const pathName = window.location.pathname;
    const tabName = pathName.substring(1);
    setActiveTab(tabName);

    // Check if the current page is a login page
    setIsLoginPage(
      pathName.includes('/accounts') ||
        pathName.includes('/verify-email/') ||
        pathName.includes('/settings') ||
        pathName.includes('/admin') ||
        pathName.includes('/privacy_policy') ||
        pathName.includes('/terms_of_use')
    );

    // Check if the current page is a settings page
    setIsSettingsPage(
      pathName.includes('/accounts') ||
        pathName.includes('/verify-email/') ||
        pathName.includes('/admin')
    );
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSettingsTabChange = (tabName) => {
    setSettingstab(tabName);
  };

  const setMenu = () => {
    setMenustate(!menustate);
  };

  const getTeamsHandler = () => {
    // Implement your logic here
  };

  const getAccHandler = () => {
    // Implement your logic here
  };

  const getBillHandler = () => {
    // Implement your logic here
  };

  return (
    <html className="relative">
      <head>
      <link rel="icon" type="image/svg+xml" sizes="32x32" href="/logo2.svg" />
      </head>
      <body className="h-[100%] flex">
          {!issettingsPage && !is404Route && (
        <div className="md:sticky bottom-0 md:w-[27%] top-0 flex md:h-full  fixed z-50 h-screen">
            <Sidepane
              activeTab={activeTab}
              handleTabClick={handleTabClick}
              onSettingsTabChange={handleSettingsTabChange}
              isMenuOpen={menustate}
              togglemenu={setMenu}
            />
        </div>
          )}
        <div className="w-full h-full p-0 overflow-hidden">
          <div className="flex w-full h-[100%] ">
            <div className="w-full flex flex-col ">
              <div className="w-full">
                {!isLoginPage && !is404Route && (
                  <Navbar
                    getTeams={getTeamsHandler}
                    getAcc={getAccHandler}
                    getBill={getBillHandler}
                    isMenuOpen={menustate}
                    togglemenu={setMenu}
                  />
                )}
              </div>
              <div className="">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

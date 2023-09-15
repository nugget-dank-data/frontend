"use client"
import { useEffect, useState } from 'react';
import Sidepane from '@/components/Sidepane';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './globals.css'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function RootLayout({ children }) {
  const [activeTab, setActiveTab] = useState('');
  const [settingstab, setSettingstab] = useState('manage_team');
  const [menustate, setMenustate] = useState(true);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [issettingsPage, setIsSettingsPage] = useState(false);
  const [is404Route, setIs404Route] = useState(false);

  const router = useRouter();

  const pathName = usePathname() 
  

  useEffect(() => {
    async function checkIf404Route() {
      const response = await fetch(window.location.href);
      
      if (response.status === 404) {
        setIs404Route(true);
      }
    }

    checkIf404Route();
  }, [router.events]);

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
  }, [router.events]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSettingsTabChange = (tabName) => {
    setSettingstab(tabName);
  };

  const setMenu = () => {
    setMenustate(!menustate);
  };



  return (
    <html className="relative text">
      <head>
      <link rel="icon" type="image/svg+xml" sizes="32x32" href="/logo2.svg" />
      </head>
      <body className="h-[100%] flex">
          {!issettingsPage && !is404Route && (
        <div className="md:sticky bottom-0 md:w-fit w-fit top-0 flex md:h-full  fixed z-50 h-screen">
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

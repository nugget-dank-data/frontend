"use client"
import { useEffect, useState, lazy, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import CustomLoading from '@/components/loading';
import './globals.css'

const LazySidepane = lazy(() => import('@/components/Sidepane'));

export default function RootLayout({ children }) {
  const [activeTab, setActiveTab] = useState('');
  const [settingstab, setSettingstab] = useState('manage_team');
  const [menustate, setMenustate] = useState(true);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [issettingsPage, setIsSettingsPage] = useState(false);
  const [is404Route, setIs404Route] = useState(false);

  const pathName = usePathname();

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

    // const pathName = window.location.pathname;
  // useEffect(() => {
  //   const tabName = pathName.substring(1);
  //   setActiveTab(tabName);

  //   setIsLoginPage(
  //     pathName.includes('/accounts') ||
  //       pathName.includes('/verify-email/') ||
  //       pathName.includes('/settings') ||
  //       pathName.includes('/admin') ||
  //       pathName.includes('/privacy_policy') ||
  //       pathName.includes('/terms_of_use')
  //   );

  //   setIsSettingsPage(
  //     pathName.includes('/accounts') ||
  //       pathName.includes('/verify-email/') ||
  //       pathName.includes('/admin')
  //   );
  // }, []);

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
      <body className="h-[100%] flex w-full">
        {!pathName.includes('/accounts'|| '/verify-email/' || '/privacy_policy'||'/terms_of_use') && menustate && (
          <div className="md:sticky bottom-0 flex-wrap w-fit sm:w-1/5 top-0 flex md:h-screen fixed z-50 h-screen">
            <LazySidepane
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
                {!pathName.includes('/accounts'|| '/verify-email/')&& (
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
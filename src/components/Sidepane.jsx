import { useEffect, useState } from "react";
import nugget from "../images/logo.png";
import Image from "next/image";
import compare from "../images/compare.svg";
import compsets from "../images/compsets.svg";
import managestores from "../images/managestores.svg";
import settings from "../images/settings.svg";
import logout from "../images/logout.svg";
import droped from "../images/dropdown2.svg";
import notdroped from "../images/dropdown1.svg";
import Link from "next/link";

const Sidepane = ({ activeTab, handleTabClick, onSettingsTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPathname, setCurrentPathname] = useState("");
  const [isManageStoresDropdownOpen, setIsManageStoresDropdownOpen] = useState(false);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);
  const [settingsTab, setSettingsTab] =useState('')

  const renderTabClassName = (tabName) => {
    return `mb-4 ${tabName === activeTab ? "active border-l-2 border-blue-500" : ""}`;
  };

  const renderSubMenu = (parentTab, content) => {
    if (activeTab === parentTab) {
      return <div className="ml-10">{content}</div>;
    }
    return null;
  };

  const getIcon = (tabName) => {
    // Map the tab names to their respective icons
    switch (tabName) {
      case "compare":
        return <Image src={compare} alt="Compare Icon" className="mr-2" />;
      case "compare-v2":
        return <Image src={compare} alt="Compare V2 Icon" className="mr-2" />;
      case "comp-sets":
        return <Image src={compsets} alt="Comp Sets Icon" className="mr-2" />;
      case "manage-stores":
        return <Image src={managestores} alt="Manage Stores Icon" className="mr-2" />;
      case "settings":
        return <Image src={settings} alt="Settings Icon" className="mr-2" />;
      default:
        return null;
    }
  };

  

  useEffect(() => {
    const handleScroll = () => {
      const sidepane = document.getElementById('sidepane');
      const sidepaneRect = sidepane.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (sidepaneRect.top <= 0 && sidepaneRect.bottom > viewportHeight) {
        sidepane.style.position = 'fixed';
        sidepane.style.top = '0';
        sidepane.style.bottom = '0';
      } else {
        sidepane.style.position = 'fixed';
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleSettingsTabClick = (tabName) => {
    handleTabClick(tabName);
    onSettingsTabChange(tabName);
  };


 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleManageStoresDropdown = () => {
    setIsManageStoresDropdownOpen(!isManageStoresDropdownOpen);
    handleTabClick('manage-stores')
  };

  const toggleSettingsDropdown = () => {
    setIsSettingsDropdownOpen(!isSettingsDropdownOpen);
    handleTabClick('settings')
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(true); // Open menu on desktop
      } else {
        setIsMenuOpen(false); // Close menu on mobile
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed bg-red-200">
      {isMenuOpen ? (
        <div  id="sidepane" className="bg-[#232529] min-h-screen text-white  flex flex-col z-50 p-5 absolute w-[20em] sm:relative">
          <div className="top-0 right-2 absolute text-white flex sm:hidden">
            <button className="" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-row p-0 text-[2rem] align-middle items-center justify-center">
            <Image src={nugget} alt="" className="w-16" />
            <p className="p-2">Nugget</p>
          </div>
          <p className="text-[#b3b2b25e] text-[1em]">menu</p>
          <ul className="list-none font-semibold">
            <li
              onClick={() => handleTabClick("compare")}
              className={`mb-4 p-4 font-medium rounded-lg shadow-xl  ${renderTabClassName(
                "compare"
              )}`}
            >
              <a
                href="/compare"
                onClick={() => handleTabClick("compare")}
                className="flex items-center"
              >
                {getIcon("compare")}
                Compare
              </a>
            </li>
            <li
              onClick={() => handleTabClick("compare-v2")}
              className={`mb-4 p-4 font-medium rounded-lg shadow-xl ${renderTabClassName(
                "compare-v2"
              )}`}
            >
              <a
                href="/compare-v2"
                onClick={() => handleTabClick("compare-v2")}
                className="flex"
              >
                {getIcon("compare-v2")}
                Compare V2 [Beta]
              </a>
            </li>
            <li
              className={`mb-4 p-4 font-medium rounded-lg shadow-xl ${renderTabClassName(
                "competitive_sets"
              )}`}
            >
              <a
                href="/competitive_sets"
                onClick={() => handleTabClick("competitive_sets")}
                className="flex items-center"
              >
                {getIcon("comp-sets")}
                Comp Sets
              </a>
            </li>
            <li
              className={`mb-4 p-4 font-medium rounded-lg shadow-xl ${renderTabClassName(
                "manage-stores"
              )}`}
            >
              <a className="flex cursor-pointer" onClick={toggleManageStoresDropdown}>
                {getIcon("manage-stores")}
                <span className="ml-2">Manage Stores</span>
                <Image src={isManageStoresDropdownOpen ? droped : notdroped} className="ml-auto" />
              </a>
              {renderSubMenu(
                "manage-stores",
                <ul className="list-disc">
                  <li className="font-medium mt-3">
                    <a
                      href="/my-stores"
                      onClick={() => handleTabClick("manage-stores")}
                      className="font-medium mt-3"
                    >
                      My Stores
                    </a>
                  </li>
                  <li className="font-medium mt-3">
                    <a
                      href="/stores-to-monitor"
                      onClick={() => handleTabClick("manage-stores")}
                      className="font-medium mt-3"
                    >
                      Stores to Monitor
                    </a>
                  </li>
                  <li className="font-medium mt-3">
                    <a
                      href="/organization-stores"
                      onClick={() => handleTabClick("manage-stores")}
                    >
                      Organization Stores
                    </a>
                  </li>
                </ul>
              )}
            </li>
           <Link href='/settings'> <li className={`mb-4 p-4 ${renderTabClassName("settings")}`}>
              <div className="flex cursor-pointer " onClick={toggleSettingsDropdown}>
                {getIcon("settings")}
                <span className="ml-2">Settings</span>
                <Image src={isSettingsDropdownOpen ? droped : notdroped} alt="icon" className="ml-auto" />
              </div>
              {renderSubMenu(
                "settings",
                <ul className="list-disc ml-8">
                  <li className="font-medium mt-3"
                  onClick={() => handleSettingsTabClick("manage_team")}
                  >                   
                     Manage Team
                  </li>
                  <li className="font-medium mt-3"
                  onClick={() => handleSettingsTabClick("my_account")}
                  >                   
                     My Account
                  </li>
                  <li className="font-medium mt-3"
                  onClick={() => handleSettingsTabClick("billing")}
                  >                   
                     Billing
                  </li>
                </ul>
              )}
            </li>
            </Link>
          </ul>
          <p className="text-[#b3b2b25e] text-[1em]">Profile</p>
          <div className="justify-between flex text-[0.9em] mt-6">
            <a href="privacy_policy">Privacy policy</a>
            <a href="terms_of_use">Terms of Use</a>
          </div>
          <div className="m-auto w-3/4 flex flex-row bg-[#1a181863] rounded-lg mt-8">
            <Link
              href="accounts/login"
              className="flex w-full align-middle items-center text-center justify-center"
            >
              <Image src={logout} alt="" />
              <p className="p-2 text-[1em]"> Logout</p>
            </Link>
          </div>
        </div>
      ) : (
        <button
          className="mr-4 bg-[#131212] w-[1.3em] shadow-2xl text-white text-[2em] p-2 rounded justify-center items-center absolute"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 12h16M4 16h16M4 20h16"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Sidepane;

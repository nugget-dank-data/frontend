import { useEffect, useState } from "react";
import nugget from "../../../images/logo.png";
import Image from "next/image";
import logout from "../../../images/logout.svg";
import droped from "../../../images/dropdown2.svg";
import notdroped from "../../../images/dropdown1.svg";
import radioactivive from "../../../images/radioactive.svg";
import radioinactive from "../../../images/radioinactive.svg";

const AdminSidepane = ({ activeTab, activeSubTab, handleTabClick}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  const [isManageStoresDropdownOpen, setIsManageStoresDropdownOpen] =
    useState(false);
  
  
 

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const toggleManageStoresDropdown = () => {
      setIsManageStoresDropdownOpen(!isManageStoresDropdownOpen);
      handleTabClick("manage-stores");
    };
  
    const renderTabClassName = (tabName) => {
      return `mb-4 ${
        tabName === activeTab ? "active border-l-2 border-blue-500" : ""
      }`;
    };
  
    const renderSubMenu = (parentTab, content) => {
      if (activeTab === parentTab) {
        return <div className="ml-10">{content}</div>;
      }
      return null;
    };


    const handleSubTabClick = (subTabName) => {
      
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
        <div
          id="AdminSidepane"
          className="bg-[#232529] overflow-y-scroll scrollbar-hide h-screen  text-white flex flex-col z-50 p-5  w-[20em] sm:relative"
        >
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
              onClick={() => handleTabClick("organizations")}
              className={`mb-4 p-4 font-medium rounded-lg shadow-xl  ${renderTabClassName(
                "organizations"
              )}`}
            >
              <a
                href="/admin/organizations"
                onClick={() => handleTabClick("organizations")}
                className="flex items-center"
              >
                
                Organizations
              </a>
            </li>
            <li
              onClick={() => handleTabClick("old_admin")}
              className={`mb-4 p-4 font-medium rounded-lg shadow-xl ${renderTabClassName(
                "old_admin"
              )}`}
            >
              <a
                href="/compare-v2"
                onClick={() => handleTabClick("old_admin")}
                className="flex"
              >
                
                Old Admin
              </a>
              
            </li>
            
            <li
              className={`mb-4 p-4 font-medium rounded-lg shadow-xl ${renderTabClassName(
                "manage-stores"
              )}`}
            >
              <a
                className="flex cursor-pointer"
                onClick={toggleManageStoresDropdown}
              >
                
                <span className="ml-2">Manage Stores</span>
                <Image
                  src={isManageStoresDropdownOpen ? droped : notdroped}
                  className="ml-auto "
                />
              </a>
              {renderSubMenu(
                "manage-stores",
                <div className="flex flex-col">
                  <div
                    className="flex p-2 cursor-pointer items-center "
                    onClick={() => handleSubTabClick("my_stores")}
                  >
                    <Image
                      src={
                        activeSubTab === "My Stores"
                          ? radioactivive
                          : radioinactive
                      }
                      className="w-[1em]"
                      alt="icon"
                    />
                    <p className="font-medium ml-2">My Stores </p>
                  </div>

                  <div
                    className="flex p-2 cursor-pointer items-center "
                    onClick={() => handleSubTabClick("Stores_to_Monitor")}
                  >
                    <Image
                      src={
                        activeSubTab === "Stores_to_Monitor"
                          ? radioactivive
                          : radioinactive
                      }
                      className="w-[1em]"
                      alt="icon"
                    />
                    <p className="font-medium ml-2">Stores to Monitor</p>
                  </div>
                  <div
                    className="flex p-2 cursor-pointer items-center "
                    onClick={() => handleSubTabClick("organization_stores")}
                  >
                    <Image
                      src={
                        activeSubTab === "organization_stores"
                          ? radioactivive
                          : radioinactive
                      }
                      className="w-[1em]"
                      alt="icon"
                    />
                    <p className="font-medium ml-2">Organization Stores</p>
                  </div>
                </div>
              )}
            </li>
          </ul>
          <p className="text-[#b3b2b25e] text-[1em]">Profile</p>
          <div className="justify-between flex text-[0.9em] mt-6">
            <a href="privacy_policy">Privacy policy</a>
            <a href="terms_of_use">Terms of Use</a>
          </div>
          <div className="m-auto w-3/4 flex flex-row bg-[#1a181863] rounded-lg mt-8">
            <a
              href="accounts/login"
              className="flex w-full align-middle items-center text-center justify-center"
            >
              <Image src={logout} alt="" />
              <p className="p-2 text-[1em]"> Logout</p>
            </a>
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

export default AdminSidepane;

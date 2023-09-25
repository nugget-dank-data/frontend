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
import radioactive from "../images/radioactive.svg";
import radioinactive from "../images/radioinactive.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from "react-icons/fa";

const Sidepane = ({
  activeTab,
  handleTabClick,
  onSettingsTabChange,
  isMenuOpen,
  togglemenu,
}) => {
  const currentRoute = usePathname();

  const [isManageStoresDropdownOpen, setIsManageStoresDropdownOpen] =
    useState(false);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setMobile(true);
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setMobile(false);
        }
      };
      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

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
        return (
          <Image src={managestores} alt="Manage Stores Icon" className="mr-2" />
        );
      case "settings":
        return <Image src={settings} alt="Settings Icon" className="" />;
      default:
        return null;
    }
  };

  const handleSubTabClick = (subTabName) => {};
  const toggleMenu = () => {
    
  };

  const toggleManageStoresDropdown = () => {
    setIsManageStoresDropdownOpen(!isManageStoresDropdownOpen);
    handleTabClick("manage-stores");
  };

  const toggleSettingsDropdown = () => {
    setIsSettingsDropdownOpen(!isSettingsDropdownOpen);
    handleTabClick("settings");
  };

  useEffect(() => {
    if (currentRoute.includes("/settings")) {
      setIsSettingsDropdownOpen(true);
    } else {
      setIsSettingsDropdownOpen(false);
    }
  }, [currentRoute]);
  
  const handleLogout = async () => {
    try {
      const token = sessionStorage.getItem("login_key");
      const headers = {
        Authorization: `Token ${token}`,
      };

      const response = await axios.post(
        "https://prod.nuggetdata.net/users/logout/",
        null,
        { headers }
      );

      localStorage.clear();

      setLogoutMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(isMenuOpen)
  

  return (
    <div className=" w-full">
      {mobile ? (
      <AnimatePresence>
      {isMenuOpen && (
    <motion.div
    id="sidepane"
    className={`bg-[#232529] overflow-y-scroll scrollbar-hide h-screen gap-8 text-white flex flex-col z-50 p-5 md:relative`}
    initial={{ x: '-100%' }} // Initial position (off-screen)
    animate={{ x: 0 }} // Target position (on-screen)
    exit={{ x: '-100%' }} // Exit position (off-screen)
    transition={{ duration: 0.5, ease: 'easeInOut' }} // Animation duration and easing
  >
          {mobile && (
 <motion.button
 className={`shadow-2xl border absolute top-0 right-0 border-[#3d3b3ba2] rounded-lg w-[2.5em] h-[2.5em] flex items-center justify-center text-white p-2 z-50 menu-toggle-button transition-rotate`}
 onClick={togglemenu}
 initial={{ rotate: 0 }}
 animate={{ rotate: isMenuOpen ? 90 : 0 }}
 transition={{ duration: 0, ease: 'easeInOut' }}
>
 <FaTimes className="h-6 w-6" />
</motion.button>

     
          )}
          <div className={`flex flex-row p-0 text-[2rem] align-middle items-center justify-center ${mobile ? 'mt-8': ''}`}>
            <Image src={nugget} alt="icon" className="w-16" />
            <p className="p-2">Nugget</p>
          </div>

          <ul className="list-none font-semibold mt-8">
            <li
              onClick={() => handleTabClick("compare")}
              className={`mb-4 p-4 font-medium rounded-lg shadow-xl  ${
                currentRoute.includes("/compare")
                  ? "border-l-4 bg-[#08070753] border-[#7F56D9]"
                  : ""
              }`}
            >
              <Link
                href="/compare"
                onClick={() => handleTabClick("compare")}
                className="flex items-center"
              >
                {getIcon("compare")}
                Compare
              </Link>
            </li>

            <li
              className={`mb-4 p-4 font-medium rounded-lg w-full flex-wrap shadow-xl gap-8  ${
                currentRoute.includes("/competitive_sets")
                  ? "border-l-4 bg-[#08070753] border-[#7F56D9]"
                  : ""
              }`}
            >
              <Link
                href="/competitive_sets"
                onClick={() => handleTabClick("competitive_sets")}
                className="flex items-center"
              >
                {getIcon("comp-sets")}
                Comp Sets
              </Link>
            </li>
         

            <li
              className={`mb-4 p-4 font-medium rounded-lg w-full flex-wrap shadow-xl gap-8  ${
                currentRoute.includes("/settings")
                  ? "border-l-4 bg-[#1b1a1a98] border-[#7F56D9]"
                  : ""
              }`}
            >
                <div
                  className="flex cursor-pointer"
                  onClick={toggleSettingsDropdown}
                >
              <Link href="/settings/manage_team" className="w-full flex" >
                  {getIcon("settings")}
                  <span className="ml-2">Settings</span>
                  </Link>
                  <Image
                    src={isSettingsDropdownOpen ? droped : notdroped}
                    alt="icon"
                    className="ml-auto"
                    onClick={toggleSettingsDropdown}
                  />
                </div>
              {isSettingsDropdownOpen && 
                // "settings",
                <div className="flex flex-col ml-8">
                  <Link
                    href="/settings/manage_team"
                    
                    className={currentRoute == "/settings/manage_team"}
                  >
                    <div
                      className="flex p-2 cursor-pointer items-center"
                      onClick={() => handleSubTabClick("manage_team")}
                    >
                      <Image
                        src={
                          currentRoute === "/settings/manage_team"
                            ? radioactive
                            : radioinactive
                        }
                        className="w-[1em]"
                        alt="icon"
                      />
                      <p className="font-medium ml-2">Manage Team</p>
                    </div>
                  </Link>
                  <Link href="/settings/account" >
                    <div
                      className="flex p-2 cursor-pointer items-center"
                      onClick={() => handleSubTabClick("my_account")}
                    >
                      <Image
                        src={
                          currentRoute === "/settings/account"
                            ? radioactive
                            : radioinactive
                        }
                        className="w-[1em]"
                        alt="icon"
                      />
                      <p className="font-medium ml-2">My Account</p>
                    </div>
                  </Link>
                </div>
              }
            </li>
          </ul>

          <div className="justify-between flex text-[0.9em] mt-6 w-full ">
            <Link href="privacy_policy" className="flex flex-wrap" >Privacy policy</Link>
            <Link href="terms_of_use">Terms of Use</Link>
          </div>
          <div className="m-auto w-3/4 flex flex-row bg-[#1a181863] rounded-lg mt-8">
            <Link
              href="/accounts/login"
              className="flex w-full align-middle items-center text-center justify-center"
              onClick={handleLogout}
            >
              <Image src={logout} alt="icon" />
              <p className="p-2 text-[1em]"> Logout</p>
            </Link>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

): 

  <div
  id="sidepane"
  className={`bg-[#232529] px-4 w-full scrollbar-hide h-screen text-white flex flex-col gap-8 z-50 md:relative`}

>
      
   
        
        <div className={`flex flex-row p-0 text-[2rem] align-middle w-full mb-8 items-center justify-center ${mobile ? 'mt-8': ''}`}>
          <Image src={nugget} alt="icon" className="w-16" />
          <p className="p-2">Nugget</p>
        </div>

        <ul className="list-none font-semibold w-full">
          <li
            onClick={() => handleTabClick("compare")}
            className={`mb-4 p-4 font-medium rounded-lg w-full flex-wrap shadow-xl  ${
              currentRoute.includes("/compare")
                ? "border-l-4 bg-[#08070753] border-[#7F56D9]"
                : ""
            }`}
          >
            <Link
              href="/compare"
              onClick={() => handleTabClick("compare")}
              className="flex items-center"
            >
              {getIcon("compare")}
              Compare
            </Link>
          </li>

          <li
            className={`mb-4 p-4 font-medium rounded-lg w-full flex-wrap shadow-xl  ${
              currentRoute.includes("/competitive_sets")
                ? "border-l-4 bg-[#08070753] border-[#7F56D9]"
                : ""
            }`}
          >
            <Link
              href="/competitive_sets"
              onClick={() => handleTabClick("competitive_sets")}
              className="flex items-center"
            >
              {getIcon("comp-sets")}
              Comp Sets
            </Link>
          </li>


          <li
            className={`mb-4 p-4 font-medium rounded-lg w-full flex-wrap shadow-xl gap-8  ${
              currentRoute.includes("/settings")
                ? "border-l-4 bg-[#1b1a1a98] border-[#7F56D9]"
                : ""
            }`}
          >
              <div
                className="flex cursor-pointer gap-8 w-full"
                onClick={toggleSettingsDropdown}
              >
            <Link href="/settings/manage_team" className="w-full m-auto flex gap-2" >
                {getIcon("settings")}
                <span className="">Settings</span>
                </Link>
                <Image
                  src={isSettingsDropdownOpen ? droped : notdroped}
                  alt="icon"
                  className=""
                  onClick={toggleSettingsDropdown}
                />
              </div>
            {isSettingsDropdownOpen && 
              // "settings",
              <div className="flex flex-col ml-8">
                <Link
                  href="/settings/manage_team"
                  
                  className={currentRoute == "/settings/manage_team"}
                >
                  <div
                    className="flex p-2 cursor-pointer items-center"
                    onClick={() => handleSubTabClick("manage_team")}
                  >
                    <Image
                      src={
                        currentRoute === "/settings/manage_team"
                          ? radioactive
                          : radioinactive
                      }
                      className="w-[1em]"
                      alt="icon"
                    />
                    <p className="font-medium ml-2">Manage Team</p>
                  </div>
                </Link>
                <Link href="/settings/account" >
                  <div
                    className="flex p-2 cursor-pointer items-center"
                    onClick={() => handleSubTabClick("my_account")}
                  >
                    <Image
                      src={
                        currentRoute === "/settings/account"
                          ? radioactive
                          : radioinactive
                      }
                      className="w-[1em]"
                      alt="icon"
                    />
                    <p className="font-medium ml-2">My Account</p>
                  </div>
                </Link>
              </div>
            }
          </li>
        </ul>

        <div className="justify-between flex text-[0.9em] mt-6 w-full flex-row ">
          <Link href="privacy_policy" className="flex flex-wrap" >Privacy policy</Link>
          <Link href="terms_of_use" className="flex flex-wrap">Terms of Use</Link>
        </div>
        <div className="m-auto w-3/4 flex flex-row bg-[#1a181863] rounded-lg mt-8">
          <Link
            href="/accounts/login"
            className="flex w-full align-middle items-center text-center justify-center"
            onClick={handleLogout}
          >
            <Image src={logout} alt="icon" />
            <p className="p-2 text-[1em]"> Logout</p>
          </Link>
        </div>
      </div>
}
    </div>
  );
};

export default Sidepane;

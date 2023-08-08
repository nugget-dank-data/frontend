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
        return (
          <Image src={managestores} alt="Manage Stores Icon" className="mr-2" />
        );
      case "settings":
        return <Image src={settings} alt="Settings Icon" className="mr-2" />;
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
      const token = localStorage.getItem("login_key");
      const headers = {
        Authorization: `Token ${token}`,
      };

      const response = await axios.post(
        "http://34.75.96.129:420/users/logout/",
        null,
        { headers }
      );

      localStorage.clear();

      setLogoutMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(isMenuOpen);

  return (
    <div className="flex overflow-scroll bottom-0 scrollbar-hide w-full z-50 h-screen">
      <AnimatePresence>
      {isMenuOpen && (
    <motion.div
    id="sidepane"
    className={`bg-[#232529] overflow-y-scroll scrollbar-hide h-screen text-white flex flex-col z-50 p-5 md:relative`}
    initial={{ x: '-100%' }} // Initial position (off-screen)
    animate={{ x: 0 }} // Target position (on-screen)
    exit={{ x: '-100%' }} // Exit position (off-screen)
    transition={{ duration: 0.5, ease: 'easeInOut' }} // Animation duration and easing
  >
          {window.innerWidth <= 768 && (
 <motion.button
 className={`shadow-2xl border absolute top-0 right-0 border-[#3d3b3ba2] rounded-lg w-[2.5em] h-[2.5em] flex items-center justify-center text-white p-2 z-50 menu-toggle-button transition-rotate`}
 onClick={togglemenu}
 initial={{ rotate: 0 }}
 animate={{ rotate: isMenuOpen ? 90 : 0 }}
 transition={{ duration: 0.7, ease: 'easeInOut' }}
>
 <FaTimes className="h-6 w-6" />
</motion.button>

     
          )}
          <div className={`flex flex-row p-0 text-[2rem] align-middle items-center justify-center ${window.innerWidth <= 768 ? 'mt-8': ''}`}>
            <Image src={nugget} alt="icon" className="w-16" />
            <p className="p-2">Nugget</p>
          </div>

          <ul className="list-none font-semibold">
            <li
              onClick={() => handleTabClick("compare")}
              className={`mb-4 p-4 font-medium rounded-lg shadow-xl  ${
                currentRoute.includes("/compare")
                  ? "border-l-4 bg-[#08070753] border-[#7F56D9]"
                  : ""
              }`}
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
              className={`mb-4 p-4 font-medium rounded-lg shadow-xl ${
                currentRoute.includes("/competitive_sets")
                  ? "border-l-4 bg-[#08070753] border-[#7F56D9]"
                  : ""
              }`}
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
              className={`mb-4 p-4 font-medium rounded-lg shadow-xl ${
                currentRoute.includes("/manage_stores")
                  ? "border-l-4 bg-[#08070753] border-[#7F56D9]"
                  : ""
              }`}
            >
              <a
                className="flex cursor-pointer"
                onClick={toggleManageStoresDropdown}
              >
                {getIcon("manage-stores")}
                <span className="ml-2">Manage Stores</span>
                <Image
                  src={isManageStoresDropdownOpen ? droped : notdroped}
                  className="ml-auto "
                  alt="icon"
                />
              </a>
              {isManageStoresDropdownOpen && (
                "manage-stores",
                <div className="flex flex-col ml-8">
                  <div
                    className="flex p-2 cursor-pointer items-center "
                    onClick={() => handleSubTabClick("my_stores")}
                  >
                    <Image
                      src={
                        currentRoute === "/manage_stores/my_stores"
                          ? radioactive
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
                        currentRoute === "/manage_stores/stores_to_monitor"
                          ? radioactive
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
                        currentRoute === "/manage_stores/organization_stores"
                          ? radioactive
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

            <li
              className={`mb-4 p-4 font-medium rounded-lg shadow-xl ${
                currentRoute.includes("/settings")
                  ? "border-l-4 bg-[#1b1a1a98] border-[#7F56D9]"
                  : ""
              }`}
            >
                <div
                  className="flex cursor-pointer"
                  onClick={toggleSettingsDropdown}
                >
              <a href="/settings/manage_team" className="w-full flex" >
                  {getIcon("settings")}
                  <span className="ml-2">Settings</span>
                  </a>
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

          <div className="justify-between flex text-[0.9em] mt-6">
            <a href="privacy_policy">Privacy policy</a>
            <a href="terms_of_use">Terms of Use</a>
          </div>
          <div className="m-auto w-3/4 flex flex-row bg-[#1a181863] rounded-lg mt-8">
            <a
              href="/accounts/login"
              className="flex w-full align-middle items-center text-center justify-center"
              onClick={handleLogout}
            >
              <Image src={logout} alt="icon" />
              <p className="p-2 text-[1em]"> Logout</p>
            </a>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Sidepane;

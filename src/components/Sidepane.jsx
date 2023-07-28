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

const Sidepane = ({
  activeTab,
  handleTabClick,
  onSettingsTabChange,
  newtabname,
}) => {
  const currentRoute = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(!isMenuOpen);
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
    const handleResize = () => {
      if (window.innerWidth > 850) {
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
  }

  return (
    <div className="h-[100vh] overflow-scroll bottom-0 scrollbar-hide w-full z-50">
      {isMenuOpen ? (
        <div
          id="sidepane"
          className="bg-[#232529] overflow-y-scroll scrollbar-hide h-screen   text-white flex flex-col z-50 p-5 md:relative "
        >
          <div className="top-0 right-2 absolute text-white flex md:hidden ">
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
              <a href="/settings/manage_team" passHref>
                <div
                  className="flex cursor-pointer"
                  onClick={toggleSettingsDropdown}
                >
                  {getIcon("settings")}
                  <span className="ml-2">Settings</span>
                  <Image
                    src={isSettingsDropdownOpen ? droped : notdroped}
                    alt="icon"
                    className="ml-auto"
                  />
                </div>
              </a>
              {renderSubMenu(
                "settings",
                <div className="flex flex-col">
                  <Link
                    href="/settings/manage_team"
                    passHref
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
                  <Link href="/settings/account" passHref>
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
                  {/* <Link href="/settings/billing" passHref>
                    <div
                      className="flex p-2 cursor-pointer items-center"
                      onClick={() => handleSubTabClick("billing")}
                    >
                      <Image
                        src={
                          currentRoute === "/settings/billing"
                            ? radioactive
                            : radioinactive
                        }
                        className="w-[1em]"
                        alt="icon"
                      />
                      <p className="font-medium ml-2">Billing</p>
                    </div>
                  </Link> */}
                </div>
              )}
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

export default Sidepane;

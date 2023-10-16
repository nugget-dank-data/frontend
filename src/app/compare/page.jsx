"use client";
import React, { useEffect, useState, usePathname } from "react";
import Filters from "./filters";
import Sidepane from "@/components/Sidepane";
import Navbar from "@/components/Navbar";

const Compare = () => {
  const [activeTab, setActiveTab] = useState("");
  const [settingstab, setSettingstab] = useState("manage_team");
  const [menustate, setMenustate] = useState(true);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [issettingsPage, setIsSettingsPage] = useState(false);
  const [is404Route, setIs404Route] = useState(false);

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

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount
  }, []);

  useEffect(() => {
    const pathName = window.location.pathname;
    const tabName = pathName.substring(1);
    setActiveTab(tabName);

    setIsLoginPage(
      pathName.includes("/accounts") ||
        pathName.includes("/verify-email/") ||
        pathName.includes("/settings") ||
        pathName.includes("/admin") ||
        pathName.includes("/privacy_policy") ||
        pathName.includes("/terms_of_use")
    );

    setIsSettingsPage(
      pathName.includes("/accounts") ||
        pathName.includes("/verify-email/") ||
        pathName.includes("/admin")
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
  // useEffect(() => {
  //   const token = sessionStorage.getItem("login_key");

  //   const isUserInSession = !!token;
  //   console.log("userinsession", isUserInSession);

  //   if (!isUserInSession) {
  //     window.location.href = "/accounts/login";
  //     console.log("reload Test fAILED");
  //   }
  // }, []);
  return (
    <div>
<div className="flex w-full relative">
{/* <div className="bottom-0 flex-wrap sticky w-fit sm:w-1/5 top-0 flex z-50 h-screen">
    <Sidepane
      activeTab={activeTab}
      handleTabClick={handleTabClick}
      onSettingsTabChange={handleSettingsTabChange}
      isMenuOpen={menustate}
      togglemenu={setMenu}
    />
  </div> */}
  <div className="flex w-full flex-col">
    <div className="w-full sticky top-0">
      {/* <Navbar isMenuOpen={menustate} togglemenu={setMenu} /> */}
    </div>

    <div className="w-full">
      <Filters />
    </div>
  </div>
</div>

</div>

  );
};

export default Compare;

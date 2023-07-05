import React from "react";

import Image from "next/image";
import Link from "next/link";

const OptionsComponent = ({ user, sendUserDetails }) => {
  const userid = user?.id;
  const username = user?.userName;

  const handleActivateUser = () => {
    // console.log("Activate User");
  };

  const handleBlacklistUser = () => {
    // console.log("Blacklist User");
  };

  const HandleViewDetails = () => {
    console.log(userid);
  };

  return (
    <div className="w-[180px] flex font-sans right-[-2em] z-50 absolute bg-[#000000] mr- rounded-lg p-3 gap-2">
      <ul className="options-menu text-[16px] text-right">
        <div className="flex flex-row mt-3 cursor-pointer">
          {/* <Image src={viewdetails} alt="act.." /> */}
          <Link href={`users/${userid}`} onClick={HandleViewDetails} className="ml-3">
            Edit user
          </Link>
        </div>
        <div className="flex flex-row mt-3 cursor-pointer ">
          {/* <Image src={blacklistuser} alt="act.." /> */}
          <li onClick={handleBlacklistUser} className="ml-3">
            Edit Stores
          </li>
        </div>
        <div className="flex flex-row mt-3 cursor-pointer ">
          {/* <Image src={activateusers} alt="act.." /> */}
          <li onClick={handleActivateUser} className="ml-3">
            Reset Passwords
          </li>
        </div>
        <div className="flex flex-row mt-3 cursor-pointer ">
          {/* <Image src={activateusers} alt="act.." /> */}
          <li onClick={handleActivateUser} className="ml-3">
            Permissions
          </li>
        </div>
        <div className="flex flex-row mt-3 cursor-pointer border-b ">
          {/* <Image src={activateusers} alt="act.." /> */}
          <li onClick={handleActivateUser} className="ml-3">
            Autopopulate
          </li>
        </div>
        <div className="flex flex-row mt-3 cursor-pointer ">
          {/* <Image src={activateusers} alt="act.." /> */}
          <li onClick={handleActivateUser} className="ml-3">
            Delete Account
          </li>
        </div>
      </ul>
    </div>
  );
};

export default OptionsComponent;
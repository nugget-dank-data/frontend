import React from "react";
// import activateusers from '../images/icons/activateuser.svg';
// import blacklistuser from '../images/icons/blacklistuser.svg';
// import viewdetails from '../images/icons/eye.svg';
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
    <div className="w-[180px] global-blue flex font-sans right-[-2em] z-50 absolute bg-[#FFFF] rounded-lg p-3 gap-2">
      <ul className="options-menu text-[16px] text-right">
        <div className="flex flex-row mt-3 cursor-pointer">
          {/* <Image src={viewdetails} alt="act.." /> */}
          <Link href={`users/${userid}`} onClick={HandleViewDetails} className="ml-3">
            View Details
          </Link>
        </div>
        <div className="flex flex-row mt-3 cursor-pointer ">
          {/* <Image src={blacklistuser} alt="act.." /> */}
          <li onClick={handleBlacklistUser} className="ml-3">
            Blacklist User
          </li>
        </div>
        <div className="flex flex-row mt-3 cursor-pointer ">
          {/* <Image src={activateusers} alt="act.." /> */}
          <li onClick={handleActivateUser} className="ml-3">
            Activate User
          </li>
        </div>
      </ul>
    </div>
  );
};

export default OptionsComponent;
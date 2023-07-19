import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useOutsideClickHandler from "@/components/clickoutside";

const OptionsComponent = ({ user, showeditUser, handleclose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const userid = user?.id;
  
  const optionsRef = useRef(null);

  const handleActivateUser = () => {
    handleclose()
  };

  const handleBlacklistUser = () => {
    handleclose()
  };

  const handleEditUser = () => {
    showeditUser(true);
    setIsOpen(!isOpen);
    handleclose()
  };

  // Call the hook to handle outside clicks for closing the options
  useOutsideClickHandler(optionsRef, () => setIsOpen(false));

  return (
    <div className="w-[180px] flex right-[-2em] z-50 absolute options-comp text-white bg-[#000000] rounded-lg p-3 gap-2">
      {/* {isOpen && ( */}
      <ul className="options-menu text-[16px] text-right options-comp">
        <div className="flex flex-row mt-3 cursor-pointer options-comp">
          <span onClick={handleEditUser} className="ml-3 options-comp">
            Edit user
          </span>
        </div>
        <div className="flex flex-row mt-3 cursor-pointer ">
          <li onClick={handleBlacklistUser} className="ml-3 options-comp">
            Edit Stores
          </li>
        </div>
        <div className="flex flex-row mt-3 cursor-pointer ">
          <li onClick={handleActivateUser} className="ml-3 options-comp">
            Reset Passwords
          </li>
        </div>
        <div className="flex flex-row mt-3 options-comp cursor-pointer ">
          <li onClick={handleActivateUser} className="ml-3 options-comp">
            Permissions
          </li>
        </div>
        <div className="flex flex-row mt-3 cursor-pointer border-b  options-comp">
          <li onClick={handleActivateUser} className="ml-3 options-comp">
            Autopopulate
          </li>
        </div>
        <div className="flex flex-row mt-3 cursor-pointer options-comp">
          <li onClick={handleActivateUser} className="ml-3 options-comp">
            Delete Account
          </li>
        </div>
      </ul>
      {/* )} */}
    </div>
  );
};

export default OptionsComponent;

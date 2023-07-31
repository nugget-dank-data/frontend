import React, { useState, useEffect } from "react";
import Image from "next/image";
import close from "../../../images/close.svg";
import { RiDownload2Line } from 'react-icons/ri';
import axios from "axios";
import ProgressBar from './progressbar';

const Download = (prop) => {
  

  return (
    <div className="flex w-full items-center justify-center h-screen left-0 right-0 top-0 z-50 bg-[#bbbabaeb] fixed">
      <div className="rounded-xl bg-[#ffff] relative  flex flex-col p-4 ">
        <div className="top">
          <Image
            src={close}
            alt="cc"
            onClick={prop.handleclose}
            className="w-[1.5em] mr-2 mt-2 float-right cursor-pointer"
          />
        </div>
        <div className="p-4 mt-8 m-auto">
          {/* Confirmation Text */}
          <p className="text-center text-xl font-semibold mb-12">You are about to download {prop.compsetlength} compsets</p>
          
          {/* Download Button */}
          <button
            type="submit"
            className="bg-[#7F56D9] text-white text-[1.4em] w-full p-2 hover:bg-[#5c35af] rounded-xl m-auto mt-6 flex items-center justify-center"
          >
            <RiDownload2Line className="mr-2" /> Download
          </button>
        </div>

        <p
          className="text-center text-[#7F56D9] cursor-pointer mt-4"
          onClick={prop.handleclose}
        >
          Cancel
        </p>
      </div>
    </div>
  );
};

export default Download;

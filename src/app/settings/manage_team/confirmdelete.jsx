import React, {useState, useEffect} from 'react'
import ProgressBar from '@/app/competitive_sets/components/progressbar'
import Image from 'next/image'

import close from "../../../images/close.svg";


const ConfirmDelete = (prop) => {

    const [success, setSuccess] = useState(false)

    const handleSubmit = ()=>{
        prop.handleclose()
    }

    const Close = ()=>{
        prop.handleclose()
        prop.closeoptions()
    }

  return (
    <div className="flex w-full top-0 left-0 right-0 h-full z-50 bg-[#32313197] absolute">
    <div className="rounded-xl bg-[#ffff] w-[38%] flex flex-col m-auto p-4 mt-[5%] relative ">
    <ProgressBar isVisible={success} />
      <div className="top">
        <Image
          src={close}
          alt="cc"
          onClick={Close}
          className="w-[1.5em] mr-2 mt-2 float-right cursor-pointer"
        />
      </div>

      <div className="heading text-[1.5em]  m-auto flex flex-col items-center justify-center font-bold text-center">
        <h1>Delete Account</h1>

        <p className="font-light  text-[#787878] text-[0.8em] text-center justify-center align-middle">Are you sure to delete the user?</p>
      </div>

      <div className="form flex flex-col p-4">
        
       
         
          <span
            className="p-4 text-center justify-center rounded-lg mb-4 focus:outline-none focus:border-[#7F56D9]"
            
          >
            {prop.email}</span>
         
         <button
            type="submit"
            className="bg-[#ed2323] text-white text-[1.4em] w-full p-2 hover:bg-[#5c35af] rounded-xl m-auto "
          >
            Delete
          </button>
        
      </div>

      <p
        className="text-center text-[#7F56D9] cursor-pointer"
        onClick={Close}
      >
        cancel
      </p>
    </div>
  </div>
  )
}

export default ConfirmDelete
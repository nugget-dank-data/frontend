import React, {useState, useEffect} from 'react'
import ProgressBar from '@/app/competitive_sets/components/progressbar'
import Image from 'next/image'
import close from "../../../images/close.svg";



const Permissions = (prop) => {

    const [success, setSuccess] = useState(false)

    const Close = ()=>{
        prop.handleclose()
        prop.closeoptions()
    }


  return (
    <div className="flex w-full top-0 left-0 right-0 h-full z-50 bg-[#32313197] absolute">
    <div className="rounded-xl bg-[#ffff] w-[35%] flex flex-col m-auto p-4 mt-[5%] relative ">
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
        <h1>Edit Permissions</h1>

       
      </div>

     <div className="form flex flex-col p-4 ">
        <div className="border rounded-2xl flex flex-col px-4 justify-evenly ">
         <label htmlFor="permissions" className='mt-1 pb-2 pl-2 text-[#6a6a6a]'>permissions</label>
     <select
                  name=""
                  id="permissions"
                  className=" bg-white focus:outline-none rounded-lg pb-3"
                >
                  <option value="" className="text-[#090909b1]">permission 1</option>
                </select>
                </div>

                <button
              type="submit"
              className="bg-[#7F56D9] text-white text-[1.4em] w-full p-2 hover:bg-[#5c35af] rounded-xl m-auto mt-6"
            >
              Save changes
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

export default Permissions
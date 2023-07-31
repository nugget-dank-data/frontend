import React from "react";

const Compsetprop = ({ closeFunction }) => {

    const handleSubmit = () => {
        closeFunction();
        //to-do
        //implement submit logic
    }
  return (
    <div className="flex w-full items-center justify-center h-screen left-0 right-0 top-0 z-50 bg-[#bbbabaeb] fixed">
      <div className="rounded-xl bg-[#ffff] relative  flex flex-col p-4 w-[35%] ">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={closeFunction}
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      


      <h2 className="font-bold text-[1.4em] text-center p-4">Select a Comp-set</h2>
      <div className="flex flex-col justify-center items-center m-4 ">
      <div className="relative w-full">
  <p className="z-50 absolute top-0 text-[#8f8d8d] ml-4 left-2">comp-set</p>
  <select
    name=""
    id=""
    placeholder="comp-set"
    className="w-full py-4 pt-8 bg-transparent border focus:outline-none px-4 text-[1.2em] rounded-xl mb-11"
  >
    <option value="" className="" >{'' || 'compset1'}</option>
    
  </select>
</div>


      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-[#7F56D9] text-white w-full rounded-xl p-4 m-auto"
      >
        Select comp-set
      </button>
      
      <p className="text-[#7F56D9] cursor-pointer mt-4" onClick={closeFunction}>cancel</p>
      </div>
      </div>
    </div>
  );
};

export default Compsetprop;

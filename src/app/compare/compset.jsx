import React from "react";

const Compsetprop = ({ closeFunction }) => {

    const handleSubmit = () => {
        closeFunction();
        //to-do
        //implement submit logic
    }
  return (
    <div className="flex w-full items-center justify-center h-screen left-0 right-0 top-0 z-50 bg-[#bbbabaeb] fixed">
      <div className="rounded-xl bg-[#ffff] relative  flex flex-col p-4 ">
      <h2>Select a Comp-set</h2>

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
      <div className="flex flex-col justify-center items-center">
      <select name="" id="" placeholder="comp-set" className="p-3 w-full active:border-none after:border-none rounded-lg m-4">
        <option value="">{'' || 'compset1'}</option>
        
      </select>

      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-[#7F56D9] text-white w-full rounded-lg p-2 m-auto"
      >
        Select comp-set
      </button>
      <a href="#" className="mt-4 mb-4 text-[#8a206f]">View in accelerated full screen [beta]</a>
      <p className="text-[#8a206f] cursor-pointer" onClick={closeFunction}>cancel</p>
      </div>
      </div>
    </div>
  );
};

export default Compsetprop;

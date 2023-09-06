import React, { useState } from "react";
import close from "../../../images/close.svg";
import Image from "next/image";

const Newcompset = ({ handleclose }) => {
  const [compsetName, setCompsetName] = useState("");
  const [organization, setOrganization] = useState(2);
  const [stores, setStores] = useState([]);

  const endpoint = "http://35.229.42.75:420/users/organization-compset/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const compset = {
      name: compsetName,
      organization: 1,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(compset),
      });

      if (response.ok) {
        console.log("Compset created successfully!");
      } else {
        console.log("Failed to create compset");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (
    <div className="flex w-full top-0 left-0 right-0 h-full z-50 bg-[#32313197] absolute">
      <div className="rounded-xl bg-[#ffff] flex flex-col m-auto p-4 mt-[5%] ">
        <div className="top">
          <Image
            src={close}
            alt="cc"
            onClick={handleclose}
            className="w-[1.5em] mr-2 mt-2 float-right cursor-pointer"
          />
        </div>

        <div className="heading text-[1.5em] font-bold text-center">
          <h1>Create New Comp Set</h1>
        </div>

        <div className="form flex flex-col p-4">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="text" className="text-[1.2em] font-bold mb-2 mt-2">
              Compset Name (Optional)
            </label>
            <input
              className="p-4 border w-[30em] rounded-lg mb-4"
              type="text"
              placeholder="Name your compset"
              value={compsetName}
              onChange={(e) => setCompsetName(e.target.value)}
            />

            <label htmlFor="text" className="text-[1.2em] font-bold mb-2 mt-2">
              Your shop
            </label>
            <input
              className="p-4 border w-[30em] rounded-lg mb-4"
              type="text"
              placeholder="search main stores"
              value={stores}
              onChange={(e) => setStores(e.target.value)}
            />

            <div className="stores flex flex-col">
              <label
                htmlFor="text"
                className="text-[1.2em] font-bold mb-2 mt-2"
              >
                Competitive Stores
              </label>
              <div className="flex gap-4 w-full">
                <span className="rounded-lg m-0 p-3 h-1/2 justify-center items-center text-[#4d0798] bg-[#9d9d9d3b] flex">
                  #{""}
                </span>
                <select
                  name=""
                  id=""
                  className="p-3 w-full bg-white border rounded-lg"
                >
                  <option value="">Search a store</option>
                </select>
                <span className="rounded-[1em] border bg-[#7F56D9] flex items-center cursor-pointer text-white m-auto h-1/2 px-6 text-center">
                  add
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#7F56D9] text-white text-[1.4em] w-full p-2 hover:bg-[#5c35af] rounded-xl m-auto mt-6"
            >
              Create New Compset
            </button>
          </form>
        </div>

        <p
          className="text-center text-[#7F56D9] cursor-pointer"
          onClick={handleclose}
        >
          cancel
        </p>
      </div>
    </div>
  );
};

export default Newcompset;

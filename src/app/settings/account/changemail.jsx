import React, { useState, useEffect } from "react";
import Image from "next/image";
import close from "../../../images/close.svg";
import axios from "axios";
import ProgressBar from "@/app/competitive_sets/components/progressbar";

const ChangeEmail = (prop) => {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(0);
  const [isorganizationstore, setisOrganizationstore] = useState(false);
  const [organizationId, setOrganizationId] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  

  useEffect(() => {
    // Fetch stores for a specific organization from the API endpoint
    const fetchStores = async () => {
      try {
        const token = localStorage.getItem("login_key");
        const headers = {
          Authorization: `Token ${token}`,
        };

        const response = await axios.get(
          "http://34.75.96.129:420/users/organization-store/",
          {
            params: { organization_id: organizationId },
            headers: headers,
          }
        );
        const data = response.data;
        console.log("Fetched data:", data);
        setStores(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("login_key");
      const headers = {
        Authorization: `Token ${token}`,
      };
      const data = {
        organization_compset_id: prop.compsetid,
        store_id: selectedStore,
        is_organization_store: isorganizationstore,
      };

      const endpoint =
        "http://34.75.96.129:420/users/organization-compset-store/";
      const response = await axios.post(endpoint, data, { headers: headers });
      console.log(response)
      
      setSuccessMessage(response.statusText);
      if (response.status==201) {
        setTimeout(() => {
          setSuccessMessage("");
          prop.handleclose();
        }, 4000);
      }

      setSelectedStore("");
    } catch (error) {
      console.error("Error adding stores to organization:", error);

      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred while adding the store.");
      }
    }
  };

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
        


        <div className="heading text-[1.5em] font-bold text-center">
          <h1>Change email</h1>
        </div>

        <div className="form flex flex-col p-4">
        <ProgressBar isVisible={!!successMessage} />
          {successMessage && (
            <div className="success-message rounded-lg bg-[#6df8aed9] text-[#06b100]">{successMessage}</div>
          )}

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="email flex px-2 flex-col border rounded-lg m-4 w-[25em] ">
            <label htmlFor="email" className="text-[0.9em] text-[#565555] pl-4  ">
              New email
            </label>
           <input className="border-none w-full px-4 focus:outline-none focus:border-none active:border-none " type="email" name="email" id="email" />
           </div>

           <div className="password flex px-2 flex-col border rounded-lg m-4 w-[25em]">
            <label htmlFor="password" className="text-[0.9em] text-[#565555] pl-4 ">
              Current password
            </label>
           <input className="border-none focus:outline-none px-4 w-full " placeholder="Password" type="password" name="password" id="password" />
           </div>
            <button
              type="submit"
              className="bg-[#7F56D9] text-white text-[1.4em] w-full p-2 hover:bg-[#5c35af] rounded-xl m-auto mt-6"
            >
              Submit
            </button>
          </form>
        </div>

        <p
          className="text-center text-[#7F56D9] cursor-pointer"
          onClick={prop.handleclose}
        >
          Cancel
        </p>
      </div>
    </div>
  );
};

export default ChangeEmail;
 
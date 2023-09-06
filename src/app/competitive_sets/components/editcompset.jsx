import React, { useState, useEffect } from "react";
import Image from "next/image";
import close from "../../../images/close.svg";
import axios from "axios";
import ProgressBar from "./progressbar";
import { FaSync } from "react-icons/fa";

const EditCompset = (prop) => {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(0);
  const [isorganizationstore, setisOrganizationstore] = useState(false);
  const [organizationId, setOrganizationId] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [compsetname, setCompsetname] = useState("");

  useEffect(() => {
    setCompsetname(prop.compset.name);
  }, [prop.compset.name]);

  useEffect(() => {
    // Fetch stores for a specific organization from the API endpoint
    const fetchStores = async () => {
      try {
        const token = sessionStorage.getItem("login_key");
        const headers = {
          Authorization: `Token ${token}`,
        };

        const response = await axios.get(
          "http://35.229.42.75:420/users/organization-store/",
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
      const token = sessionStorage.getItem("login_key");
      const headers = {
        Authorization: `Token ${token}`,
      };
      const data = {
        organization_compset_id: prop.compsetid,
        store_id: selectedStore,
        is_organization_store: isorganizationstore,
      };

      const endpoint =
        "http://35.229.42.75:420/users/organization-compset-store/";
      const response = await axios.post(endpoint, data, { headers: headers });
      console.log(response);

      setSuccessMessage(response.statusText);
      if (response.status == 201) {
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

  const handleInputChange = (event) => {
    event.stopPropagation();
  };

  const handleCompsetNameChange = (event) => {
    setCompsetname(event.target.value);
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
          <h1>Edit Compset Name</h1>
        </div>

        <div className="form flex flex-col p-4">
          <ProgressBar isVisible={!!successMessage} />
          {successMessage && (
            <div className="success-message rounded-lg bg-[#6df8aed9] text-[#06b100]">
              {successMessage}
            </div>
          )}

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <form className="flex flex-col items-center">
            <div className="flex border w-[20em] rounded-2xl items-center">
              <input
                type="text"
                name="name"
                id="name"
                value={compsetname}
                onChange={handleCompsetNameChange}
                onClick={handleInputChange}
                className="px-4 py-3 w-full focus:outline-none"
              />
              <FaSync style={{ color: '#7F56D9' }} size={'1.3em'} />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-[#7F56D9] text-white text-[1.4em] w-full p-2 hover:bg-[#5c35af] rounded-xl m-auto mt-6"
            >
              Confirm
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

export default EditCompset;

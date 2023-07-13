import React, { useState, useEffect } from "react";
import NewOrganization from "./createneworganization";
import plus from "../../../../images/pluswhite.svg";
import Image from "next/image";
import Users from "./users";

const Organizations = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [organizations, setOrganizations] = useState([]);

  const handleAddOrg = () => {
    setShowCreate(true);
  };

  const handleCreateOrg = () => {
    setShowCreate(!showCreate);
  };

  useEffect(() => {
    fetch("https://64a301f3b45881cc0ae5ff1e.mockapi.io/uses")
      .then((response) => response.json())
      .then((data) => {
        setOrganizations(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className=" min-h-[100vh] flex flex-col relative overflow-y-scroll scrollbar-hide">
      
      <div>
        <div className="w-full flex justify-between p-6">
          <div className="flex justify-center items-end">
            <div className="mr-4 text-2xl font-bold">
              <h1>Organizations</h1>
            </div>
            <div className="flex items-center rounded-lg border">
              <p className="mr-2 ">Total:</p>
              <span>{organizations.length || 0}</span>
            </div>
          </div>

          <button
            onClick={handleCreateOrg}
            className="flex ml-3 text-white items-center p-2 rounded-lg text-center bg-[#2804ac]"
          >
            <Image src={plus} alt="icon" className="w-8" /> Create Organization
          </button>
        </div>
      {showCreate && <NewOrganization handleAddOrg={handleAddOrg} handleclose={handleCreateOrg} />}
      </div>

      <Users />
    </div>
  );
};

export default Organizations;

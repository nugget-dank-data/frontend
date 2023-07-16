import React, { useState, useEffect } from "react";
import plus from "../../../../images/pluswhite.svg";
import Image from "next/image";
import { BsPlus } from "react-icons/bs";
import axios from "axios";

const NewOrganization = ({ handleAddOrg, handleclose }) => {
  const [organizationName, setOrganizationName] = useState("");
  const [organizationOwner, setOrganizationOwner] = useState("");
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [ownerLastName, setOwnerLastName] = useState("");
  const [subsidiaryCount, setSubsidiaryCount] = useState(0);
  const [subsidiaryAccounts, setSubsidiaryAccounts] = useState([]);
  const [maxAccountId, setMaxAccountId] = useState(0);
  const roleOptions = ["Role 1", "Role 2", "Role 3"];

  const url = "http://34.75.96.129:420/users/organization/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem("user_id");

    const organizationData = {
      name: organizationName,
      owner: user_id,
    };

    try {
      const token = localStorage.getItem("login_key");
      const headers = {
        Authorization: `Token ${token}`,
      };

      const response = await axios.post(url, organizationData, { headers });

      if (response.status === 201) {
        const data = response.data;
        console.log("Organization created:", data);
      } else {
        console.error("Failed to create organization:", response.status);
      }
    } catch (error) {
      console.error("Error creating organization:", error);
    }

    // Reset the form fields
    setOrganizationName("");
    setOrganizationOwner("");
    setOwnerFirstName("");
    setOwnerLastName("");
  };
  const handleAddSubsidiary = () => {
    const newAccount = {
      id: maxAccountId + 1,
      email: "",
    };

    setMaxAccountId(maxAccountId + 1);
    setSubsidiaryAccounts([...subsidiaryAccounts, newAccount]);
  };

  useEffect(() => {
    handleAddSubsidiary(); // Add a default subsidiary account on component initialization
  }, []);

  return (
    <div className="z-50 bg-gray-200 absolute top-0 left-0 right-0 justify-end items-end min-h-full flex-grow w-full">
      <div className="bg-white flex flex-col min-w-[40%] rounded-lg float-right text-center m-24 items-center  ">
        <button onClick={handleclose}>close</button>
        <h1 className="text-center text-[2em] mt-8">Create New Organization</h1>
        <form onSubmit={handleSubmit} className="flex flex-col m-4 p-3 gap-3">
          <label className="text-left justify-start" htmlFor="Organizationname">
            Organization Name
          </label>
          <input
            type="text"
            name="Organizationname"
            id="Organizationname"
            placeholder="Organization name"
            value={organizationName}
            className="p-3 rounded-lg border"
            onChange={(e) => setOrganizationName(e.target.value)}
          />

          <label
            className="text-left justify-start"
            htmlFor="Organizationowner"
          >
            Organization owner
          </label>
          <input
            type="email"
            owner="Organizationowner"
            id="Organizationowner"
            placeholder="Owner email"
            value={organizationOwner}
            className="p-3 rounded-lg border"
            onChange={(e) => setOrganizationOwner(e.target.value)}
          />

          <label className="text-left justify-start" htmlFor="Ownername">
            Organization Owner's Name
          </label>
          <div className="flex justify-between gap-6">
            <input
              type="text"
              name="Ownername"
              id="Ownername"
              placeholder="First name"
              value={ownerFirstName}
              className="p-3 rounded-lg border"
              onChange={(e) => setOwnerFirstName(e.target.value)}
            />
            <input
              type="text"
              name="Ownerlastname"
              id="Ownerlastname"
              placeholder="Last name"
              value={ownerLastName}
              className="p-3 rounded-lg border"
              onChange={(e) => setOwnerLastName(e.target.value)}
            />
          </div>

          <div className="subsidaryaccount rounded-md bg-[#9d9d9d3b] flex flex-col">
            <label
              className="text-left w-full bg-red-200 float-left text-[1.3em] justify-start"
              htmlFor="Organizationowner"
            >
              Subsidiary Accounts
            </label>
            <div className="flex flex-col">
              {subsidiaryAccounts.map((account) => (
                <div key={account.id} className="flex flex-col p-4 gap-4">
                  <div className="flex gap-5">
                    <span className="rounded-lg flex items-center px-2 h-[2em] shadow-2xl border">
                      #{account.id}
                    </span>
                    <input
                      type="email"
                      name={`email-${account.id}`}
                      id={`email-${account.id}`}
                      placeholder="Email Address"
                      value={account.email}
                      className="p-3 rounded-md active:border-none w-full"
                      onChange={(e) => {
                        const updatedAccounts = subsidiaryAccounts.map((acc) =>
                          acc.id === account.id
                            ? { ...acc, email: e.target.value }
                            : acc
                        );
                        setSubsidiaryAccounts(updatedAccounts);
                      }}
                    />
                  </div>
                  <select
                    value={account.role}
                    className="w-[100%] p-4 bg-white rounded-lg text-[#060606cb] "
                    onChange={(e) => {
                      const updatedAccounts = subsidiaryAccounts.map((acc) =>
                        acc.id === account.id
                          ? { ...acc, role: e.target.value }
                          : acc
                      );
                      setSubsidiaryAccounts(updatedAccounts);
                    }}
                  >
                    {/* <option value="">Select Role</option> */}
                    {roleOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-2 m-auto items-start ml-0 rounded-lg float-left text-[#4d0798] bg-[#9d9d9d3b] flex "
            onClick={handleAddSubsidiary}
          >
            <BsPlus
              value={{ style: { className: "bg-blue-300 w-8" } }}
              size={"1.3em"}
            />
            add
          </div>

          <div className="search flex flex-col">
            <label className="text-left justify-start" htmlFor="search">
              Organization Owned Stores
            </label>
            <input
              type="search"
              name="search"
              id="Ownerlastname"
              placeholder="Organization Owned Stores"
              value={""}
              className="p-3 rounded-lg border"
              onChange={(e) => setOwnerLastName(e.target.value)}
            />
          </div>

          <div className="plans flex flex-col">
            <label className="text-left justify-start" htmlFor="plans">
              Select Plan For Organization
            </label>
            <select
              name="plans"
              id="plans"
              className=" text-[#858585cb] rounded-lg p-4 bg-white border"
              placeholder="select a plan"
            >
              <option selected>Add some plan</option>
              <option value="">plan1</option>
              <option value="">plan2</option>
            </select>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white justify-center text-[1.2em] items-center py-4 rounded-lg text-center bg-[#2804ac]"
          >
            Create Organization
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewOrganization;

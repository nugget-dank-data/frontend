import React, { useState } from "react";

const NewOrganization = (handleAddOrg) => {
  const [organizationName, setOrganizationName] = useState("");
  const [organizationOwner, setOrganizationOwner] = useState("");
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [ownerLastName, setOwnerLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form values
    const organizationData = {
      organizationName,
      organizationOwner,
      ownerFirstName,
      ownerLastName,
    };

    // Perform the POST request here using the organizationData and user ID

    // Reset the form values
    setOrganizationName("");
    setOrganizationOwner("");
    setOwnerFirstName("");
    setOwnerLastName("");
  };

  return (
    <div className="m-auto justify-center bg-gray-500 absolute h-screen w-full">
      <div className="bg-white flex m-auto flex-col w-[40%] ">
        <h1>Create New Organization</h1>
        <form onSubmit={handleSubmit} className="flex flex-col m-4 p-4 gap-4">
          <label htmlFor="Organizationname">Organization Name</label>
          <input
            type="text"
            name="Organizationname"
            id="Organizationname"
            placeholder="Organization name"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
          />

          <label htmlFor="Organizationowner">Organization owner</label>
          <input
            type="email"
            owner="Organizationowner"
            id="Organizationowner"
            placeholder="Owner email"
            value={organizationOwner}
            onChange={(e) => setOrganizationOwner(e.target.value)}
          />

          <label htmlFor="Ownername">Organization Owner's Name</label>
          <div className="flex">
            <input
              type="text"
              name="Ownername"
              id="Ownername"
              placeholder="First name"
              value={ownerFirstName}
              onChange={(e) => setOwnerFirstName(e.target.value)}
            />
            <input
              type="text"
              name="Ownerlastname"
              id="Ownerlastname"
              placeholder="Last name"
              value={ownerLastName}
              onChange={(e) => setOwnerLastName(e.target.value)}
            />
          </div>

          <button type="submit">Create Organization</button>
        </form>
      </div>
    </div>
  );
};

export default NewOrganization;

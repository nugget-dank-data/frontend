"use client"
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

import dot from "../../../images/dot.svg";
import OptionsComponent from "../components/options";


const Teams = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const filterFormRef = useRef(null);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(undefined);
  const [startDate, setStartDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState();
  const [filterData, setFilterData] = useState({
    date: startDate,
    name: "",
    email: "",
    permissions: "",
    their_stores: "",
    monitoring_stores: "",
    last_login: "",
  });

  const formatDate = (dateString) => {
    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const date = new Date(dateString);
    return date.toLocaleString("en-US", options);
  };


  useEffect(() => {
    fetch("https://64a301f3b45881cc0ae5ff1e.mockapi.io/uses")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleOptionsClick = (event) => {
    const userId = event.currentTarget.dataset.userId;

    setSelectedUserId(userId);
  };
  

  // useEffect(() => {
  //   // Update filteredUsers whenever filterData changes
  //   const filtered = users.filter((user) => {
  //     // Apply your filtering logic based on filterData properties
  //     // For example, if the name property should match, use:
  //     return user.name.includes(filterData.name);
  //   });
  //   setFilteredUsers(filtered);
  // }, [filterData, users]);

  // const indexOfLastUser = currentPage * itemsPerPage;
  // const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  // const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // const totalItems = Math.ceil(filteredUsers.length / itemsPerPage);
  // let pageNumbers = [];

  // if (totalItems <= 7) {
  //   pageNumbers = Array.from({ length: totalItems }, (_, index) => index + 1);
  // } else if (currentPage <= 4) {
  //   pageNumbers = [1, 2, 3, 0, totalItems];
  // } else if (currentPage >= totalItems - 3) {
  //   pageNumbers = [1, 0, totalItems - 3, totalItems - 2, totalItems];
  // } else {
  //   pageNumbers = [
  //     1,
  //     0,
  //     currentPage - 1,
  //     currentPage,
  //     currentPage + 1,
  //     totalItems,
  //   ];
  // }
  const sendUserDetails = (user) => {
    console.log("User Details:", user);

    // setDetails(user);
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  const handleItemsPerPageChange = (event) => {
    const selectedItemsPerPage = Number(event.target.value);
    setItemsPerPage(selectedItemsPerPage);
    setCurrentPage(1);
  };

  const handleFilterFormSubmit = (data) => {
    console.log("Filter form submitted:", data);
    setFilterData(data);
  };

  const handleClearFilters = () => {
    setFilterData({
      date: startDate,
      name: "",
      email: "",
      username: "",
      organization: "",
      status: "",
      phonenumber: "",
    });
  };

  return (
    <div className="w-full flex flex-col text-[#181b21] p-4 font-Work-Sans">
      
        <div>

          
          <div className=" flex flex-col shadow-lg border-b border-[#0303031c] relative">
            <table className="w-full rounded-lg">
              <thead>
                <tr className="text-[0.8em]">
                  <th className="px-4 py-2 text-left">
                    <div className="flex items-center">
                      <span className="mr-1">Name</span>
                     
                    </div>
                  </th>
                  <th className="px-4 py-2 text-left">
                    <div className="flex items-center">
                      <span className="mr-1">E-mail</span>
                     
                    </div>
                  </th>
                  <th className=" px-4 py-2 text-left">
                    <div className="flex items-center">
                      <span className="mr-1">permissions</span>
                      
                    </div>
                  </th>
                  <th className=" px-4 py-2 text-left">
                    <div className="flex items-center">
                      <span className="mr-1">Their Stores</span>
                      
                    </div>
                  </th>
                  <th className=" px-4 py-2 text-left">
                    <div className="flex items-center">
                      <span className="mr-1">Monitoring Stores</span>
                      
                    </div>
                  </th>
                  <th className=" px-4 py-2 text-left">
                    <div className="flex items-center">
                      <span className="mr-1">Last Login</span>
                      
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
              {filteredUsers.map((user) => (
                  <tr key={user.id} className="border" data-user-id={user.id}>
                    <td className="p-4 text-left text-sm">{user.name}</td>
                    <td className="p-4 text-left text-sm">{user.email}</td>
                    <td className="p-4 text-left text-sm">{user.permissions}</td>
                    <td className="p-4 text-left text-sm">{user.stores}</td>
                    <td className="p-4 text-left text-sm">{user.stores}</td>
                    <td className="p-4 text-left text-sm flex justify-between relative">
                    {formatDate(user.date)}
                      {selectedUserId === user.id ? (
                        <OptionsComponent user={user} sendUserDetails={sendUserDetails} />
                      ) : (
                        <Image
                          src={dot}
                          alt="Options"
                          className="user-dot cursor-pointer"
                          data-user-id={user.id}
                          onClick={handleOptionsClick}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
           
          </div>
      
        </div>
      
    </div>
  );
};

export default Teams;



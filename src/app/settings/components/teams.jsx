"use client"
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

import dot from "../../../images/dot.svg";
import Options from "./options";
import Sidepane, {activeSettingsTab} from "@/components/Sidepane";



const Teams = ({settingstab}) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const filterFormRef = useRef(null);
  const [isoptionsVisible, setOptionsVisible] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(undefined);
  const [startDate, setStartDate] = useState(new Date());
  const [filterData, setFilterData] = useState({
    date: startDate,
    name: "",
    email: "",
    permissions: "",
    their_stores: "",
    monitoring_stores: "",
    last_login: "",
  });

  useEffect(() => {
    const tab = activeSettingsTab;
    console.log(tab);
  }, []);


// const tab = Sidepane.activeSettingsTab;
// const tab = activesettingsTab;
// console.log(typeof(tab));



  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  


  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalItems = Math.ceil(users.length / itemsPerPage);
  let pageNumbers = [];

  if (totalItems <= 7) {
    pageNumbers = Array.from({ length: totalItems }, (_, index) => index + 1);
  } else if (currentPage <= 4) {
    pageNumbers = [1, 2, 3, 0, totalItems];
  } else if (currentPage >= totalItems - 3) {
    pageNumbers = [1, 0, totalItems - 3, totalItems - 2, totalItems];
  } else {
    pageNumbers = [
      1,
      0,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      totalItems,
    ];
  }

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
    <div>
      <div>
        <div>
          {currentUsers.map((user) => (
            <div key={user.id}>
              <div>
                <div>
                  <h3>{user.orgName}</h3>
                  <p>{user.userName}</p>
                </div>
                <div>
                  <button onClick={() => setSelectedUserId(user.id)}>
                    View
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {user.phoneNumber}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Join Date:</strong>{" "}
                    {new Date(user.joinDate).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    {user.isActive ? "Active" : "Inactive"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;

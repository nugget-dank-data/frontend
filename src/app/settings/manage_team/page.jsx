"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Invite from "./invite";
import managerrole from "../../../images/userrole.svg";
import dot from "../../../images/dot.svg";
import OptionsComponent from "../components/options";
import EditUser from "../components/edituser";
import ConfirmDelete from "./confirmdelete";
import ConfirmReset from "./confirmreset";
import Permissions from "./editpermissions";
import { RiUserSettingsLine, RiUserSharedLine, RiUserLine } from 'react-icons/ri';

const useOutsideClickHandler = (ref, callback) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};

const Teams = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const optionsRef = useRef(null);
  const optionsComponentRef = useRef(null);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(undefined);
  const [startDate, setStartDate] = useState(new Date());
  const [showaddteam, setShowaddteam] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showOptions, setshowOptions] = useState(false);
  const [showPermissions, setShowPermissions] = useState(false);
  const [showconfirmPassword, setShowConfirmPassword] = useState(false);
  const [filterData, setFilterData] = useState({
    date: startDate,
    name: "",
    email: "",
    permissions: "",
    their_stores: "",
    monitoring_stores: "",
    last_login: "",
  });

  const [activeTab, setActiveTab] = useState('');
  const [settingstab, setSettingstab] = useState('manage_team');
  const [menustate, setMenustate] = useState(true);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [issettingsPage, setIsSettingsPage] = useState(false);
  const [is404Route, setIs404Route] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    async function checkIf404Route() {
      const response = await fetch(window.location.href);

      if (response.status === 404) {
        setIs404Route(true);
      }
    }

    checkIf404Route();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenustate(true); 
      } else {
        setMenustate(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount
  }, []);

  useEffect(() => {
    const pathName = window.location.pathname;
    const tabName = pathName.substring(1);
    setActiveTab(tabName);

    setIsLoginPage(
      pathName.includes('/accounts') ||
        pathName.includes('/verify-email/') ||
        pathName.includes('/settings') ||
        pathName.includes('/admin') ||
        pathName.includes('/privacy_policy') ||
        pathName.includes('/terms_of_use')
    );

    setIsSettingsPage(
      pathName.includes('/accounts') ||
        pathName.includes('/verify-email/') ||
        pathName.includes('/admin')
    );
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSettingsTabChange = (tabName) => {
    setSettingstab(tabName);
  };

  const setMenu = () => {
    setMenustate(!menustate);
  };
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
    event.stopPropagation();
    setshowOptions(!showOptions)
    const userId = event.currentTarget.dataset.userId;

    setSelectedUserId(userId);
  };

  useEffect(() => {

    const token = sessionStorage.getItem("login_key");
    
    const isUserInSession = !!token;
    console.log('userinsession',isUserInSession)
    
    if ( !isUserInSession) {
      
      
      window.location.href = '/accounts/login';
  console.log('reload Test fAILED')
    }
    }, [])

  

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

  
  const closeOptions = () => {
    setshowOptions(!showOptions)
  };

  const PermissionComponent = (permission) => {
    let IconComponent;
    let iconColor;
    
    switch (permission) {
      case 'OWNER':
        IconComponent = RiUserSettingsLine;
        iconColor = 'red';
        break;
      case 'MANAGER':
        IconComponent = RiUserSharedLine;
        iconColor = 'blue';
        break;
      case 'USER':
        IconComponent = RiUserLine;
        iconColor = 'green';
        break;
      default:
        IconComponent = RiUserSettingsLine; 
        iconColor = 'red';
    }}

  // useOutsideClickHandler(optionsRef, setSelectedUserId(undefined));

  // const handleClick = (event) => {
  //   if (optionsRef.current && !optionsRef.current.contains(event.target)) {
  //     closeOptions();
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, [optionsRef, closeOptions]);

  // const paginate = (pageNumber) => {
    // setCurrentPage(pageNumber);
  // };

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

  const togglepermissions = ()=>{
    setShowPermissions(!showPermissions);
    closeOptions()
    
  }

  const handleShowAddTeammates = () => {
    setShowaddteam(!showaddteam);
    // closeOptions()
  };

 

  const handleshowedituser = () => {
    setShowEditUser(!showEditUser);
    closeOptions()
  };

  const handleshowconfirmdelete = () => {
    setShowDelete(!showDelete);
    closeOptions()
  };

  const handleshowconfirmpassword = () => {
    setShowConfirmPassword(!showconfirmPassword);
    closeOptions()
  };

  const selectedUser = users.find((user) => user.id === selectedUserId);

  return (
    <div className="w-full flex flex-col text-[#181b21] p-4 font-Work-Sans">
      {showaddteam && <Invite handleclose={handleShowAddTeammates} />}
      {showEditUser && (
        <EditUser handleclose={handleshowedituser} user={filteredUsers} />
      )}

      {showDelete && <ConfirmDelete handleclose={handleshowconfirmdelete} email={selectedUser.email} closeoptions={closeOptions} />}
      {showconfirmPassword && 
        <ConfirmReset handleclose={handleshowconfirmpassword} email={selectedUser.email} closeoptions={closeOptions} />
      }
      {showPermissions && <Permissions handleclose={togglepermissions} closeoptions={closeOptions} />}

      <div className="nav flex justify-between">
        <div className="flex">
          <p className="font-bold p-4 text-[1.5em]">Manage Team</p>
          <div className="items-center flex">
            <span className="rounded-lg border items-center p-2 text-[1.2em] text-center">
              {filteredUsers.length}
            </span>
          </div>
        </div>
        <div className="items-center flex">
          <button
            onClick={handleShowAddTeammates}
            className="flex items-center rounded-lg text-center px-2 text-[0.9em] py-0 bg-[#7F56D9] text-white mb-2 md:mb-0 sm:py-2"
          >
            Invite Teammates
          </button>
        </div>
      </div>

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
                  <td className="text-left text-sm ">
                    <div className="flex gap-1 w-fit px-1 rounded-2xl bg-[#ede5e5] py-1 text-red-500 ">
                    {PermissionComponent(
                      user.permissions)}
                    </div>
                  </td>
                  <td className="p-4 text-left text-sm">{user.stores}</td>
                  <td className="p-4 text-left text-sm">{user.stores}</td>
                  <td className="p-4 text-left text-sm flex justify-between options-comp relative">
                    {formatDate(user.date)}
                    {showOptions && selectedUserId === user.id ? (
                      <OptionsComponent
                        ref={optionsRef}
                        user={user}
                        showeditUser={handleshowedituser}
                        handleclose={() => {
                          setSelectedUserId(undefined);
                        }}
                        optionsRef={optionsComponentRef}
                        showconfirmpassword={handleshowconfirmpassword}
                        showconfirmdelete={handleshowconfirmdelete}
                        showchangepermissions={togglepermissions}
                      />
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

"use client";
import React, { useState, useEffect } from "react";
import Teams from "./components/teams";
import Billing from "./components/billing";
import Accounts from "./components/accounts";
import Navbar from "@/components/Navbar";

const Settings = ({ }) => {


  const [teams, setTeams] = useState(true);
  const [acct, setAcct] = useState(false);
  const [bill, setBill] = useState(false)
  

  // const handleSettingsTabChange = (tabName) => {
  
  //   setSettingstab(tabName);
  // };


  const getTeamsHand =()=>{
    
    setTeams(true)
    setAcct(false)
    setBill(false)

  }
  const getaccHand =()=>{
    setTeams(false)
    setAcct(true)
    setBill(false)

  }
  const getbillHand =()=>{

    setTeams(false)
    setAcct(false)
    setBill(true)

  }

  return (
    <div className="">
      <Navbar getTeams={getTeamsHand} getAcct={getaccHand} getBill={getbillHand}  />



{teams && <Teams />}
{bill && <Billing />}
{acct && <Accounts />}

      
    </div>
  );
};

export default Settings;

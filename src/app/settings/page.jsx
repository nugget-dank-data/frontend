"use client";
import React, { useState, useEffect } from "react";
import Teams from "./manage_team/page";
import Billing from "./billing/page";
import Accounts from "./accounts/page";
import Navbar from "@/components/Navbar";

const Settings = ({ }) => {


  const [teams, setTeams] = useState(true);
  const [acct, setAcct] = useState(false);
  const [bill, setBill] = useState(false)


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

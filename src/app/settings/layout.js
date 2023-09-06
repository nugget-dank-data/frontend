"use client";
import React, { useState, useEffect } from "react";
import Teams from "./manage_team/page";
import Billing from "./billing/page";
import '../globals.css'
import Accounts from "./account/page";
import Navbar from "@/components/Navbar";
import Sidepane from "@/components/Sidepane";

export default function Settings({ children }) {

  useEffect(() => {

    const token = sessionStorage.getItem("login_key");
    
    const isUserInSession = !!token;
    console.log('userinsession',isUserInSession)
    
    if ( !isUserInSession) {
      
      
      window.location.href = '/accounts/login';
  console.log('reload Test fAILED')
    }
    }, [])
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

      <div className="w-full flex flex-col  ">{children}</div>
      
    </div>
  );
};



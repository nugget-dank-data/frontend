"use client"
import React, { useState, useEffect } from 'react';
import Teams from './components/teams';
import b from ""
const Settings = ({subtab}) => {
  // useEffect(() => {
  // }, []);

  
  
  console.log('test test',subtab)
  return (
    <div>
      <Teams settingstab={subtab} />
      
    </div>
  );
};

export default Settings;

"use client"
import React, {useEffect} from 'react'
import Filters from './filters'

const Compare = () => {
  useEffect(() => {

    const token = sessionStorage.getItem("login_key");
    
    const isUserInSession = !!token;
    console.log('userinsession',isUserInSession)
    
    if ( !isUserInSession) {
      
      
      window.location.href = '/accounts/login';
  console.log('reload Test fAILED')
    }
    }, [])
  return (
    <div className='flex w-full relative flex-col'>
      <Filters />

      

    </div>
  )
}

export default Compare
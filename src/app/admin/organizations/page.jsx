"use client"
import React from 'react'
import AdminSidepane from '../components/sidepane'
import AdminNavbar from '../components/navbar'
import Organizations from './components/organizations'
import { BrowserRouter } from 'react-router-dom'

const Adminorganizations = () => {
  return (
    <div className=''>
      <div>
      <AdminSidepane />
      </div>
      <div className=''>
      <BrowserRouter>
      <AdminNavbar />
      </BrowserRouter>
      </div>
      <Organizations />
    </div>
  )
}

export default Adminorganizations
import React from 'react'
import './admin.css'
import AdminPanel from './admincomp/AdminPanel'
import AdminNav from './admincomp/AdminNav'
const AdminComp = () => {
  return (
    <div className='admin-container'>
      <AdminPanel />
      <AdminNav />
    </div>
  )
}

export default AdminComp

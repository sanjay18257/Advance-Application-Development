import { useState } from 'react'
import './admin.css'
import Header from './Header'
import Admincomp from './Admincomp'
import Sidebar from './Sidebar'

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='ad'>  <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <Admincomp /></div>
  
    </div>
  )
}

export default Admin

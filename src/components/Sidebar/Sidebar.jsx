import { React, useState} from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import { MdOutlineTimer } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Button } from '@mui/material';
import { GiHamburgerMenu } from "react-icons/gi";
import "./Sidebar.css"



function SidebarMain () {
  const [collapsed, setCollapsed] = useState(false);

return(
<div className="container-fluid" style={{ display: 'flex', height: '100vh', minHeight: '1000px'}}>
<Sidebar className="sidebar" collapsed={collapsed} width="15vw" rootStyles={{
          background:'linear-gradient(180deg,  #258EB2 20%, rgb(26, 78, 186) 50%, rgb(0, 18, 103) 100%)'}}>
<Button id="side-button" size="large" variant="outlined" color="primary" onClick={() => setCollapsed(!collapsed)}>
<GiHamburgerMenu />
</Button>
{collapsed ? <div className='app-name-collapsed'> 
    <img src="./Logo.png"/>
</div> : <div className='app-name'> 
<img src="./Logo.png"/>
</div>
}

  <Menu className="sidebar-menu">
  <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
    <MenuItem className="menu-item"> <IoHome /> Home 
     </MenuItem>
     </NavLink>
     <NavLink
          to="timer"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
    <MenuItem className="menu-item">
    <MdOutlineTimer /> Timer
    </MenuItem>
    </NavLink>
    <NavLink
          to="notes"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
    <MenuItem className="menu-item"><FaNoteSticky /> Notes </MenuItem>
    </NavLink>
    <NavLink
          to="calendar"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
    <MenuItem className="menu-item"> <FaCalendarCheck /> Calendar </MenuItem>
    </NavLink>
  </Menu>
</Sidebar>
</div>

)
}

export default SidebarMain
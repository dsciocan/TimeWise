import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import { MdOutlineTimer } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { IoHome } from "react-icons/io5";




function SidebarMain () {

return(
<div className="container-fluid" style={{ display: 'flex', height: '100%', minHeight: '800px'}}>
<Sidebar>
<div> 
    <h1>Productivity App</h1>
</div>
  <Menu>
  <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
    <MenuItem> <IoHome /> Home 
     </MenuItem>
     </NavLink>
     <NavLink
          to="timer"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
    <MenuItem>
    <MdOutlineTimer /> Timer
    </MenuItem>
    </NavLink>
    <NavLink
          to="notes"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
    <MenuItem><FaNoteSticky /> Notes </MenuItem>
    </NavLink>
    <NavLink
          to="calendar"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
    <MenuItem> <FaCalendarCheck /> Calendar </MenuItem>
    </NavLink>
  </Menu>
</Sidebar>
</div>
)
}

export default SidebarMain
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
<div className="container-fluid" style={{ display: 'flex', height: '100%', minHeight: '800px'}}>
<Sidebar className="sidebar" collapsed={collapsed} rootStyles={{
          background:'linear-gradient(180deg, rgb(4, 114, 77) 30%, rgb(168, 229, 186) 60%, rgb(230,252,255) 100%)',}}>
<Button id="side-button" size="large" variant="outlined" color="success" onClick={() => setCollapsed(!collapsed)}>
<GiHamburgerMenu />
</Button>
<div> 
    <h1>Productivity App</h1>
</div>
  <Menu className="sidebar-menu">
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
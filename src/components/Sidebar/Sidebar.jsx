import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';


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
    <MenuItem>
     Home 
     </MenuItem>
     </NavLink>
     <NavLink
          to="timer"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
    <MenuItem>
    Timer
    </MenuItem>
    </NavLink>
    <NavLink
          to="notes"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
    <MenuItem> Notes </MenuItem>
    </NavLink>
    <NavLink
          to="calendar"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
    <MenuItem> Calendar </MenuItem>
    </NavLink>
  </Menu>
</Sidebar>
</div>
)
}

export default SidebarMain
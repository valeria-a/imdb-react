import { AppBar, Avatar, IconButton, MenuItem, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import UserAvatar from "../UserAvatar/UserAvatar";
import './Layout.css'

export default function Layout(props) {

    const currLocation = useLocation()
    console.log('Layout:', currLocation)

    let activeStyle = {
        textDecoration: "underline",
      };
    

    return(
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense" sx={{justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <MenuItem>
                    <NavLink to='/' className='nav-link'
                        style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                      }
                    >
                        Home
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to='countries/'
                            className='nav-link'
                            style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                      }>
                        Countries
                    </NavLink>
                </MenuItem>
                </Box>

                {/* <Box sx={{ flexGrow: 0, alignContent:'flex-end' }}>
                    <IconButton sx={{ p: 0 }}>
                        <Avatar src="https://media.licdn.com/dms/image/C4D03AQEK5l0IoFTNKw/profile-displayphoto-shrink_800_800/0/1572247776180?e=1683763200&v=beta&t=KGsB8-w-HpEeV2RQIMoC7uOawXKf76E2CWV_P8t9A6E" />
                    </IconButton>
                </Box> */}
                <UserAvatar user={props.user}/>
                </Toolbar>
            </AppBar>

            <Outlet />
        </Box>
    )
    
}
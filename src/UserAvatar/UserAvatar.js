import { Box } from "@mui/material"
import { Link } from "react-router-dom"

export default function UserAvatar(props) {

    let name = 'Guest'
    if (props.user) {
        name = props.user.first_name
    }

    return(
        <Box sx={{ flexGrow: 0, alignContent:'flex-end' }}>
            <p>Hello {name}</p>
            {props.user 
            ?
                <a href="" onClick={() => localStorage.clear()}>Logout</a>
            :
                <Link to='login/'>Login</Link>
            }
        </Box>
    )
    
}
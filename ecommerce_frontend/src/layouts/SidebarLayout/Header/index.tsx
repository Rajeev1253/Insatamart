import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import Search from '../../../components/Search'
import calendar from "../../../assets/svg/Calendar.svg"
import NotificationsIcon from '@mui/icons-material/Notifications';

const Headers = () => {
  return (
    <div>
        <Stack height={"90px"} sx={{bgcolor:"white"}} justifyContent={"center"}  >
            <Stack justifyContent="space-between" direction={"row"}>
                <Stack justifyContent={"flex-start"}>

            <Search/> 
                </Stack>
            <Stack width="600px"  justifyContent={"center"} direction={"row"} alignItems={"center"}>
                
                    <img src={calendar} style={{width:"16px",height:"16px"}}></img>
                    <Typography fontWeight={600}sx={{ml:1}}>
                        Monday,4th  September
                    </Typography>
                    <NotificationsIcon sx={{ml:2}}/>
            <Stack width={"300px"} direction={"row"}  justifyContent={"flex-end"} >
                <Stack sx={{mr:2}}>
                    
                <Typography fontSize={"15px"} fontWeight={"600"}>Mark Collins</Typography>
                <Typography fontSize={"10px"} color={"gray"}> Business Man</Typography>
                </Stack>
                <Avatar/>
            
            </Stack>
            </Stack>
        


            </Stack>
            

            

        </Stack>
    </div>
  )
}

export default Headers
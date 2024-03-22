import { Outlet } from "react-router-dom"
import Logo from "../../../../components/Logo"
import { Stack, Typography } from "@mui/material"
import Buttons from "../../../../components/Button"
import Dashboard from "../../../../pages/dashboard"
import img1 from "../../../../assets/svg/1.svg"
import img2 from "../../../../assets/svg/2.svg"
import img3 from "../../../../assets/svg/3.svg"
import img4 from "../../../../assets/svg/4.svg"
import img5 from "../../../../assets/svg/5.svg"


function SidebarMenu() {
    return(
        <>
        <Logo/>

        <Stack alignItems='flex-start' sx={{mt:6,ml:4,width:"100%",height:"100vh"}} >
            <Buttons text="Dashboard" icon={img1}/>
            <Buttons text="All Tickets" icon={img2}/>
            <Buttons text="Chatbots" icon={img3}/>
            <Buttons text="Order" icon={img4}/>
            <Buttons text="Customer" icon={img4}/>

            
            

        </Stack>
 
        </>
    )
}
export default SidebarMenu
import { Outlet } from "react-router-dom"
import Logo from "../../../components/Logo"
import SidebarMenu from "./SidebarMenu"
import Headers from "../Header"

function SidebarLayout() {
    return(
        <div className="adminContainer">
        <aside> 
            <SidebarMenu/>
        </aside>
            <Headers/>
            <Outlet/>
        </div>
       
       
    )
}
export default SidebarLayout
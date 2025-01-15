import { Outlet } from "react-router-dom"
import Nav from "./Nav"

function RootLayOut() {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    )
}

export default RootLayOut

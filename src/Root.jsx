import { Outlet } from "react-router-dom"
import Nav from "./Nav"

function RootLayOut() {
    return (
        <div>
            <Nav></Nav>
            <div className=" mt-10 mb-10 ml-20 mr-20 ">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default RootLayOut

import { Outlet } from "react-router-dom";
import Header from "../header/header.component";
import '../Layout/layouy.styles.scss'


const Layout = () => {


    return (

        <div className="layout">
            <Header />

            <div className="main-div">
                <Outlet />
            </div>


        </div>
    )


}

export default Layout;
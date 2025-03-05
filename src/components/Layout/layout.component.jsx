import { Outlet } from "react-router-dom";
import Header from "../header/header.component";
import '../Layout/layouy.styles.scss'
import Footer from "../Footer/footer.compnent";


const Layout = () => {


    return (

        <div className="layout">
            <Header />

            <div className="main-div">
                <Outlet />
            </div>

            <Footer/>
        </div>
    )


}

export default Layout;
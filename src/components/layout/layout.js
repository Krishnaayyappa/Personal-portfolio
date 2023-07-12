import Navigation from "./Navigation";
import Footer from "./footer";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";



const PageLayout = (props) => {
    return (
        <Fragment>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    )
}

export default PageLayout
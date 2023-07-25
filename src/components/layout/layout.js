import Navigation from "./Navigation";
import Footer from "./footer";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";



const PageLayout = (props) => {
    return (
        <Fragment>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </Fragment>
    )
}

export default PageLayout
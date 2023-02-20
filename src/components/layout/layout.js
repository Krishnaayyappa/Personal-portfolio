import Navigation from "./Navigation";
import Footer from "./footer";
import { Fragment } from "react";



const PageLayout = (props) => {
    return (
        <Fragment>
            <Navigation />
            <main>
                {props.children}
            </main>
            <Footer />
        </Fragment>
    )
}

export default PageLayout
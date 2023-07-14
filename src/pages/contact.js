import ContactDetails from "../components/content/ContactContent";
import Followme from "../components/content/followme";
import classes from "./contact.module.css"

const Contact = () => {
    return(
        <div className="fadeintext">
            <div className = {classes.contact}>
                <ContactDetails />
                <Followme />
            </div>
        </div>
    )
}

export default Contact
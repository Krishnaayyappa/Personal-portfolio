import ContactDetails from "../components/content/ContactContent";
import Followme from "../components/content/followme";
import classes from "./contact.module.css"

const Contact = () => {
    return(
        <div className={`${classes.contact} fadeintext`}>
            <ContactDetails />
            <Followme />
        </div>
    )
}

export default Contact
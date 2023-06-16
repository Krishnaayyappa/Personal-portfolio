import ContactForm from "../components/content/contactForm";
import ContactDetails from "../components/content/ContactContent";
import classes from "./contact.module.css"

const Contact = () => {
    return(
        <div className="contacts fadeintext">
            <ContactDetails />
            <ContactForm />
        </div>
    )
}

export default Contact
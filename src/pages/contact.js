import ContactForm from "../components/content/contactForm";
import ContactDetails from "../components/content/ContactContent";

const Contact = () => {
    return(
        <div className="contacts">
            <ContactDetails />
            <ContactForm />
        </div>
    )
}

export default Contact


const ContactForm = () => {
    return(
        <form>
            <div className = "formInputs">
                <label htmlFor="first-name">First Name</label>
                <input id="first-name" type="text" name="first-name" />
                <label htmlFor="last-name"> Last Name</label>
                <input id="last-name" type="text" name="last-name" />
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" />
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" name="subject" />
                <label htmlFor="message">Message</label>
                <textarea id="message" type="text" name="message" />
            </div>
        </form>
    )
}


export default ContactForm
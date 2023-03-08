

const ContactForm = () => {
    return(
        <form>
            <div className = "formInputs">
                <div className="labelinput">
                    <label htmlFor="first-name">First Name</label>
                    <input id="first-name" type="text" name="first-name" />
                </div>
                <div className="labelinput">
                    <label htmlFor="last-name"> Last Name</label>
                    <input id="last-name" type="text" name="last-name" />
                </div>
                <div className="labelinput">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" />
                </div>
                <div className="labelinput">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" name="subject" />
                </div>
                <div className="labelinput">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" type="text" name="message" />
                </div>
            </div>
        </form>
    )
}


export default ContactForm
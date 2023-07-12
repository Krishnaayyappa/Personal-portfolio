import classes from "./contactcontent.module.css"

const ContactDetails = () => {
    return (
        <div className={classes.contactcontent}>
            <div>
                <h1>Get in touch</h1>
                <p>Want to get in touch. I'd like to hear from you. Here is how you can reach me...</p>
            </div>
            <div>
                <h3>Phone</h3>
                <p>4388127170</p>
            </div>
            <div>
                <h3>Email</h3>
                <p>krishnaayyappa3@gmail.com</p>
            </div>
        </div>
    )
}

export default ContactDetails
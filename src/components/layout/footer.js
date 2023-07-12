import Followme from '../content/followme'

const Footer = () => {
    return (
        <div className = "footer">
            <hr />
            <div className = "details">
                <div className = "phone">
                    <h3>Phone</h3>
                    <p>438-812-7170</p>
                </div>
                <div className = "email">
                    <h3>Email</h3>
                    <p>krishnaayyappa3@gmail.com</p>
                </div>
                <Followme />
                <div className="copyright">
                <p>© 2023 By Krishna Narina</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
import icon from "../../images/icon.png"
import { Link, NavLink} from "react-router-dom"

const Navigation = () => {

    const navLinkStyles = (navData) => {
        return navData.isActive?"activeNav":"inactiveNav"
    }
    return (
        <header className = "header">
            <div className="logo">
                <img src = {icon} alt = "icon" />
                <Link className = "name" to = "/">Krishna Narina</Link>
            </div>
            <ul className="nav">
                <li><NavLink className = {navLinkStyles} to = "/resume">Resume</NavLink></li>
                <li>|</li>
                <li><NavLink className = {navLinkStyles} to = "/projects">Projects</NavLink></li>
                <li>|</li>
                <li><NavLink className = {navLinkStyles} to = "/contact">Contact</NavLink></li>
            </ul>
        </header>
    )
}

export default Navigation
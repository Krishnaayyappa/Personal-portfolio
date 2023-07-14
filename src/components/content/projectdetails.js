import classes from "./projectdetails.module.css"
import TopNavigation from "./topnavigation"

export default function ProjectDetails({details}){
    return (
        <div className={classes.layout}>
            <div className={classes.content}>
                <h1>{details.projName}</h1>
                <p className={classes.bold}>{details.overView}</p>
                <img src={details.image} alt={details.projName} />
                <p className={classes.bold}>Project Description:</p>
                <p className = {classes.light}>{details.projDesc}</p>
                <p className={classes.bold}>Roles and Responsibilities:</p>
                <ul>{details.roles.map(role => <li className = {classes.role} key={role.id}>{role.role}</li>)}</ul>
                <p className={classes.bold}>Tools and Technologies used:</p>
                <p className={classes.light}>{details.tools}</p>
            </div>
            <TopNavigation />
        </div>
        
    )
}
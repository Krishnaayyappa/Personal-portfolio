import classes from "./projects.module.css"
import banking from "../images/banking.jpg"



const Projects =  () => {
    return (
        <div className='fadeintext' >
            <h1 className={classes.heading}>Projects</h1>
            <h2>Professional projects</h2>
            <div>
                <img className = {classes.image} src={banking} alt="banking"/>
            </div>
            
        </div>
        
    )
}

export default Projects;
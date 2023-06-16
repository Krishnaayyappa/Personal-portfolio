import { Fragment } from "react";
import classes from "./projects.module.css"
import Project from "../components/content/Project";


const Projects =  () => {
    return (
        <div className='fadeintext' >
            <div>
                <h1 className = {classes.heading}>Professional Projects</h1>
                <Project />
            </div>
            <div>
                <h1 className = {classes.heading}>Personal Projects</h1>
                <Project />
            </div>
            
        </div>
        
    )
}

export default Projects;
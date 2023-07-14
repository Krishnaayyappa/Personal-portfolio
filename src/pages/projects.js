import classes from "./projects.module.css"
import ProfessionalProjects from "../components/content/professionalprojects";
import PersonalProjects from "../components/content/personalProjects";
import TopNavigation from "../components/content/topnavigation";

const Projects =  () => {
    return (
        <div className='fadeintext' >
            <h1 className={classes.heading}>Projects</h1>
            <ProfessionalProjects />
            <hr className={classes.header}/>
            <PersonalProjects />
            <TopNavigation />
        </div>
        
    )
}

export default Projects;
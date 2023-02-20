
import Experience from "../components/content/Experience"

const Resume = () => {
    return(
        <div className = "resume">
            <h1>Resume</h1>
            <Experience class="workexp" exp="Work Experience"/>
            <hr/>
            <Experience class="education" exp="Education" />
            <hr/>
            <div className="skills">
                <div className="subheading">
                    <h2>Technical Skills</h2>
                </div>
                <div className="subheadingdetails">
                    <h3>FrontEnd</h3>
                    <h3>Backend</h3>
                    <h3>DataBase</h3>
                </div>
            </div>
        </div>
    )
}

export default Resume
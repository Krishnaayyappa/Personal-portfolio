import Skills from "../components/content/Skills"
import Experience from "../components/content/Experience"

const Resume = () => {
    return(
        <div className = "resume">
            <h1>Resume</h1>
            <Experience exp="Work Experience" />
            <hr/>
            <Experience exp="Education" />
            <hr/>
            <Skills />
        </div>
    )
}

export default Resume
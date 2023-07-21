import ProjectDetails from "../components/content/projectdetails"
import { professional } from "../components/content/contentDetails"
import { personal } from "../components/content/contentDetails"
import { useParams } from "react-router-dom"
import Roles,{Features} from "../components/content/projDetailsRolesandfeatures"


export default function Project(){
    const params = useParams()
    let details = {}
    let roles = true;
    if(["p1","p2"].includes(params.projectid)){
        details = professional.filter(detail => detail.id === params.projectid)[0]
    }else {
        details = personal.filter(detail => detail.id === params.projectid)[0]
        roles = false;
    }
    
    
    return (
        <div className="fadeintext">
            <ProjectDetails details = {details}>
                {roles ? <Roles roles ={details.roles} /> : <Features features={details.features}/>}
            </ProjectDetails>

        </div>
    )
}
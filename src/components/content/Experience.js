import Role from "./roles";

const Experience = (props) => {
    return (
        <div className="experience">
            <div className="subheading">
                <h2>{props.exp}</h2>
            </div>
            {props.exp === "Work Experience" ? 
                <div className="subheadingdetails">
                    <Role year="2018-2020" role="FullStack Developer" place = "Infosys Ltd"/>
                    <Role year="2017-2018" role="FrontEnd Developer" place = "Infosys Ltd"/>
                </div> : 
                <div className="subheadingdetails">
                    <Role year="2020-2021" role="MEng Software Engineering" place = "Concordia University"/>
                    <Role year="2013-2017" role="Computer Science Engineering" place = "KL University"/>
                </div>}
            
        </div>
    )
}

export default Experience
import Role from "./roles";

const Experience = (props) => {
    return (
        <div className={props.class}>
            <div className="subheading">
                <h2>{props.exp}</h2>
            </div>
            <div className="subheadingdetails">
                <Role year="2017-2018" role="FrontEnd Developer" place = "Infosys Ltd"/>
                <Role year="2018-2020" role="FullStack Developer" place = "Infosys Ltd"/>
            </div>
        </div>
    )
}

export default Experience
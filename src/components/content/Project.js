import ecommerce from "../../images/ecommerce.jpg"
import banking from "../../images/bank.jpg"
import cloud from "../../images/cloud.jpg"
import classes from "./project.module.css"

const Project = () => {
    return (
        <div className={classes.imgGrid}>
            <div className={`${classes.imgDiv}`}>
                <img className={classes.image} src={ecommerce} alt="ecommerce"/>
                <h3 className = {classes.heading}>Ecommerce</h3>
            </div>
            <div className={classes.imgDiv}>
                <img className={classes.image} src={banking} alt="ecommerce"/>
                <h3 className = {classes.heading}>Banking</h3>
            </div>
            <div className={classes.imgDiv}>
                <img className={classes.image} src={cloud} alt="ecommerce"/>
                <h3 className = {classes.heading}>Data Management</h3>
            </div>
            
        </div>
    )
}

export default Project
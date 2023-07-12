import classes from "./boxdetails.module.css"

export default function BoxDetails({year, position, company}){
    return (
        <div className={classes.boxdetails}>
            <p>{year}</p>
            <div className={classes.details}>
                <p>{position}</p>
                <p>{company}</p>
            </div>
        </div>
    )
}
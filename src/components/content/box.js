import classes from "./box.module.css"

function Box({boxtype, children}){
    return (
        <div className={classes.box}>
            <h2>{boxtype}</h2>
            {children}
        </div>
    )
}

export default Box;
import classes from "./gallery.module.css"


export default function Gallery(props){
    return (
        <div className={classes.gallery}>
                <div className = {classes.image}>
                    <img src={props.image} alt={props.projName} />
                </div>
                <div className={classes.description}>
                    <div className={classes.proj}>
                        <h3 className={classes.projName}>{props.projName}</h3>
                        <p className={classes.projDesc}>{props.projDesc}</p>
                    </div>
                    <hr className={classes.header} />
                </div>
            </div>
    )
}
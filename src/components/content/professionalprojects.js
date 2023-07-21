import { Fragment } from "react";
import Gallery from "./gallery";
import classes from "./professionalProjects.module.css";
import { useState } from "react";
import { professional } from "./contentDetails";
import { Link } from "react-router-dom";

export default function ProfessionalProjects() {
  const [show, setShow] = useState(false);
  const details = show ? professional : [professional[0]];
  return (
    <Fragment>
      <h2 className={classes.protype}>Professional projects</h2>
      {
        <ul>
          {details.map((d) => (
            <li key={d.id} className={classes.list}>
              <Link to={d.id} className={classes.link}>
                <Gallery
                  image={d.image}
                  projName={d.projName}
                  projDesc={`${d.projDesc.substring(0,325)}.......`}
                />
              </Link>
            </li>
          ))}
        </ul>
      }
      <div onClick={() => setShow(!show)} className={classes.project}>
        <p>{show ? "view less" : "view more"}</p>
      </div>
    </Fragment>
  );
}

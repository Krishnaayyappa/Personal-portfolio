import classes from "./projectdetails.module.css";
import { LinkOutlined } from "@ant-design/icons";

export default function Roles({ roles }) {
  return (
    <div>
      <p className={classes.bold}>Roles and Responsibilities:</p>
      <ul>
        {roles.map((role) => (
          <li className={classes.role} key={role.id}>
            {role.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Features({ features }) {
  return (
    <div>
      <p className={classes.bold}>Features:</p>
      <ul>
        {features.map((feature) => (
          <li key={feature.id}>
            <div className={classes.featurediv}>
              <p className={classes.feaname}>{feature.name}</p>
              <p>{feature.desc}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className={classes.links}>
        Please find below the web application and github repositories links
      </p>
      <div className={classes.link}>
        <a href="https://nextjs-project-psi-bay.vercel.app/" target="_blank">
          <p><LinkOutlined /> Food Ordering App</p>
        </a>
        <a
          href="https://github.com/Krishnaayyappa/Foodelicious-App"
          target="_blank"
        >
          <p><LinkOutlined /> Github repo</p>
        </a>
      </div>
    </div>
  );
}

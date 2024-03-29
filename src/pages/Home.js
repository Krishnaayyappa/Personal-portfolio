import classes from "./home.module.css";
import { Link } from "react-router-dom";
import icon from "../images/icon.png";

const description =
  "I am a full stack developer with expertise in building scalable and responsive web applications. With a strong foundation in both front-end and back-end development, I specialize in utilizing modern technologies like React, Node.js, and MongoDB to deliver seamless user experiences. Passionate about solving complex problems, I thrive in collaborative environments and am committed to delivering high-quality software solutions.";

const Home = () => {
  return (
    <div className={`${classes.intro} fadeintext`}>
      <div className={classes.content}>
        <h1>Hello!</h1>
        <h3>I'm Krishna Narina</h3>
        <p>{description}</p>
      </div>
      <div>
        {/* <Link className = {classes.link} to="resume"><div className={classes.circle1}>Resume</div></Link>
                <Link className = {classes.link} to="projects"><div className={classes.circle2}>Projects</div></Link>
                <Link className = {classes.link} to="contact"><div className={classes.circle3}>Contacts</div></Link> */}
        <img className = {classes.rotate} src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default Home;

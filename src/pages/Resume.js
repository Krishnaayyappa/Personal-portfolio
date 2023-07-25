import classes from "./Resume.module.css";
import Box from "../components/content/box";
import BoxDetails from "../components/content/boxDetails";
import { Link } from "react-router-dom";
import TopNavigation from "../components/content/topnavigation";


const Resume = () => {
  return (
    <div className={`${classes.resume} fadeintext`}>
      <h1 className={classes.heading}>Resume</h1>
      <div className={classes.line}></div>
      <Box boxtype="Work Experience">
        {/* <BoxDetails
          year="2022-present"
          position="React Developer"
          company="Bank of Montreal"
        /> */}
        {/* <hr className={classes.divider} /> */}
        <BoxDetails
          year="2018-2020"
          position="Full Stack Developer"
          company="Infosys"
        />
        <hr className={classes.divider} />
        <BoxDetails
          year="2017-2018"
          position="Front End Developer"
          company="Infosys"
        />
      </Box>
      <div className={classes.line}></div>
      <Box boxtype="Education">
        <BoxDetails
          year="2013-2017"
          position="Bachelor of Engineering"
          company="KL University"
        />
        <hr className={classes.divider} />
        <BoxDetails
          year="2021-2022"
          position="Master of Engineering Software Engineering"
          company="Concordia University"
        />
      </Box>
      <div className={classes.line}></div>
      <Link to="/projects">
        <div className={classes.project}>
          <p>View Projects</p>
        </div>
      </Link>
      <div className={classes.line}></div>
      <Box boxtype="Technical Skills">
        <BoxDetails
          year="Languages"
          position="C, C++, Java, JavaScript,SQL"
          company="Python,TypeScript"
        />
        <hr className={classes.divider} />
        <BoxDetails
          year="FrontEnd technologies"
          position="HTML, CSS, JQuery, React.js, Next.js"
          company="BootStrap, ANTD, SASS"
        />
        <hr className={classes.divider} />
        <BoxDetails
          year="Backend technologies"
          position="Node.js, Express.js, Django"
          company="SpringBoot"
        />
        <hr className={classes.divider} />
        <BoxDetails
          year="Databases"
          position="MSSQLServer, PostgreSQL, MYSQL"
          company="MongoDB, DynamoDB"
        />
        <hr className={classes.divider} />
        <BoxDetails
          year="Others"
          position="Agile, JEST, AWS Cloud"
          company="Docker, Kubernetes, Microservices"
        />
      </Box>
      <TopNavigation />
    </div>
  );
};

export default Resume;

import { UpCircleFilled } from "@ant-design/icons";
import classes from "./topnavigation.module.css"

export default function TopNavigation() {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={classes.arrow}
    >
      <UpCircleFilled />
    </div>
  );
}

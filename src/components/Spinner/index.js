import styles from "./Spinner.module.scss";
import { Grid } from "svg-loaders-react";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Grid fill="hsl(237.4, 18.7%, 18%)" strokeOpacity=".125" />
    </div>
  );
};

export default Spinner;

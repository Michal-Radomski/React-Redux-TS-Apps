import loader from "./loader.gif";
import styles from "./index.module.scss";

const Spinner = (): JSX.Element => {
  return (
    <div className={styles.loader}>
      <img src={loader} alt="loader" />
      {/* {console.log(Spinner, Spinner)} */}
    </div>
  );
};

export default Spinner;

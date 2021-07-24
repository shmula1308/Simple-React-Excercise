import React from "react";
import Card from "../UI/Card";
import styles from "./ModalAlert.module.css";
import Button from "../AddUserForm/Button";

const ModalAlert = (props) => {
  return (
    <React.Fragment>
      <div className={styles.modal} onClick={props.onConfirm} />
      <Card className={`${styles["modal-alert"]}`}>
        <h2 className={`${styles["alert-title"]}`}>Invalid input</h2>
        <div className={`${styles["alert-message"]}`}>
          <p>{props.children}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default ModalAlert;

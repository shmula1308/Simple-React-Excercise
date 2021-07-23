import React from "react";
import Card from "../UI/Card";
import styles from "./ModalAlert.module.css";
import Button from "../AddUserForm/Button";

const ModalAlert = (props) => {
  let modal = `${styles.modal}`;

  if (props.children) {
    modal = `${styles.modal} + " " + ${styles.invalid}`;
  }

  return (
    <div className={modal} onClick={props.onModalClick} id="modal">
      <Card className={`${styles["modal-alert"]}`}>
        <h2 className={`${styles["alert-title"]}`}>Invalid input</h2>
        <div className={`${styles["alert-message"]}`}>
          <p>{props.children}</p>
          <Button>Okay</Button>
        </div>
      </Card>
    </div>
  );
};

export default ModalAlert;

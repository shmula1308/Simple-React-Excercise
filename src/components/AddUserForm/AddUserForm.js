import React, { useState } from "react";
import styles from "./AddUserForm.module.css";
import Button from "./Button";
import Card from "../UI/Card";
import ModalAlert from "../ModalAlert/ModalAlert";

const AddUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  const userNameHandler = (ev) => {
    setUserName(ev.target.value);
  };
  const userAgeHandler = (ev) => {
    setUserAge(ev.target.value);
  };

  const onSubmitHandler = (ev) => {
    ev.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      const message = "Please enter a valid name and age (non-empty values)";
      setErrorMsg(message);
      return;
    }
    if (+userAge < 1) {
      const message = "Please enter a valid age (>0)";
      setErrorMsg(message);
      return;
    }
    const newUser = {
      name: userName,
      age: userAge,
      id: Date.now().toString(),
    };

    props.onNewUserEntered(newUser);
    setUserName("");
    setUserAge("");
  };

  const onConfirmModalHandler = (props) => {
    setErrorMsg(null);
  };

  return (
    <React.Fragment>
      {errorMsg && (
        <ModalAlert onConfirm={onConfirmModalHandler}>{errorMsg}</ModalAlert>
      )}
      <Card>
        <form onSubmit={onSubmitHandler}>
          <div className={`${styles["form-controls"]}`}>
            <div className={`${styles["form-control"]}`}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={userNameHandler}
                value={userName}
              />
            </div>
            <div className={`${styles["form-control"]}`}>
              <label htmlFor="age">Age(Years)</label>
              <input
                type="number"
                id="age"
                onChange={userAgeHandler}
                value={userAge}
              />
            </div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUserForm;

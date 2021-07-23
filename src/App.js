import React, { useState } from "react";
import styles from "./App.module.css";
import Card from "./components/UI/Card";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import NewUserList from "./components/NewUser/NewUserList";
import ModalAlert from "./components/ModalAlert/ModalAlert";

const App = () => {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const onNewUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      const previousUsers = [...prevUsers];
      previousUsers.unshift(newUser);
      return previousUsers;
    });
  };

  const invalidInputHandler = (errorMsg) => {
    setErrorMsg(errorMsg);
  };

  const onModalClickHandler = (ev) => {
    if (ev.target.closest("button") || ev.target.id === "modal") {
      setErrorMsg("");
    }
  };
  return (
    <div className={styles.app}>
      <Card>
        <AddUserForm
          onNewUserEntered={onNewUserHandler}
          onInvalidInput={invalidInputHandler}
        />
      </Card>
      <NewUserList items={users} />
      <ModalAlert onModalClick={onModalClickHandler}>{errorMsg}</ModalAlert>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import styles from "./App.module.css";
import Card from "./components/UI/Card";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import NewUserList from "./components/NewUser/NewUserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const onNewUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div className={styles.app}>
      <Card>
        <AddUserForm onNewUserEntered={onNewUserHandler} />
      </Card>
      <NewUserList items={users} />
    </div>
  );
};

export default App;

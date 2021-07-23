import React from "react";
import styles from "./NewUserList.module.css";
import NewUserItem from "./NewUserItem";

const NewUserList = (props) => {
  return (
    <ul className={`${styles["new-user-list"]}`}>
      {props.items.map((user) => {
        return <NewUserItem name={user.name} age={user.age} key={user.id} />;
      })}
    </ul>
  );
};

export default NewUserList;

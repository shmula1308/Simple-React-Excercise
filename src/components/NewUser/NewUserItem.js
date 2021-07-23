import React from "react";
import styles from "./NewUserItem.module.css";
import Card from "../UI/Card";

const NewUserItem = (props) => {
  const age = ` (${props.age} years old)`;
  return (
    <Card>
      <li className={`${styles["new-user"]}`}>
        <span>{props.name}</span>
        <span>{age}</span>
      </li>
    </Card>
  );
};

export default NewUserItem;

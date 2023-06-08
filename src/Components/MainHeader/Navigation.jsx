import React from "react";
import Button from "../UI/Button/Button";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.onLogin && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.onLogin && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.onLogin && (
          <li>
            <Button onClick={props.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

import React, { useState } from "react";
import classes from "./Login.module.css";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const Login = (props) => {
  const [endteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsValid, setFromIsValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);

    setFromIsValid(
      e.target.value.includes("") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFromIsValid(
      e.target.value.trim().length > 6 && endteredEmail.includes("@")
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onLogin(endteredEmail, enteredPassword);
  };
  return (
    <>
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={endteredEmail}
              onChange={emailChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button
              type="submit"
              className={classes.btn}
              disabled={!formIsValid}>
              Log In
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default Login;

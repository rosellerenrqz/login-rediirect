import React, { useState, useEffect, useReducer, useContext } from "react";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import AuthContext from "../../Auth/AuthContext";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === "PASSWORD_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const context = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking");
      setFormIsValid(emailIsValid && passwordIsValid); //Could also use emailState.isValid, passwordState.isValid
    }, 500);
    return () => {
      console.log("test");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]); //Could also use emailState.isValid, passwordState.isValid

  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", value: e.target.value });
    setFormIsValid(e.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "PASSWORD_INPUT", value: e.target.value });
    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchEmail({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    context.onLogin(emailState.value, passwordState.value);
  };

  return (
    <>
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <Input
            label="Email"
            type="text"
            id="email"
            placeholder="Email"
            isValid={emailIsValid}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          <Input
            label="Password"
            type="password"
            id="password"
            placeholder="Password"
            isValid={passwordIsValid}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
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

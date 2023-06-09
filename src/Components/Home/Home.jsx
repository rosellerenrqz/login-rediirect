import React, { useContext } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import AuthContext from "../../Auth/AuthContext";

const Home = () => {
  const context = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome Back!</h1>
      <Button onClick={context.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;

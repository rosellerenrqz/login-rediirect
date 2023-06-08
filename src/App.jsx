import React, { useState, useEffect } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedInfo = localStorage.getItem("logged in");

    if (userLoggedInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("logged in", "1");
    setIsLoggedIn(true);
    console.log("in app js");
  };

  const logoutHandler = () => {
    localStorage.removeItem("logged in");
    setIsLoggedIn(false);
  };
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
};

export default App;

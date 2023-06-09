import React, { useState, useEffect } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";
import AuthContext from "./Auth/AuthContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedInfo = localStorage.getItem("logged in");
    if (userLoggedInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("logged in", "1"); //setting up key in the app so it wont go back to the landing page if refreshed
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("logged in"); //Removes the key in the app
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home />}
      </main>
    </AuthContext.Provider>
  );
};

export default App;

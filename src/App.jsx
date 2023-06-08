import React, { useState } from "react";
import Login from "./Components/Login/Login";

import MainHeader from "./Components/MainHeader/MainHeader";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
    console.log("in app js");
  };

  return (
    <React.Fragment>
      <MainHeader />
      <main>{!isLoggedIn && <Login onLogin={loginHandler} />}</main>
    </React.Fragment>
  );
};

export default App;

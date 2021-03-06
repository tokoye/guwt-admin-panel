import React from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import "./app.css";
import LoginView from "./views/loginView";
// import Home from "./views/homeView";
import SelectOrginization from "./views/selectOrganizationView";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className="mainApp">
        <Route path="/" exact component={SelectOrginization} />
      </div>
    );
  } else {
    return (
      <div className="mainApp">
        <Route path="/" exact component={LoginView} />
      </div>
    );
  }
};

export default App;

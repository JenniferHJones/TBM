import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "./context";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import LoginWrapper from "./pages/Login/LoginWrapper";
import RegisterWrapper from "./pages/Register/RegisterWrapper";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import NoMatch from "./pages/NoMatch";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Router>
      <div className="App Site">
        <UserProvider>
          <div className="Site-content">
            <div className="App-header">
              <Route component={Nav} />
            </div>
            <div className="main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginWrapper} />
                <Route exact path="/register" component={RegisterWrapper} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route component={NoMatch} />
                <Route component={ComingSoon} />
              </Switch>
            </div>
          </div>
          <Footer />
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;

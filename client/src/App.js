import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from "./context";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";

import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <UserContext>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </UserContext>
      </div>
    </Router>
  );
}

export default App;

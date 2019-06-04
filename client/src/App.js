import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "./context";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import LoginWrapper from "./pages/Login/LoginWrapper";
import RegisterWrapper from "./pages/Register/RegisterWrapper";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import Property from "./pages/Property";
import PropertyFormWrapper from "./pages/PropertyForm/PropertyFormWrapper";
import Listing from "./pages/Listing";

import NoMatch from "./pages/NoMatch";
// import ComingSoon from "./pages/ComingSoon";

// Material helpers
import { MuiThemeProvider } from "@material-ui/core/styles";

// Theme
import theme from "./theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App Site">
          <UserProvider>
            <div className="Site-content mb-5">
              <div className="App-header">
                <Route component={Nav} />
              </div>
              <div className="main">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={LoginWrapper} />
                  <Route exact path="/register" component={RegisterWrapper} />
                  <Route exact path="/pricing" component={Pricing} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/property" component={Property} />
                  <Route
                    exact
                    path="/propertyform"
                    component={PropertyFormWrapper}
                  />
                  <Route exact path="/listing" component={Listing} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
            <Footer />
          </UserProvider>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;

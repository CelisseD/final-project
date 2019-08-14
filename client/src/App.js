import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./components/Landing/landing";
import LoginPage from "./components/Login/login";
import ProfilePage from "./components/Profile/profile";
import SearchPage from "./components/Search/search";
import ResultsPage from "./components/Results/results";
import DashboardPage from "./components/Dashboard/dashboard";
import FavoritesPage from "./components/Favorites/favorites";
import Navbar from "./components/Navbar/navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={LandingPage} /> */}
          {/* <Route exact path="/search" component={SearchPage} /> */}
          {/* <Route exact path="/results" component={ResultsPage} /> */}
        </Switch>
      </Router>
    )
  }
}

export default App;

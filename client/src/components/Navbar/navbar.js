import React from "react";
import './navbar.css';
import logo from "../../logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LandingPage from "../Landing/landing";
import LoginPage from "../Login/login";
import ProfilePage from "../Profile/profile";
import SearchPage from "../Search/search";
import ResultsPage from "../Results/results";
import DashboardPage from "../Dashboard/dashboard";
import FavoritesPage from "../Favorites/favorites";

function Navbar() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="http://google.com" target="_blank" rel="noopener noreferrer">
            <img src={logo} width="30" height="30" alt="Home" />
          </a>
          <Link to="/" className="navbar-brand">TBH</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="navbar-item">
                <Link to="/profile" className="nav-link">Profile</Link>
              </li>
              <li className="navbar-item">
                <Link to="/search" className="nav-link">Suggest</Link>
              </li>
              <li className="navbar-item">
                <Link to="/results" className="nav-link">Results</Link>
              </li>
              <li className="navbar-item">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
              </li>
              <li className="navbar-item">
                <Link to="/favorites" className="nav-link">Favorites</Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <div className="container"> */}
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/results" component={ResultsPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/favorites" component={FavoritesPage} />
          {/* </div> */}
        </div>
    )
}

export default Navbar;
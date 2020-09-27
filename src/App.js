import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './components/Home'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';


class App extends Component { // name your components with an uppercase letter in react or else it will not reconize them
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Welcome to Game App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Router>
                    <a className="dropdown-item" href="#">Go to list</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Go to about</a>
                  </Router>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <Router>
          <div>
            <h1>Welcome to Game App</h1>
            <Route path="/home" component={Home} />
            <Link to="/home" className='home'>Home</Link>
          </div>
        </Router>
      </>
    )
  }
}

export default App;



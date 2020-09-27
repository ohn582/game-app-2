
import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import List from '../components/List'
import About from '../components/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

class NavBar extends Component { // name your components with an uppercase letter in react or else it will not reconize them
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

                                        {/* <Route className="dropdown-item" href="/markets" component={List} />
                                        <Link to="/markets" className='list'>Go to List</Link>
                                        <br />
                                        <Route className="dropdown-item" href="http://localhost:3001/about#" component={About} />
                                        <Link to="/about" className='list'>Go to About</Link> */}
                                    </Router>
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
            </>
        )
    }
}

export default NavBar;
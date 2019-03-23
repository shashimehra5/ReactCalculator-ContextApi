import React, { Component } from "react";
import logo from '../../logo.svg';

class Header extends Component {
    render(){
        return(
            <header style={{marginBottom: '10px'}}>
                <nav className="navbar navbar-expand-sm bg-light navbar-light">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" width="60" height="40"/>
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <a className="nav-link" href="/"><h3>React Calculator</h3></a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
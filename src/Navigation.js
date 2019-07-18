import React, {Component} from 'react';

class Navigation extends Component {
    render(){
        return(
            <nav className='navbar fixed-top navbar-expand-lg navbar-dark' id='navigationPage'>
                <a className="navbar-brand" href="#home">MIL</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skillexperience">Skills &amp; Experiences</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;

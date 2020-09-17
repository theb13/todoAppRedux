import React from 'react';

export default props => (
    <nav className="navbar  navbar-expand-sm  bg-dark">
        <a className="navbar-brand" href="#/"><i className='fa fa-calendar-check-o '></i>TodoApp</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/todos">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">Sobre</a>
                </li>
            </ul>

        </div>
    </nav>
)
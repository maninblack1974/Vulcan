
import React from 'react';
import Nav from '../Nav';

const Header = (props) => (
    console.log("**** client/src/Components/Header"),
    <header>
        <Nav />
        <div className="jumbotron jumbotron-fluid text-center p-5">
            <h1 className="display-4">Service Pro Search</h1>
            <h5 className="mt-4">{props.headerText}</h5>
        </div>
    </header>
);

export default Header;
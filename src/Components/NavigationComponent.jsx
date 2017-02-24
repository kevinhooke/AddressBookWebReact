import React, { Component } from 'react';
import { Link } from 'react-router';

class NavigationComponent extends Component{

    render(){
        return(
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">AddressBook</Link>
                </div>

                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/search">Search</Link></li>
                        <li><Link to="/new">New</Link></li>
                    </ul>
                </div>
            </nav>


        )
    }
}
export default NavigationComponent;
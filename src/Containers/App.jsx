import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Home from '../Components/HomeComponent';
import AddNew from '../Components/AddNewComponent';
import Search from '../Components/SearchComponent';
import NavMenu from '../Components/NavigationComponent';

class App extends Component {

    render() {
        return (
                <Router history={hashHistory}>
                    <Route path="/" component={NavMenu}>
                        <IndexRoute component={Home} />
                        <Route path="new" component={AddNew} />
                        <Route path="search" component={Search} />
                    </Route>
                </Router>
        );
    }
}

export default App;

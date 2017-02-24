import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Home from '../Components/HomeComponent';
import AddNew from '../Components/AddNewComponent';
import Search from '../Components/SearchComponent';
import NavigationComponent from '../Components/NavigationComponent';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router history={hashHistory}>
                    <Route path="/" component={NavigationComponent}>
                    <IndexRoute component={Home} />
                    <Route path="new" component={AddNew} />
                    <Route path="search" component={Search} />
                    </Route>
                </Router>
            </div>
        );
    }
}

export default App;

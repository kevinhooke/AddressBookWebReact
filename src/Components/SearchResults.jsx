import React, { Component } from 'react';

class SearchResults extends Component {

    render() {

        var searchResults = {};

        //angular equivalant:
        // <tr ng-repeat="address in addresses">
        // <td>{{ address.lastName }}</td>
        // <td>{{ address.firstName }}</td>
        // <td>{{ address._id }}</td>
        // </tr>


    return (
            <div className="row">
                <div className="col-lg-12">
                    <table className="table table-striped">
                        <thead>
                        <th>Last name</th>
                        <th>Last Name</th>
                        <th>Id</th>
                        </thead>


                    </table>
                </div>
            </div>
        )
    }
}
export default SearchResults;
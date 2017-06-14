import React, { Component } from 'react';

class SearchForm extends Component {

    render() {
        return (
            <div>
                <form className="form-inline">
                    <div className="form-group">

                        <label for="lastName">Last name:</label>
                        <input id="lastName" type="text"/>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchForm;
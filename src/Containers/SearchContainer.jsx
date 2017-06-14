import React, { Component } from 'react';
import SearchForm from '../Components/SearchForm';
import SearchResults from '../Components/SearchResults';

class SearchContainer extends Component {

    render() {
        return (
            <div>
                <SearchForm/>
                <SearchResults/>
            </div>
        )
    }
}
export default SearchContainer;
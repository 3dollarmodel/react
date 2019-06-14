import React, {Component} from 'react';
import './Header.css'


class Search extends Component {
    searchCheckHandler = (event) => {
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <input className="input" onChange={this.searchCheckHandler}/>
                <button>Search</button>
            </div>
        );
    }
}

export default Search;
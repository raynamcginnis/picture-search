import React from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar';


class App extends React.Component {

// function that uses axios to request photos from the Unsplash API.
async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
        query: term
    },    
    headers: {
            Authorization: 'Client-ID cCQGoDX_aZYNUXZ6qJSWbyaGgKr18aNM1_M66WeN620'
        }

    }).then((response) => {
        console.log(response.data.results);
    })
}

// search bar runs onSearchSubmit function when term is submitted.
// Images from Imagebox are displayed
render() {
    return (
    <div className = "ui container app-container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
    );
}
}

// export App to be used throughout application
export default App;


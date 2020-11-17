import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
// initialize state, term is an empty string
 state = { term: '' };

// arrow function that does not refresh form when enter is pressed
onFormSubmit = (event) => {
  event.preventDefault();
// pulling children from onSubmit in App, gives access to callback
  this.props.onSubmit(this.state.term)
};

// form that includes onFormSubmit function, as well as an inline arrow function that sets state to whatever the user has typed into the bar, once they hit enter
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text"
            placeholder="Enter your topic of choice and then click enter..."
             value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
             />
          </div>
        </form>
      </div>
    );
  }
}
// export that allows SearchBar to be used throughout application
export default SearchBar;

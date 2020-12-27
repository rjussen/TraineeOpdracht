import React, { Component } from 'react';
import './App.css';
import PostData from './data.json';
import DevList from './DevList';
import SearchBar from './SearchBar';


class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    devs: PostData,
    query: '',
  }
}

  handleInput = (e) => {
    this.setState({ query: e.target.value });
    console.log(e.target.value);
  }


  render() {
    const filteredDevs = this.state.devs.filter(({ languages, tools }) => {

      const normalizedLanguages = languages.map(language => language.toLowerCase());
      const normalizedTools = tools.map(tool => tool.toLowerCase());

      // very easy to add/remove specific things from this search function
      // I decided not to

      return normalizedLanguages.filter(tool => tool.includes(this.state.query.toLowerCase())).length > 0
      || normalizedTools.filter(language => language.includes(this.state.query.toLowerCase())).length > 0
    })

    return(
      <div className= 'App'>
        <SearchBar
          handleInput={this.handleInput}
        />
        <DevList filteredDevs={filteredDevs}/>

      </div>
    )
  }

}

export default App;
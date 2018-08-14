import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    gifsArray: [],
  };

  getGifs = () => {
    const axios = require('axios');
    axios({
      method:'get',
      url:'https://api.giphy.com/v1/gifs/trending?api_key=zW3QkmvOf9ivEjRrXElFxe0C4KFd3zfO&limit=25&rating=G',
    })
    .then(function(response) {
      this.setState({gifsArray: response.data.data});
    });
  };

  render() {
    return (
      <div className="App">
        <header id="header">
          <div className="container">
            <ul className="button-holder">
              <li>
                <a href="#" onClick={this.getGifs}>
                  Refresh
                </a>
              </li>
              <li>
                <a href="#">
                  Random
                </a>
              </li>
              <li>
                <a href="#">
                  Top
                </a>
              </li>
            </ul>
            <form action="#">
              <div className="input-holder">
                <input type="text"/>
              </div>
              <button>Go</button>
            </form>
          </div>
        </header>
        <main>
        </main>
      </div>
    );
  }
}

export default App;

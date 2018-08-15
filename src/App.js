import React, {Component} from 'react';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const axios = require('axios');

    axios({
      method: 'get',
      url: 'https://api.giphy.com/v1/gifs/trending?api_key=FipGdloXqHUVHcSHhtIBnhEmfJ89IvLv&limit=24&rating=G',
    })
      .then(
        (response) => {
          this.setState({items: response.data.data});
        }
      )
  }

  getTrendingGifs = () => {
    const axios = require('axios');

    axios({
      method: 'get',
      url: 'https://api.giphy.com/v1/gifs/trending?api_key=FipGdloXqHUVHcSHhtIBnhEmfJ89IvLv&limit=24&rating=G',
    })
      .then(
        (response) => {
          this.setState({items: response.data.data});
        }
      )
  };

  getSearchedGifs = () => {
    const axios = require('axios');

    let parameter = document.querySelector('input').value;

    axios({
      method: 'get',
      url: `https://api.giphy.com/v1/gifs/search?q=` + parameter + `&api_key=FipGdloXqHUVHcSHhtIBnhEmfJ89IvLv&limit=24&rating=G`,
    })
      .then(
        (response) => {
          this.setState({items: response.data.data});
        }
      )
  };

  getRandomGifs = () => {
    const axios = require('axios');
    let arr = [];

    axios({
      method: 'get',
      url: `https://api.giphy.com/v1/gifs/random?api_key=FipGdloXqHUVHcSHhtIBnhEmfJ89IvLv&limit=24&rating=G`,
    })
      .then(
        (response) => {
          arr.push(response.data.data);
          this.setState({ items: arr });
        }
      )
  };

  render() {
    let {items} = this.state;
    return (
      <div className="App">
        <header id="header">
          <div className="container">
            <ul className="button-holder">
              <li>
                <a
                    className="btn"
                    href="#"
                >
                  Refresh
                </a>
              </li>
              <li>
                <a
                    className="btn"
                    href="#"
                    onClick={this.getRandomGifs}
                >
                  Random
                </a>
              </li>
              <li>
                <a
                    className="btn"
                    href="#"
                    onClick={this.getTrendingGifs}
                >
                  Trending
                </a>
              </li>
            </ul>
            <form action="#">
              <div className="input-holder">
                <input type="text"/>
              </div>
              <button
                  className="btn"
                  onClick={this.getSearchedGifs}
              >
                Go
              </button>
            </form>
          </div>
        </header>
        <main>
          <div className="container">
            <div className="item-holder">
              {items.map(item => (
                  <div className="item" key={item.id}>
                    <img src={item.images.original.url}/>
                    <span>{item.title}</span>
                  </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

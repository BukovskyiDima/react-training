import React, {Component} from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">
          <header id="header">
            <div className="container">
              <ul className="button-holder">
                <li>
                  <a href="#">
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

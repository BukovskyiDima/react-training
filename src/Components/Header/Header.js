import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import * as Page from '../../Pages';

export default class Header extends React.Component {

  render(){
    return (
      <Router>
        <div>
          <header id="header">
            <div className="container">
              <ul className="button-holder">
                <li>
                  <Link
                      className="btn"
                      to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                      className="btn"
                      to="/random"
                  >
                    Random
                  </Link>
                </li>
              </ul>
            </div>
          </header>
          <Route exact path="/" component={Page.Home} />
          <Route path="/about" component={Page.Random} />
        </div>
      </Router>
    )
  }
}
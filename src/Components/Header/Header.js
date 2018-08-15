import * as React from 'react';
import * as Api from '../../API';

export default class Header extends React.Component {

  render(){
    return (
      <header id="header">
        <div className="container">
          <ul className="button-holder">
            <li>
              <a
                  className="btn"
                  href="#"
                  onClick={Api.getRandomGifs}
              >
                Random
              </a>
            </li>
            <li>
              <a
                  className="btn"
                  href="../../Pages/Home"
              >
                Home
              </a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
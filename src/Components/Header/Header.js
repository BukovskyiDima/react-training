import * as React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  changePage = (e) => {
    this.props.switchPages(e.target.text);
  };

  render(){
    return (
      <header id="header">
        <div className="container">
          <ul className="button-holder">
            <li>
              <a
                  className="btn"
                  onClick={ this.changePage }
              >
                Home
              </a>
            </li>
            <li>
              <a
                  className="btn"
                  onClick={ this.changePage }
              >
                Random
              </a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
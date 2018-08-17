import * as React from 'react';
import api from '../../../serves/api';
import { GifsHolder } from '../../../Components/index'

export default class Home extends React.Component {

  state = {
    items: []
  };

  render() {
    let {items} = this.state;

    return (
      <main>
        <div className="container">
          <form action="#" className="form-holder">
            <div className="input-holder">
              <input type="text"/>
            </div>
            <button
              className="btn"
              onClick={api.search}
            >
              Go
            </button>
          </form>
        </div>
        <div className="container">
          <GifsHolder items={items}/>
        </div>
      </main>
    )
  }
}


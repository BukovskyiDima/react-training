import * as React from 'react';
import api from '../../serves/api';

export class Home extends React.Component {

  state = {
    items: []
  };


  componentDidMount() {
    let test = api.trending();
  }

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
          <div className="item-holder">
            {items.map(item => (
                <div className="item" key={item.id}>
                  <img src={item.images.original.url} alt='description'/>
                  <span>{item.title}</span>
                </div>
            ))}
          </div>
        </div>
      </main>
    )
  }
}


import * as React from 'react';
import * as Api from '../../API';
import Header from "../../Components/Header";


export class Home extends React.Component {

  state = {
    items: []
  };


  componentDidMount() {
    let test = Api.getTrendingGifs();

    console.log(test);
  }

  render() {
    let {items} = this.state;
    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <form action="#" className="form-holder">
              <div className="input-holder">
                <input type="text"/>
              </div>
              <button
                  className="btn"
                  onClick={Api.getSearchedGifs}
              >
                Go
              </button>
            </form>
          </div>
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
    )
  }
}


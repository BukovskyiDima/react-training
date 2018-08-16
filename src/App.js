import * as  React from 'react';
import './App.css';
import { Home, Random } from './Pages';
import Header from './Components/Header';

export default class App extends React.Component {

  state = {
    page: 'Home'
  };

  switchPages = (value) => {
    this.setState({ page: value });
    console.log(value)
  };

  render() {
    let { page } = this.state;
    return (
      <div className="App">
        <Header page={page} switchPages={this.switchPages} />
        { page === 'Home' ? <Home/> : <Random /> }
      </div>
    );
  }
}

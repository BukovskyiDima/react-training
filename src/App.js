import * as  React from 'react';
import './App.scss';
import Header from './Components/Header';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

import * as  React from 'react';
import './App.css';
import HomePage from './Pages/Home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <HomePage/>
      </div>
    );
  }
}

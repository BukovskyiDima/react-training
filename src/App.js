import * as  React from 'react';
import './App.scss';
import Main from './Main';
import { Provider } from 'react-redux';
import createStore from './store/index';
import createHistory from "history/createBrowserHistory";

const history = createHistory();
const store = createStore(history);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Main history={history}/>
            </Provider>
        );
    }
}

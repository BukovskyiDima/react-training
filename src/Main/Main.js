import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Page from './Pages/index';
import Header from '../Components/Header/Header';

export default class Main extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Page.Home}/>
                        <Route path="/random" component={Page.Random}/>
                        <Route path="/logout" component={Page.Auth}/>
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}
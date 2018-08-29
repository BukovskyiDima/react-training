import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import * as Page from './Pages/index';
import Header from '../Containers/Header/Header';
import { ConnectedRouter } from "react-router-redux";
import AuthRoute from "../Containers/AuthRoute";


export default class Main extends React.Component {
    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <React.Fragment>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Page.Home}/>
                        <Route path="/random" component={Page.Random}/>
                        <Route path="/login" component={Page.Auth}/>
                        <AuthRoute path="/favorite" component={Page.Favorite}/>
                    </Switch>
                </React.Fragment>
            </ConnectedRouter>
        )
    }
}
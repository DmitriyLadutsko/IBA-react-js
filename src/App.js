import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './components/Header';
import CardBuilder from "./containers/CardsBuilder";
import SignIn from "./containers/SignIn";
import FullCard from "./containers/FullCard";
import NotFound from "./components/UI/NotFound";
import Logout from "./containers/SignIn/Logout";
import Settings from "./containers/Settings";
import {initCards, authCheckState} from './store/actions';

class App extends Component {

    componentDidMount() {
        this.props.authCheckState();
        this.props.initCards();
    };

    render() {
        return (
            <div className="App">
                <Header/>
                {this.props.isAdmin && <div>Admin</div>}
                <Switch>
                    <Route path="/sign-in" component={SignIn}/>
                    <Route path="/cards/:id" component={FullCard}/>
                    {this.props.isAdmin && <Route path="/settings" component={Settings}/>}
                    <Route path="/logout" component={Logout}/>
                    <Route path="/" exact component={CardBuilder}/>
                    <Route path="/*" component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAdmin: state.auth.isAdmin
    }
};

const mapDispatchToProps = {
    initCards,
    authCheckState
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
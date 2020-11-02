import React, {Component} from "react";
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import CardBuilder from "./containers/CardsBuilder";
import SignIn from "./containers/SignIn";
import NotFound from "./components/UI/NotFound";

class App extends Component {

    render() {

        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/" exact component={CardBuilder} />
                    <Route path="/*" component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
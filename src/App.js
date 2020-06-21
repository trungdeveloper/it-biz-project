import React from "react";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import {Home} from "./pages/home/home"
import {NavBar} from "./components/navBar";
import {Profile} from "./pages/profile/profile";
import {Plight} from "./pages/plight/plight";
import {Donation} from "./pages/donation/donation";
import {Activity} from "./pages/acitivity/activity";
import {Login} from "./pages/login/login";

export default function App() {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/Plight" component={Plight}/>
                    <Route path="/Donation" component={Donation}/>
                    <Route path="/Activity" component={Activity}/>
                    <Route path="/Login" component={Login}/>
                </Switch>
            </div>
        </Router>
    );
}


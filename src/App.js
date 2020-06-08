import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Home} from  "./pages/home"
import {NavBar} from "./components/navBar";
import {Profile} from "./pages/profile";
import {Plight} from "./pages/plight";
import {Donation} from "./pages/donation";
import {Activity} from "./pages/activity";
import {Login} from "./pages/login";

export default function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/Plight" component={Plight} />
                    <Route path="/Donation" component={Donation } />
                    <Route path="/Activity" component={Activity } />
                    <Route path="/Login" component={Login} />
                </Switch>
            </div>
        </Router>
    );
}


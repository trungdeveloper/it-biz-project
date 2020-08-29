import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import NavBar from "./components/navBar";
import { Plight } from "./pages/plight/plight";
import { Donation } from "./pages/donation/donation";
import { Activity } from "./pages/acitivity/activity";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { CategoryPage } from "./admin/page/category/categoryPage";
import { DonationPage } from "./admin/page/donation/donationPage";
export default function App() {
    return (
        <Router>
            <div>
                {/* <NavBar /> */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Plight" component={Plight} />
                    <Route path="/Donation" component={Donation} />
                    <Route path="/Activity" component={Activity} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/category" component={CategoryPage} />
                    <Route path="/donationAdmin" component={DonationPage} />
                </Switch>
            </div>
        </Router>
    );
}

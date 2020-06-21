import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Home } from "./pages/home/home"
import { NavBar } from "./components/navBar";
import { Profile } from "./pages/profile/profile";
import { Plight } from "./pages/plight/plight";
import { Donation } from "./pages/donation/donation";
import { Activity } from "./pages/acitivity/activity";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { PersonalProfilePage } from "./pages/profile/personalProfilePage/personalProfilePage";
import { DonationInformationProfilePage } from "./pages/profile/donationInformationProfilePage/donationInformationProfilePage";
import { ReceiveDonationProfilePage } from "./pages/profile/receiveDonationProfilePage/receiveDonationProfilePage"
import { ChangePaswordProfilePage } from "./pages/profile/changePasswordProfilePage/changePasswordProfilePage"
export default function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile" component={PersonalProfilePage} />
                    <Route path="/Plight" component={Plight} />
                    <Route path="/Donation" component={Donation} />
                    <Route path="/Activity" component={Activity} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/profile/donationInformationProfile" component={DonationInformationProfilePage} />
                    <Route path="/profile/receiveDonationProfile" component={ReceiveDonationProfilePage} />
                    <Route path="/profile/changePasword" component={ChangePaswordProfilePage} />
                </Switch>
            </div>
        </Router>
    );
}


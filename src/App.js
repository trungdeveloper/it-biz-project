import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/index";
import NavBar from "./components/navBar";
import { Plight } from "./pages/plight/plight";
import { Donation } from "./pages/donation/donation";
import { Activity } from "./pages/acitivity/activity";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { DonationDetail } from "./pages/donation/donationDetail";
import { PlightDetail } from "./pages/plight/plightDetail";
import { ActivityDetail } from "./pages/acitivity/activityDetail";
import { UserProfile } from "./pages/profile/userProfile";
import { UserHistory } from "./pages/profile/userHistory";
import { Footer } from "./components/home/footer";
import DonationForm from "./pages/profile/DonationForm";
import { Profile } from "./pages/profile/mainProfile";

export default function App() {
    return (
        <Router>
            <div className="content">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/UserProfile" component={UserProfile} />
                    <Route path="/UserHistory" component={UserHistory} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/Donation" component={Donation} />
                    <Route path="/Donate" component={DonationForm} />
                    <Route path="/DonationDetail" component={DonationDetail} />
                    <Route path="/Plight" component={Plight} />
                    <Route path="/PlightDetail" component={PlightDetail} />
                    <Route path="/Activity" component={Activity} />
                    <Route path="/ActivityDetail" component={ActivityDetail} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

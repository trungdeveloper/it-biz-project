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
import { UserHistory } from "./pages/profile/userHistory";
import { Footer } from "./components/home/footer";
import DonationForm from "./pages/donate/donate";
import { Profile } from "./pages/profile/profile";
import SharePlight from "./pages/share-plight/share-plight";
import { PlightPage } from "./admin/page/plight/plightPage";
import { CategoryPage } from "./admin/page/category/categoryPage";
import { DonationPage } from "./admin/page/donation/donationPage";
import { EventPage } from "./admin/page/event/eventPage";
import { useSelector } from "react-redux";
import { DonationRequestPage } from "./admin/page/donation/donationRequest";
import { PlightRequestPage } from "./admin/page/plight/plightRequestPage";
import { DonatedPage } from "./admin/page/donated/donatedPage";
export default function App() {
    const uid = useSelector((state) => state.firebase.auth.uid);
    return (
        <Router>
            {uid !== "6D4lyxHfAhQW2694sQXHgVy0rNP2" ? <NavBar /> : null}
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/UserHistory" component={UserHistory} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/Donation" component={Donation} />
                    <Route path="/Donate" component={DonationForm} />
                    <Route path="/DonationDetail" component={DonationDetail} />
                    <Route path="/Plight" component={Plight} />
                    <Route path="/PlightDetail" component={PlightDetail} />
                    <Route path="/Activity" component={Activity} />
                    <Route path="/ActivityDetail" component={ActivityDetail} />
                    <Route path="/sharePlight" component={SharePlight} />
                    <Route path="/category" component={CategoryPage} />
                    <Route path="/donationAdmin" component={DonationPage} />
                    <Route path="/eventAdmin" component={EventPage} />
                    <Route
                        path="/donationRequestAdmin"
                        component={DonationRequestPage}
                    />
                    <Route path="/plightAdmin" component={PlightPage} />
                    <Route
                        path="/plightRequestAdmin"
                        component={PlightRequestPage}
                    />
                    <Route path="/donatedAdmin" component={DonatedPage} />
                </Switch>
            </div>
            {uid !== "6D4lyxHfAhQW2694sQXHgVy0rNP2" ? <Footer /> : null}
        </Router>
    );
}

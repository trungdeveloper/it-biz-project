import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/index";
import NavBar from "./components/navBar";
import { Plight } from "./pages/plight/plight";
import DonationPage from "./pages/donation/donation-page";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import DonationDetail from "./pages/donation/donationDetail";
import { PlightDetail } from "./pages/plight/plightDetail";
import { ActivityDetail } from "./pages/acitivity/activityDetail";
import { UserHistory } from "./pages/profile/userHistory";
import { Footer } from "./components/home/footer";
import DonationForm from "./pages/donate/donate";
import { Profile } from "./pages/profile/profile";
import SharePlight from "./pages/share-plight/share-plight";
import { Donated } from "./pages/donated/donated";
import ScrollToTop from "./scroll-to-top";

export default function App() {
    return (
        <Router>
            <ScrollToTop>
                <NavBar />
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Login" component={Login} />
                        <Route path="/Register" component={Register} />
                        <Route path="/UserHistory" component={UserHistory} />
                        <Route path="/profile" component={Profile} />
                        <Route
                            exact
                            path="/donationPage"
                            component={DonationPage}
                        />
                        <Route
                            path="/donationPage/:id_category"
                            component={DonationPage}
                        />
                        <Route path="/Donate" component={DonationForm} />
                        <Route
                            exact
                            path="/DonationDetail/:donation_id"
                            component={DonationDetail}
                        />
                        <Route path="/Plight" component={Plight} />
                        <Route path="/PlightDetail" component={PlightDetail} />
                        <Route path="/donated" component={Donated} />
                        <Route
                            path="/ActivityDetail"
                            component={ActivityDetail}
                        />
                        <Route path="/sharePlight" component={SharePlight} />
                    </Switch>
                </div>
                <Footer />
            </ScrollToTop>
        </Router>
    );
}

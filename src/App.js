import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/index";
import NavBar from "./components/navBar";
import Plight from "./pages/plight/plight";
import DonationShowcase from "./pages/donation/donation-page";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import DonationDetail from "./pages/donation/donationDetail";
import { PlightDetailPage } from "./pages/plight/plight-detail-page";
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
import Donated from "./pages/donated/donated";
import ScrollToTop from "./scroll-to-top";
import { InsertData } from "./pages/insert-data";

export default function App() {
    const uid = useSelector((state) => state.firebase.auth.uid);
    return (
        <Router>
            <ScrollToTop>
                {uid !== "GxIEZwxv0ab7cNADjnojaIvrwKW2" ? <NavBar /> : null}
                <div
                    className={
                        uid !== "GxIEZwxv0ab7cNADjnojaIvrwKW2" ? "content" : ""
                    }
                >
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Login" component={Login} />
                        <Route path="/Register" component={Register} />
                        <Route path="/UserHistory" component={UserHistory} />
                        <Route path="/profile" component={Profile} />
                        <Route
                            exact
                            path="/donationPage"
                            component={DonationShowcase}
                        />
                        <Route
                            path="/donationPage/:id_category"
                            component={DonationShowcase}
                        />
                        <Route path="/Donate" component={DonationForm} />
                        <Route
                            exact
                            path="/DonationDetail/:donation_id"
                            component={DonationDetail}
                        />
                        <Route path="/Plight" component={Plight} />
                        <Route
                            path="/PlightDetail/:plight_id"
                            component={PlightDetailPage}
                        />
                        <Route path="/donated" component={Donated} />
                        <Route
                            path="/ActivityDetail"
                            component={ActivityDetail}
                        />
                        <Route path="/sharePlight" component={SharePlight} />
                        <Route path="/insertData" component={InsertData} />
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
                {uid !== "GxIEZwxv0ab7cNADjnojaIvrwKW2" ? <Footer /> : null}
            </ScrollToTop>
        </Router>
    );
}

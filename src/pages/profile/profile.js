import React from "react";
import "./mainProfile.css";
import ProfileDetail from "../../components/profile/profileDetail";
import { ChangePassword } from "../../components/profile/mainProfileChangePass";
import { ReceiveDonation } from "../../components/profile/receiveDonation";
import { SideBar } from "../../components/profile/sideBar";
import { Switch, Route } from "react-router";
import { UserDonate } from "../../components/profile/donation";
export const Profile = () => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <SideBar />
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <Switch>
                        <Route
                            exact
                            path="/profile"
                            component={ProfileDetail}
                        />
                        <Route
                            path="/profile/changepassword"
                            component={ChangePassword}
                        />
                        <Route
                            path="/profile/receiveDonate"
                            component={ReceiveDonation}
                        />
                        <Route
                            path="/profile/donation"
                            component={UserDonate}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

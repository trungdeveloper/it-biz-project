import React from "react";
import "../../cssAdmin/style.css";
import Menu from "../menuLeft/menu";
import { Header } from "../header/header";
import DonatedList from "../donated/donatedList/donatedList";
export const Donated = () => {
    return (
        <div className="dashboard-main-wrapper">
            <Header />
            <Menu />
            <div className="dashboard-wrapper">
                <div className="dashboard-ecommerce">
                    <div className="container-fluid dashboard-content ">
                        <DonatedList />
                    </div>
                </div>
            </div>
        </div>
    );
};

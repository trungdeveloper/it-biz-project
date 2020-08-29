import React from "react";
import "../../cssAdmin/style.css";
import { Menu } from "../menuLeft/menu";
import { Header } from "../header/header";
import DonationList from "../donation/donationList/donationList";
import DonationAdd from "../donation/donationAdd/donationAdd";
// import CategoryList from "../category/categoryList/categoryList";
// import CategoryAdd from "../category/categoryAdd/categoryAdd";
export const Donation = () => {
    return (
        <div className="dashboard-main-wrapper">
            <Header />
            <Menu />
            <div className="dashboard-wrapper">
                <div className="dashboard-ecommerce">
                    <div className="container-fluid dashboard-content ">
                        <button
                            className="btn btn-success"
                            id=" btn-add"
                            onClick={() =>
                                (document.getElementById(
                                    "form-Dona"
                                ).style.display = "block")
                            }
                            style={{ marginBottom: "1rem" }}
                        >
                            Thêm Mới Tài trợ
                        </button>
                        {/* <CategoryAdd />
                        <DonationList /> */}
                        <DonationAdd />
                        <DonationList />
                    </div>
                </div>
            </div>
        </div>
    );
};

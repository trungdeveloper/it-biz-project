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
                        {/* <button
                            className="btn btn-success"
                            id=" btn-add"
                            onClick={() =>
                                (document.getElementById(
                                    "form-Dona"
                                ).style.display = "block")
                            }
                            style={{ marginTop: "-10rem" }}
                        >
                            Thêm Mới Tài trợ
                        </button> */}
                        {/* <CategoryAdd />
                        <DonationList /> */}
                        {/* <DonationAdd /> */}
                        <DonatedList />
                    </div>
                </div>
            </div>
        </div>
    );
};

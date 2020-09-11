import React from "react";
import "../../cssAdmin/style.css";
import { Menu } from "../menuLeft/menu";
import { Header } from "../header/header";
import PlightList from "../plight/plightList/plightList";
import PlightAdd from "../plight/plightAdd/plightAdd";
export const Plight = ({ request }) => {
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
                                    "form-plight"
                                ).style.display = "block")
                            }
                            style={{ marginTop: "-10rem" }}
                        >
                            Thêm Mới Tài trợ
                        </button>

                        <PlightAdd />
                        <PlightList request={request} />
                    </div>
                </div>
            </div>
        </div>
    );
};

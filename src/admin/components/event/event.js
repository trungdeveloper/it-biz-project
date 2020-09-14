import React from "react";
import "../../cssAdmin/style.css";
import Menu from "../menuLeft/menu";
import { Header } from "../header/header";
import EventAdd from "../event/eventAdd/eventAdd";
import EventList from "../event/eventList/eventList";
export const Event = () => {
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
                                    "form-event"
                                ).style.display = "block")
                            }
                            style={{ marginBottom: "1rem" }}
                        >
                            Thêm Mới Sự kiện
                        </button>
                        <EventAdd />
                        <EventList />
                    </div>
                </div>
            </div>
        </div>
    );
};

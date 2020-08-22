import React from "react";
import "../../../assets/css/cssAdmin/style.css";
import { Menu } from "../menuLeft/menu";
import { Header } from "../header/header";
import CategoryList from "../category/categoryList/categoryList";
import CategoryAdd from "../category/categoryAdd/categoryAdd";
export const Category = () => {
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
                                    "form-th"
                                ).style.display = "block")
                            }
                            style={{ marginBottom: "1rem" }}
                        >
                            Add New Category
                        </button>
                        <CategoryAdd />
                        <CategoryList />
                    </div>
                </div>
            </div>
        </div>
    );
};

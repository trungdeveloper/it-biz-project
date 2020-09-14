import React from "react";
import "./category-bar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const CategoryBar = () => {
    const categories = useSelector(
        (state) => state.firestore.ordered.categories
    );
    return (
        <ul className="ul-category">
            <li>
                <Link className="active" to="/donation">
                    Danh mục
                </Link>
            </li>
            {categories &&
                categories.map((cate) => (
                    <li key={cate.id}>
                        <Link to={`/donationPage/${cate.id}`}>{cate.name}</Link>
                    </li>
                ))}
        </ul>
    );
};

export default firestoreConnect(["categories"])(CategoryBar);

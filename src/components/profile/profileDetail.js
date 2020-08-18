import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/oshomah.jpg";

export const ProfileDetail = () => {
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="cause-wrap d-flex flex-wrap justify-content-between col-md-8">
                <figure className="m-0" style={{ marginLeft: "20px" }}>
                    <img src={IMG} alt="Logo"
                        style={{height: "150px", width: "150px", borderRadius: "50%",marginLeft: "40px",}}
                    />
                </figure>

                <div className="cause-content-wrap">
                    <form>
                        <div className="row" style={{ marginBottom: "15px" }}>
                            <label className="col-md-3" htmlFor="fname">Họ và tên: </label>
                            <input className="col-md-8" type="text" id="fname" name="fname"/>
                        </div>
                        <div className="row" style={{ marginBottom: "15px" }}>
                            <label className="col-md-3" htmlFor="fname">Email: </label>
                            <input className="col-md-8" type="text" id="fname"name="fname"/>
                        </div>
                        <div className="row" style={{ marginBottom: "15px" }}>
                            <label className="col-md-3" htmlFor="fname">SĐT: </label>
                            <input className="col-md-8" type="text" id="fname" name="fname" />
                        </div>
                        <div className="row" style={{ marginBottom: "15px" }}>
                            <label className="col-md-3" htmlFor="fname">Địa chỉ: </label>
                            <input className="col-md-8" type="text"id="fname" name="fname"/>
                        </div>
                        <div className="row" style={{ marginBottom: "15px" }}>
                            <div className="col-md-9"></div>
                            <div className="col-md-3">
                                <button className="btn gradient-bg mr-2" type="submit">Cập nhật</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
    );
};

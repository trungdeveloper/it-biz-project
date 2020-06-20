import React from "react";
import { SideBar } from "./../sideBar/sideBar";

export const PersonalProfile = () => {
    return (
        <div className="row">
            <div className="col-3">
                <SideBar />
            </div>
            <div className="col">
                <img src="./images/avata.png" alt="avata" />
                <p>Thay đổi hình đại diện</p>
                <button>BROWSE</button>
            </div>
            <div className="col">
                <form action="#" method="">
                    <div className="row">
                        <div className="col-3">Họ và Tên</div>
                        <div className="col-9">
                            <input type="text" name="txtName" placeholder="Họ và Tên" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">Số điện Thoại</div>
                        <div className="col-9">
                            <input type="text" name="txtPhoneNumber" placeholder="Số điện Thoại" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">Email</div>
                        <div className="col-9">
                            <input type="email" name="txtEmail" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">Nghề Nghiệp</div>
                        <div className="col-9">
                            <input type="text" name="txtJob" placeholder="Nghề Nghiệp" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">Địa chỉ</div>
                        <div className="col-9">
                            <input type="text" name="txtAddress" placeholder="Địa chỉ" />
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="CẬP NHẬT" />
                    </div>
                </form>
            </div>
        </div>
    );
}
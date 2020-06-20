import React from "react";
import { SideBar } from "./../sideBar/sideBar";

export const DonationInformationProfile = () => {
    const donations = [
        {
            date: '12/01/1999',
            content: '101B Le Huu Trac cczczxczxzxczx',
        },
        {
            date: '12/01/1999',
            content: '101B Le Huu Trac cczczxczxzxczx',
        },
        {
            date: '12/01/1999',
            content: '101B Le Huu Trac cczczxczxzxczx',
        },
    ]

    const renderElement = (donation) => {
        return (<tr>
            <td><input type="checkbox" id="vehicle" name="vehicle" value="0" /></td>
            <td>{donation.date}</td>
            <td>{donation.content}</td>
            <td><input type="submit" value="Xóa lịch sử" /></td>
        </tr>)
    }
    
    return (
        <div className="row">
            <div className="col-3">
                <SideBar />
            </div>
            <div className="col-9">
                <div className="row">
                    <h1>THÔNG TIN TÀI TRỢ CỦA BẠN</h1>
                </div>
                <button>Xóa tất cả</button>
                <div className="row">
                    <table>
                        {donations.map(donation => renderElement(donation))}
                    </table>
                </div>
            </div>
        </div>
    );
}
import React from "react";
import { SideBar } from "./../sideBar/sideBar";
export const ReceiveDonationProfile = () => {
    const receives = [
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
    const renderElement = (receive) => {
        return (<tr>
            <td><input type="checkbox" id="vehicle" name="vehicle" value="0" /></td>
            <td>{receive.date}</td>
            <td>{receive.content}</td>
            <td><input type="submit" value="Xóa lịch sử" /></td>
        </tr>)
    }
    return (
        <div className="row">
            <div className="col-3">
                <SideBar/>
            </div>
            <div className="col-9">
                <h1>THÔNG TIN ĐƯỢC NHẬN TÀI TRỢ CỦA BẠN</h1>
                <button>Xóa tất cả</button>
                <table>
                {receives.map(receive => renderElement(receive))}
                </table>
            </div>
        </div>

    );
}
import React from "react";
import "./DonationForm.css";
import "../../assets/style.css";
import { useState } from "react";

export const DonationForm = () => {
  const [state, setState] = useState({
    name: "",
    description: "",
    using: "",
    image: "",
  });

  const onHandleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(state); 
    setState({
      name: '',
      description: '',
      using: '',
      image: ''
    })
  };

  return (
    <div className="donations-wrapper">
      <div className="donations-container">
        <header className="donations-title">Tài trợ</header>
        <form className="donations-form" onSubmit={handleSubmitForm}>
          <div className="form-group">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <label for="">Tên vật phẩm</label>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nhập tên vật phẩm"
                value={state.name}
                onChange={onHandleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <label for="">Chi tiết vật phẩm</label>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Nhập chi tiết vật phẩm"
                value={state.description}
                onChange={onHandleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <label for="">Cách sử dụng</label>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <input
                type="text"
                className="form-control"
                id="using"
                placeholder="Nhập cách sử dụng"
                value={state.using}
                onChange={onHandleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <label for="">Ảnh vật phẩm</label>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <input
                type="file"
                className="form-control"
                id="image"
                value={state.image}
                onChange={onHandleChange}
              />
            </div>
          </div>

          <div className="donations-button">
            <div className="donations-btn-background"></div>
            <button type="submit">Gửi</button>
          </div>
        </form>
      </div>
    </div>
  );
};

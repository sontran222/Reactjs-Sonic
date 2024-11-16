import React, { Component } from "react";
import "./SapChieu.scss";
import VerticalImg1 from "view/Component/Card/VerticalImg1";

class SapChieu extends Component {
  render() {
    return (
      <div className="firstSessionRight">
        <div>Sắp chiếu</div>
        <div className="listFilmSapChieu">
          <VerticalImg1 title="Ứng Viên Tổng Thống Kamala Harris"></VerticalImg1>
          <VerticalImg1 title="Ứng Viên Tổng Thống Kamala Harris"></VerticalImg1>
          <VerticalImg1 title="Ứng Viên Tổng Thống Kamala Harris"></VerticalImg1>
          <VerticalImg1 title="Ứng Viên Tổng Thống Kamala Harris"></VerticalImg1>
          <VerticalImg1 title="Ứng Viên Tổng Thống Kamala Harris"></VerticalImg1>
          <VerticalImg1 title="Ứng Viên Tổng Thống Kamala Harris"></VerticalImg1>
        </div>
      </div>
    );
  }
}

export default SapChieu;

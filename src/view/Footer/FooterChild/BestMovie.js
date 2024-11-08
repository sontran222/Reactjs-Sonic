import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FooterChild.scss";
class BestMovie extends Component {
  render() {
    return (
      <div className="column">
        <p>Phim hay</p>
        <Link to="">Phim Mỹ</Link>
        <Link to="">Phim Hàn Quốc</Link>
        <Link to="">Phim Trung Quốc</Link>
        <Link to="">Phim Thái Lan</Link>
        <Link to="">Phim Việt Nam</Link>
        <Link to="">Phim Ma Kinh Dị</Link>
        <Link to="">Phim Hoạt Hình</Link>
      </div>
    );
  }
}

export default BestMovie;

import React, { Component } from "react";
import { Link } from "react-router-dom";
class NewMovie extends Component {
  render() {
    return (
      <div className="column">
        <p>Phim Mới</p>
        <Link to="">Phim chiếu rạp</Link>
        <Link to="">Phim lẻ</Link>
        <Link to="">Phim bộ</Link>
        <Link to="">Phim hành động</Link>
        <Link to="">Phim viễn tưởng</Link>
        <Link to="">Phim tâm lý</Link>
        <Link to="">Phim hài hước</Link>
      </div>
    );
  }
}

export default NewMovie;

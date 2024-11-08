import React, { Component } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import DropdownCategory from "view/Material_UI/DropdownUI/DropdownCategory";
class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink to="/">Trang chủ</NavLink>
        <NavLink to="/phim-le">Phim lẻ</NavLink>
        <NavLink to="/phim-bo">Phim bộ</NavLink>
        <NavLink to="/hoat-hinh">Hoạt hình</NavLink>
        <NavLink to="/tv-shows">TV show</NavLink>
        <DropdownCategory></DropdownCategory>
        <NavLink to="/quoc-gia">Quốc gia</NavLink>
        <div>
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default Nav;

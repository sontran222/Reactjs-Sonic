import React, { Component } from "react";
import "./Nav.scss";

import Avatar from "@mui/material/Avatar";

import { NavLink } from "react-router-dom";
import DropdownCategory from "view/Material_UI/DropdownUI/DropdownCategory";
import SearchBox from "view/Material_UI/SearchBox/SearchBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
class Nav extends Component {
  render() {
    return (
      <div className="containerNav">
        <div className="nav">
          <NavLink to="/">Trang chủ</NavLink>
          <NavLink to="/phim-le">Phim lẻ</NavLink>
          <NavLink to="/phim-bo">Phim bộ</NavLink>
          <NavLink to="/hoat-hinh">Hoạt hình</NavLink>
          <NavLink to="/tv-shows">TV show</NavLink>
          <DropdownCategory></DropdownCategory>
          <NavLink to="/quoc-gia">Quốc gia</NavLink>
        </div>
        <div className="leftNav">
          <div className="SearchNav">
            <SearchBox></SearchBox>
          </div>
          <div className="AvatarNav">
            <Avatar {...stringAvatar("Tran Cao Son")} />
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;

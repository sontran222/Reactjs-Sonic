import React, { Component } from "react";
import { Menu, MenuItem, Grid, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
class DropdownCountries extends Component {
  state = {
    countryChosen: null,
  };
  handleClick = (event) => {
    this.setState({ countryChosen: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ countryChosen: null });
  };
  render() {
    const { countryChosen } = this.state;
    const categories = [
      ["Chính kịch", "Học Đường", "Hài Hước", "Bí ẩn", "Tài Liệu"],
      ["Tình Cảm", "Hành Động", "Hoạt Hình", "Cổ Trang", "Kinh Dị"],
      ["Tâm Lý", "Phiêu Lưu", "Gia Đình", "Khoa Học", "Viễn Tưởng"],
    ];
    return (
      <div>
        <a onClick={this.handleClick} variant="contained">
          Quốc gia <ArrowDropDownIcon></ArrowDropDownIcon>
        </a>
        <Menu
          countryChosen={countryChosen}
          open={Boolean(countryChosen)}
          onClose={this.handleClose}
          MenuListProps={{ onMouseLeave: this.handleClose }}
          PaperProps={{
            style: { padding: "10px", maxWidth: "400px" },
          }}
        >
          <Grid container spacing={1}>
            {categories.map((column, colIndex) => (
              <Grid item key={colIndex}>
                {column.map((item, index) => (
                  <MenuItem key={index} onClick={this.handleClose}>
                    <Typography variant="body2">{item}</Typography>
                  </MenuItem>
                ))}
              </Grid>
            ))}
          </Grid>
        </Menu>
      </div>
    );
  }
}

export default DropdownCountries;

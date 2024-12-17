import React, { Component } from "react";
import { Menu, MenuItem, Grid, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink } from "react-router-dom";
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
  handleMouseLeave = () => {
    this.handleClose();
  };
  render() {
    const { countryChosen } = this.state;
    const categories = [
      [
        "Âu Mỹ",
        "Thái Lan",
        "Nga",
        "Việt Nam",
        "Tây Ban Nha",
        "Indonesia",
        "Malaysia",
        "Brazil",
        "Thụy Điển",
        "Ireland",
        "Ukraina",
        "UAE",
        "Colombia",
        "Nigeria",
        "Tất cả quốc gia",
      ],
      [
        "Trung Quốc",
        "Anh",
        "Đài Loan",
        "Ấn Độ",
        "Úc",
        "Canada",
        "Philippines",
        "Mexico",
        "Na Uy",
        "Ba Lan",
        "Bỉ",
        "Phần Lan",
        "Ả Rập Xê Út",
        "Chile",
        "Argentina",
      ],
      [
        "Thổ Nhĩ Kỳ",
        "Hàn Quốc",
        "Nhật Bản",
        "Hồng Kông",
        "Ý",
        "Pháp",
        "Đức",
        "Nam Phi",
        "Hà Lan",
        "Đan Mạch",
        "Thụy Sĩ",
        "Bồ Đào Nha",
        "Hy Lạp",
        "Singapore",
      ],
    ];
    return (
      <div>
        <a onMouseEnter={this.handleClick} variant="contained" href="#">
          Quốc gia <ArrowDropDownIcon></ArrowDropDownIcon>
        </a>
        <Menu
          anchorEl={countryChosen}
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

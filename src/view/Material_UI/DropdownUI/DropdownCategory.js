import React, { Component } from "react";
import { Menu, MenuItem, Button, Grid, Typography } from "@mui/material";
class drop extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const categories = [
      ["Chính kịch", "Học Đường", "Hài Hước", "Bí ẩn", "Tài Liệu"],
      ["Tình Cảm", "Hành Động", "Hoạt Hình", "Cổ Trang", "Kinh Dị"],
      ["Tâm Lý", "Phiêu Lưu", "Gia Đình", "Khoa Học", "Viễn Tưởng"],
    ];

    return (
      <div>
        <a onClick={this.handleClick} variant="contained">
          Thể loại
        </a>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
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

export default drop;

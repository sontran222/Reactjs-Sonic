import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { Component } from "react";
import "./SelectValue.scss";
class SelectValue extends Component {
  render() {
    return (
      <div className="selectInput">
        <FormControl variant="filled">
          <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={20}
            onChange={this.handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default SelectValue;

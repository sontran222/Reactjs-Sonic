import { Skeleton } from "@mui/material";
import React, { Component } from "react";

class SkeletonImg extends Component {
  render() {
    return (
      <Skeleton
        key={this.props.key}
        variant="rectangular"
        className="custom-skeleton"
      />
    );
  }
}

export default SkeletonImg;

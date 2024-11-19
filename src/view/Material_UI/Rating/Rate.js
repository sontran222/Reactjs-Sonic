import * as React from "react";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function CustomizedRating() {
  return (
    <Box sx={{ "& > legend": { mt: 2 }, color: "white" }}>
      <Rating
        name="customized-10"
        defaultValue={2}
        max={10}
        sx={{
          "& .MuiRating-iconEmpty": {
            color: "white", // Màu của sao khi chưa chọn
          },
          "& .MuiRating-iconFilled": {
            color: "yellow", // Màu của sao khi đã chọn
          },
          "& .MuiRating-iconHover": {
            color: "orange", // Màu của sao khi hover
          },
        }}
      />
    </Box>
  );
}

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { v4 as uuid } from "uuid";
import { seasons } from "../constants/constants";

export default function Season(props) {
  const { setSelectSeason } = props;
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        style={{ width: 300 }}
        select
        label="Season"
        defaultValue=""
        onChange={(e) => {
          setSelectSeason(e.target.value);
        }}
      >
        {seasons.map((season) => (
          <MenuItem key={uuid()} value={season}>
            {season}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

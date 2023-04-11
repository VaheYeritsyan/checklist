import React from "react";
import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function Country(props) {
  const { selectCountry, setSelectCountry } = props;
  /* const [selectCountry, setSelectCountry] = useState('') */
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
    )
      .then((res) => res.json())
      .then((result) => setItems(result))
      .catch((error) => setError(error));
  }, []);

  const data = Object.values(items);
  if (error) {
    return <p>{error.message}, Error 404</p>;
  } else {
    return (
      <Box sx={{ width: 307 }}>
        <Autocomplete
          style={{ width: 307 }} 
          onChange={(event, value) => setSelectCountry(value)}
          options={data
            .sort((a, b) => {
              return a.name > b.name;
            })
            .map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              fullWidth={false}
              {...params}
              label="Country"
              value={selectCountry}
            />
          )}
        /> 
      </Box>
    );
  }
}

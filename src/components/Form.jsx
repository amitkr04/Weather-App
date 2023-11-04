import React from "react";
import { useState } from "react";
import { getWeather } from "../services/api";

import { Box, InputBase, Button, styled } from "@mui/material";

const Component = styled(Box)({
  background: "#445A6F",
  padding: 10,
});

const Input = styled(InputBase)({
  color: "#FFF",
  marginRight: 20,
  fontSize: 18,
});

const GetButton = styled(Button)({
  background: "#e67e22",
});

const Form = ({ setResult }) => {
  const [data, setData] = useState({ City: "", Country: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getWeatherInfo = async () => {
    let response = await getWeather(data.City, data.Country);
    setResult(response);
  };

  return (
    <Component>
      <Input placeholder="City" onChange={(e) => handleChange(e)} name="City" />
      <Input
        placeholder="Country"
        onChange={(e) => handleChange(e)}
        name="Country"
      />
      <GetButton variant="contained" onClick={() => getWeatherInfo()}>
        GET WEATHER
      </GetButton>
    </Component>
  );
};

export default Form;

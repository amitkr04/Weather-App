import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import OpacityIcon from "@mui/icons-material/Opacity";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloudIcon from "@mui/icons-material/Cloud";
import styled from "@emotion/styled";

const Row = styled(Typography)({
  padding: 10,
  fontSize: 20,
  letterSpacing: 2,
  "& > svg": {
    marginRight: 10,
  },
});

const Clear = styled(Typography)({
  color: "red",
  margin: 70,
  padding: 40,
  fontSize: 30,
});

const Information = ({ result }) => {
  return result && Object.keys(result).length > 0 ? (
    <Box style={{ margin: "30px 60px" }}>
      <Row>
        <LocationOnIcon />
        Location: {result.name},{result.sys.Country}
      </Row>
      <Row>
        <SettingsBrightnessIcon />
        Temperature: {result.main.temp}C
      </Row>
      <Row>
        <OpacityIcon />
        Humidity: {result.main.humidity}%
      </Row>
      <Row>
        <Brightness5Icon />
        Sin Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Brightness6Icon />
        Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <DehazeIcon />
        Humidity: {result.weather[0].main}
      </Row>
      <Row>
        <CloudIcon />
        Clouds: {result.clouds.all}%
      </Row>
    </Box>
  ) : (
    <Clear>Please Enter The City Name</Clear>
  );
};

export default Information;

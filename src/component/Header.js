import React from "react";
import { Box, styled } from "@mui/material";
import ProfileIcon from "../images/profile.png";
import NotificationIcon from "../images/notification.svg";
import DayIcon from "../images/sun.svg";
import NightIcon from "../images/moon.svg";

const HeaderBox = styled(Box)({
  "@media (max-width: 992px)": {
    padding: "10px !important",
    "& .header-box-img": {
      width: "50px",
    },
    "& .darkmode-box": {
      gap: "10px !important",
    },
  },
});
function Header() {
  return (
    <HeaderBox
      className="header-box"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "56px 159px 0px 242px",
      }}
    >
      <Box>
        <img className="header-box-img" src={ProfileIcon} />
      </Box>
      <Box
        className="darkmode-box"
        style={{ display: "flex", alignItems: "center", gap: 69 }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            width: 108,
            background: "#8393a320",
            borderRadius: 20,
            padding: 4,
          }}
        >
          <Box
            style={{
              background: "#777E90",
              width: "50%",
              borderRadius: 20,
              textAlign: "center",
              padding: 3,
            }}
          >
            <img src={NightIcon} />
          </Box>
          <Box style={{ textAlign: "center", width: "50%" }}>
            <img src={DayIcon} />
          </Box>
        </Box>
        <img src={NotificationIcon} />
      </Box>
    </HeaderBox>
  );
}

export default Header;

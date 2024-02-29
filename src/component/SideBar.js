import React from "react";
import { Box, styled } from "@mui/material";
import Logo from "../images/logo.svg";
import Navbar from "../images/navbar.svg";
import Logout from "../images/logout.svg";
export const SideBar = () => {
  const SideBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 38,
    width: "118px",
    padding: "38px 0px",
    minHeight: "100vh",
    "@media (max-width: 992px)": {
      position: "absolute",
      left: "-118px",
    },
  });
  return (
    <SideBox>
      <img src={Logo} />
      <img src={Navbar} style={{ width: 24 }} />
      <img src={Logout} style={{ width: 24, marginTop: 26 }} />
    </SideBox>
  );
};

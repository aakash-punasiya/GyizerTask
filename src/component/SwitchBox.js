import React from "react";
import OnoffIcon from "../images/onoff.png";
import SideupperImage from "../images/upperimg.png";
import SidelowerImage from "../images/lowerimg.png";
import { Box, Typography, styled } from "@mui/material";
const SwitchBox2 = styled(Box)({
  "@media (max-width: 992px)": {
    padding: "20px !important",
    maxWidth: "83% !important",
    width: "100% !important",
    margin: "auto !important",
  },
});
function SwitchBox() {
  return (
    <SwitchBox2
      style={{
        display: "flex",
        gap: 30,
        background: "#7E7BA033",
        borderRadius: 26,
        padding: 35,
        width: 363,
        justifyContent: "space-between",
        marginLeft: "auto",
        marginRight: 35,
      }}
    >
      <Box>
        <Typography color="#fff" style={{ fontSize: 16, fontWeight: 400 }}>
          Activado para <br /> compras
        </Typography>
        <img src={OnoffIcon} style={{ marginTop: 20 }} />
      </Box>
      <Box>
        <Box style={{ position: "relative" }}>
          <img src={SidelowerImage} />
          <img
            src={SideupperImage}
            style={{ position: "absolute", top: 17, left: 19 }}
          />
        </Box>
      </Box>
    </SwitchBox2>
  );
}

export default SwitchBox;

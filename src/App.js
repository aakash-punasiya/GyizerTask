import "./App.css";
import { Box, styled } from "@mui/material";

import { SideBar } from "./component/SideBar";

import Header from "./component/Header";
import GridBox from "./component/GridBox";
import SwitchBox from "./component/SwitchBox";

const MainBox = styled(Box)({
  width: "calc(100vw - 118px)",
  "@media (max-width: 992px)": {
    width: "100vw",
    "& .second-main-box": {
      padding: "20px !important",
      maxWidth: "83% !important",
      width: "100% !important",
      margin: "auto !important",
    },
  },
});
function App() {
  return (
    <Box style={{ display: "flex", background: "black" }}>
      <SideBar />
      <MainBox>
        <Header />
        <SwitchBox />
        <GridBox />
      </MainBox>
    </Box>
  );
}

export default App;

import React from "react";
import { Box, Typography, styled } from "@mui/material";
import FirstImage from "../images/firstbox.png";
import LoginIcon from "../images/login.svg";
import OnoffIcon from "../images/onoff.png";
import SideupperImage from "../images/upperimg.png";
import SidelowerImage from "../images/lowerimg.png";
import BoatIcon from "../images/boat.svg";
import GirlImage from "../images/girl.png";
import FirstTextImage from "../images/firstimg.png";
import SecondTextImage from "../images/secondimg.png";
import ThirdTextImage from "../images/thirdimg.png";
import Graph1Image from "../images/graph1.png";
import Graph2Image from "../images/graph2.png";
import Graph3Image from "../images/graph3.png";
const ParentBox = styled(Box)({
  flexWrap: "wrap",
  display: "flex",
  alignItems: "flex-end",
  marginTop: "-80px",
  gap: 30,
  padding: "0px 15px 100px 60px",
  "& .transform-box": {
    transform: "scale(1.2)",
  },
  "@media (max-width: 992px)": {
    "& .second-main-box": {
      padding: "20px !important",
      maxWidth: "83% !important",
      width: "100% !important",
      margin: "auto !important",
    },
    marginTop: "20px",
    padding: "10px !important",
    "& .full-width-div": {
      width: "100%",
    },
  },
  "& .girl-box": {
    "@media (max-width: 600px)": {
      marginTop: "30px !important",
      height: "170px !important",
      "& .girls-img": {
        width: "200px !important",
        top: "-38px !important",
        left: "-165px !important",
      },
    },
  },
  "@media (max-width: 600px)": {
    "& .full-width-div": {
      width: "100%",
    },
    "& .full-width-div.image-div": {
      width: "95%",
      margin: "auto",
    },
    "& .transform-box": {
      transform: "unset !important",
    },
    "& .left-img-box": {
      flexDirection: "column",
      width: "50%",
      "& img": {
        width: 25,
      },
    },
    "& .login-btn": {
      width: "40px",
      marginTop: "-22px !important",
      position: "absolute",
      right: "35px",
    },
  },
});
function GridBox() {
  return (
    <ParentBox>
      <Box className="full-width-div image-div">
        <img
          src={FirstImage}
          style={{
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
            width: "100%",
          }}
        />
      </Box>
      <Box className="full-width-div">
        <Box
          className="second-main-box"
          style={{
            display: "flex",
            gap: 30,
            background: "#7E7BA033",
            borderRadius: 26,
            padding: 35,
            width: 363,
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography color="#fff" style={{ fontSize: 20, fontWeight: 400 }}>
              Activado para <br /> compras
            </Typography>
            <img
              className="transform-box"
              src={OnoffIcon}
              style={{ marginTop: 20 }}
            />
          </Box>
          <Box>
            <Box className="transform-box" style={{ position: "relative" }}>
              <img src={SidelowerImage} />
              <img
                src={SideupperImage}
                style={{ position: "absolute", top: 17, left: 19 }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          className="second-main-box girl-box"
          style={{
            display: "flex",
            gap: 30,
            background: "#7E7BA033",
            borderRadius: 26,
            padding: "64px 35px 0px 35px",
            maxWidth: 363,
            height: 240,
            marginTop: 30,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              className="left-img-box"
              style={{ display: "flex", gap: 8, maxWidth: 190 }}
            >
              <img src={BoatIcon} />
              <Box>
                <Typography
                  color="#fff"
                  variant="h3"
                  style={{ fontSize: 16, fontWeight: 400 }}
                >
                  Opensea
                </Typography>
                <Typography
                  color="#fff"
                  style={{
                    fontSize: 14,
                    color: "#777E90",
                    fontWeight: 400,
                  }}
                >
                  Discover, collect, and sell extraordinary NFTs
                </Typography>
              </Box>
            </Box>
            <img
              className="login-btn"
              src={LoginIcon}
              style={{ marginTop: 46, cursor: "pointer" }}
            />
          </Box>
          <Box>
            <Box style={{ position: "relative" }}>
              <img
                className="girls-img"
                src={GirlImage}
                style={{
                  position: "absolute",
                  left: "-185px",
                  top: "-88px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="full-width-div">
        <Box
          className="second-main-box"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 60,
            background: "#7E7BA033",
            borderRadius: 26,
            padding: 35,
            width: 265,
            justifyContent: "space-between",
          }}
        >
          <Typography color="#fff" style={{ fontSize: 20, fontWeight: 700 }}>
            Portafolio
          </Typography>
          <Box
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "space-between",
            }}
          >
            <Box>
              <img src={FirstTextImage} style={{ marginBottom: 14 }} />
              <Typography
                style={{
                  background:
                    "linear-gradient(16.42deg, rgba(69, 175, 238, 0.0001) -14.24%, rgba(67, 177, 236, 0.615533) -9.28%, rgba(65, 179, 233, 0.767526) -3.61%, #3EB7E5 30.91%, #23DBBD 84.43%, rgba(30, 224, 183, 0.852977) 96.89%, rgba(28, 228, 179, 0.768733) 104.03%, rgba(27, 229, 177, 0.144475) 108.17%, rgba(23, 234, 172, 0.0001) 117.73%)",
                  backgroundClip: "text",
                  fontSize: 14,
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                +0,09%
              </Typography>
              <Typography
                style={{ fontWeight: 600, color: "white", fontSize: 14 }}
              >
                $345.000
              </Typography>
            </Box>
            <Box>
              <img src={Graph1Image} />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "space-between",
            }}
          >
            <Box>
              <img src={SecondTextImage} style={{ marginBottom: 14 }} />
              <Typography
                style={{
                  background:
                    "linear-gradient(16.42deg, rgba(69, 175, 238, 0.0001) -14.24%, rgba(67, 177, 236, 0.615533) -9.28%, rgba(65, 179, 233, 0.767526) -3.61%, #3EB7E5 30.91%, #23DBBD 84.43%, rgba(30, 224, 183, 0.852977) 96.89%, rgba(28, 228, 179, 0.768733) 104.03%, rgba(27, 229, 177, 0.144475) 108.17%, rgba(23, 234, 172, 0.0001) 117.73%)",
                  backgroundClip: "text",
                  fontSize: 14,
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                +0,09%
              </Typography>
              <Typography
                style={{ fontWeight: 600, color: "white", fontSize: 14 }}
              >
                $345.000
              </Typography>
            </Box>
            <Box>
              <img src={Graph2Image} />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "space-between",
            }}
          >
            <Box>
              <img src={ThirdTextImage} style={{ marginBottom: 14 }} />
              <Typography
                style={{
                  background:
                    "linear-gradient(16.42deg, rgba(69, 175, 238, 0.0001) -14.24%, rgba(67, 177, 236, 0.615533) -9.28%, rgba(65, 179, 233, 0.767526) -3.61%, #3EB7E5 30.91%, #23DBBD 84.43%, rgba(30, 224, 183, 0.852977) 96.89%, rgba(28, 228, 179, 0.768733) 104.03%, rgba(27, 229, 177, 0.144475) 108.17%, rgba(23, 234, 172, 0.0001) 117.73%)",
                  backgroundClip: "text",
                  fontSize: 14,
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                +0,09%
              </Typography>
              <Typography
                style={{ fontWeight: 600, color: "white", fontSize: 14 }}
              >
                $345.000
              </Typography>
            </Box>
            <Box>
              <img src={Graph3Image} />
            </Box>
          </Box>
        </Box>
      </Box>
    </ParentBox>
  );
}

export default GridBox;

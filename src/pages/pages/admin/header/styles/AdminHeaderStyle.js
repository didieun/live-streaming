import { styled } from "@mui/material/styles";
import {Box, IconButton, Typography} from "@mui/material";
import {topBarHeight} from "../../Admin";

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: topBarHeight,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxSizing: "border-box",
  padding: "0 24px",
  borderBottom: "1px solid rgba(248, 248, 248, 0.10)",
  background: "#fff",
  boxShadow: '0px 2px 4px 0px rgba(120, 120, 120, 0.25)',
  position: 'fixed',
  zIndex:1300,
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
}));

export const HamburgerButton = styled(ButtonIcon)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    "&:hover": {
      '& path':{
        stroke: 'rgba(24, 24, 29, 0.7)'
      }
    },
  },
}));

export const LogoBox = styled(Box)(({ theme }) => ({
  marginLeft: 24,
  marginRight: 6,
  display:'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  "& p": {
    fontSize: "1.5rem",
    color: "#18181f",
    fontWeight: 700,
    lineHeight: 0.8,
    marginLeft: 6
  },
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  background: "#eeeeee",
  marginRight: 6,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #DADADA",
  boxSizing: "border-box",
  overflow:'hidden',
  '& img':{
    width: '100%'
  }
}));

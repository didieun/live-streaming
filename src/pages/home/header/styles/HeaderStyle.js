import { styled } from "@mui/material/styles";
import {Box, Button, FormControl, IconButton} from "@mui/material";
import { topBarHeight } from "../../../../App";

export const Container = styled(Box)(({ theme }) => ({
  height: topBarHeight,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxSizing: "border-box",
  padding: "0 24px",
  borderBottom: "1px solid rgba(248, 248, 248, 0.10)",
  background: "#fff",
  boxShadow: '0px 2px 4px 0px rgba(120, 120, 120, 0.25)',
  position: 'relative',
  zIndex:10000,
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
  marginLeft: 29,
  "& p": {
    fontSize: "1.5rem",
    color: "#2E8C6A",
    fontWeight: 700,
  },
}));

export const SearchBox = styled(FormControl)(({ theme }) => ({
  '& .MuiInputBase-root':{
    width: 440,
    maxWidth: 440,
    height: 36,
    background: '#eee',
    borderRadius: 99,
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    '& input':{
      padding: "0 0 0 21px",
      fontSize: "1.125rem",
      color: "#18181d",
      fontWeight: 'normal',
      opacity: 1,
      "&::placeholder": {
        color: "#18181d",
        opacity: 0.7,
        fontWeight: 'normal'
      },
    },
    '&:hover':{
      '& .MuiOutlinedInput-notchedOutline':{
        border: "1px solid #DADADA",
      },
    },
    '& .MuiOutlinedInput-notchedOutline':{
      border: "1px solid #DADADA",
    },
    '&.Mui-focused':{
      '& .MuiOutlinedInput-notchedOutline':{
        border: "2px solid #23b882",
      },
    },
  }
}));

export const HelpButtonIcon = styled(ButtonIcon)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    marginLeft: 24,
  },
}));

export const ButtonMargin = styled(ButtonIcon)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    margin: "0 24px",
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

export const ButtonStyle = styled(Button)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    padding: '10px 16px',
    height: 36,
    minWidth: 10,
    fontSize: "0.813rem",
    fontWeight: 700,
    textTransform: "none",
    boxSizing: 'border-box',
    borderRadius: 8,
    lineHeight: 0,
  },
}));

export const LogInButton = styled(ButtonStyle)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    background:'rgba(46, 140, 106, 0.10)',
    border: '1px solid rgba(46, 140, 106, 0.30)',
    color:'#2E8C6A',
    "&:hover": {
      background: "rgba(46, 140, 106, 0.10)",
    },
  },
}));

export const SignUpButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
      background:'#2E8C6A',
      border: '1px solid #2E8C6A',
      color:'#fff',
      marginLeft: 14,
      "&:hover": {
        background: "#2E8C6A",
      },
    },
}));

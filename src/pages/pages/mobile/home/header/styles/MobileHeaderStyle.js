import { styled } from "@mui/material/styles";
import {Box, Button, Drawer, FormControl, IconButton, ListItemIcon, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 54,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxSizing: "border-box",
  padding: "0 12px",
  background: "#fff",
  boxShadow: '0px 2px 4px 0px rgba(120, 120, 120, 0.25)',
  position: 'fixed',
  zIndex:1201,
}));

export const ContainerSearch = styled(Container)(({ theme }) => ({
  '@media all and (min-width: 490px)': {
    '&:after':{
      content:"''",
      width: 21,
      height: 20,
      display:'block'
    },
  },
  '@media all and (min-width: 768px)': {
    display:'none'
  },
}));

export const SearchBox = styled(FormControl)(({ theme }) => ({
  '&.MuiFormControl-root':{
    width: 'calc(100% - 21px)',
    maxWidth: 440,
  },
  '& .MuiInputBase-root':{
    width: '100%',
    height: 28,
    background: '#eee',
    borderRadius: 78,
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    '& input':{
      padding: "0 0 0 10px",
      fontSize: "0.875rem",
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

export const TabletSearchBox = styled(SearchBox)(({ theme }) => ({
  '&.MuiFormControl-root':{
    '@media all and (max-width: 767px)': {
      display:'none'
    },
  },
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
}));

export const ButtonIconMarginRight = styled(ButtonIcon)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    marginRight: 14,
    '@media all and (min-width: 768px)': {
      display:'none'
    },
  },
}));

export const LogoBox = styled(Box)(({ theme }) => ({
  marginLeft: 5,
  display:'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img':{
    width: 100
  }
}));

export const ButtonMargin = styled(ButtonIcon)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    margin: "0 14px",
  },
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
  width: 28,
  height: 28,
  borderRadius: "50%",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #DADADA",
  boxSizing: "border-box",
  overflow:'hidden',
  '& img':{
    width: '100%'
  },
  '& svg':{
    '& path':{
      stroke: '#2E8C6A',
      opacity: 1
    }
  }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    padding: '0 16px',
    height: 36,
    minWidth: 10,
    fontSize: "0.813rem",
    fontWeight: 700,
    textTransform: "none",
    boxSizing: 'border-box',
    borderRadius: 8,
    lineHeight: 0,
    marginRight: 8,
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
      "&:hover": {
        background: "#2E8C6A",
      },
    },
}));

import { styled } from "@mui/material/styles";
import {Box, Button, Drawer, FormControl, IconButton, ListItemIcon, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 42,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxSizing: "border-box",
  padding: "0 12px",
  background: "#2A2A2A",
  position: 'fixed',
  zIndex:1000,
  borderBottom: '1px solid #6E6E6E'
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
    background: '#3B3B3B',
    borderRadius: 78,
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    '& input':{
      padding: "0 0 0 10px",
      fontSize: "0.875rem",
      color: "#fff",
      fontWeight: 'normal',
      opacity: 1,
      "&::placeholder": {
        color: "#fff",
        opacity: 0.7,
        fontWeight: 'normal'
      },
    },
    '&:hover':{
      '& .MuiOutlinedInput-notchedOutline':{
        border: "1px solid #6F6F6F",
      },
    },
    '& .MuiOutlinedInput-notchedOutline':{
      border: "1px solid #6F6F6F",
    },
    '&.Mui-focused':{
      '& .MuiOutlinedInput-notchedOutline':{
        border: "1px solid #23b882",
      },
    },
    '& path':{
      stroke: '#fff'
    }
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
    '& .back-icon':{
      stroke: '#fff'
    }
  },
}));

export const ButtonIconMarginRight = styled(ButtonIcon)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    marginRight: 14,
    '@media all and (min-width: 768px)': {
      display:'none'
    },
    '& path':{
      stroke: '#fff'
    }
  },
}));

export const LogoBox = styled(Box)(({ theme }) => ({
  marginLeft: 5,
  display:'flex',
  alignItems: 'center',
  justifyContent: 'center',
  "& img": {
    height: '100%'
  },
}));

export const ButtonMargin = styled(ButtonIcon)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    margin: "0 14px",
    '& path':{
      stroke: '#fff'
    }
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

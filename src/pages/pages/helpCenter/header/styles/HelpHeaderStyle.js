import { styled } from "@mui/material/styles";
import {Box, IconButton, ListItemText, Popover, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
  width: '100%',
  boxSizing: "border-box",
  background: "#fff",
  boxShadow: '0px 2px 4px 0px rgba(120, 120, 120, 0.25)',
  position: 'fixed',
  zIndex: 1300
}));

export const ContainerIn = styled('div')(({ theme }) => ({
  width: 1200,
  height: 54,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: '0 auto'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
  display:'flex',
  alignItems: 'center'
}));

export const LogoBox = styled(Box)(({ theme }) => ({
  marginRight: 40,
  display:'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  "& p": {
    fontSize: "1.5rem",
    color: "#18181f",
    fontWeight: 300,
    lineHeight: 0.7,
    marginLeft: 6,
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

export const TopicsText = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root':{
    fontSize: '1rem',
    color: '#18181d',
    fontWeight: 500,
    marginRight: 5
  }
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

export const PopoverBox = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root':{
    minWidth: 230,
    marginTop: 7,
    boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.25)',
    background:'#fff',
    border: '1px solid #dadada',
    borderRadius: 8,
    padding: '4px 3px',
    '& ul':{
      padding: 0,
      '& li':{
        padding: '10px 12px',
        height: 42,
        borderRadius: 0,
        boxSizing: 'border-box',
        cursor:'pointer',
        '&:hover':{
          borderRadius: 3,
          background:'rgba(46, 140, 106, 0.1)',
        }
      }
    },
    '& *':{
      fontFamily:'Inter',
      letterSpacing: '-0.2px'
    }
  }
}));

export const ListText = styled(ListItemText)(({ theme }) => ({
  '& .MuiTypography-root':{
    color: '#18181d',
    fontSize: '0.875rem',
    fontWeight: 500
  }
}));

export const Line = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 1,
  background:'#dadada',
  margin: '4px 0'
}));


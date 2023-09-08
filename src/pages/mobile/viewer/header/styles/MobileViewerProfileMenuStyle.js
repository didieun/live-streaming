import { styled } from "@mui/material/styles";
import {Drawer, IconButton} from "@mui/material";

export const DrawerBox = styled(Drawer)(({ theme }) => ({
    '& .MuiBackdrop-root':{

    },
    '& .MuiPaper-root':{
        width: '100%',
        height: 321,
        boxShadow: '0px -4px 7px 0px rgba(0, 0, 0, 0.25)',
        background: '#2A2A2A',
        boxSizing: 'border-box',
        borderRadius: '10px 10px 0 0',
        '& *, .MuiTypography-root':{
            fontFamily:'Inter',
            letterSpacing: '-0.2px'
        }
    }
}));

export const TopBox = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 16px 15px',
    boxSizing: 'border-box',
    borderBottom: '1px solid #6F6F6F',
    background: '#3B3B3B',
    '& p':{
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 700,
    },
    '&:before':{
        content: "''",
        width: 24,
        height: 24,
        display:'block'
    },
    '& path':{
        stroke: '#fff'
    }
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const MessageBox = styled('div')(({ theme }) => ({
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 24px 24px',
    boxSizing: 'border-box',
    '& p':{
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 400,
        textAlign: 'center',
        marginTop: 16,
        '& span':{
            fontWeight: 700
        }
    }
}));
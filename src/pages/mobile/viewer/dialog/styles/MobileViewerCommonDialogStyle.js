import {styled} from "@mui/material/styles";
import {Button, Dialog, IconButton, Typography} from "@mui/material";

export const DialogBox = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root':{
        maxWidth: 1000,
        background:'#2A2A2A',
        border: '1px solid #6F6F6F',
        boxSizing: 'border-box',
        borderRadius: 10,
        margin: '5px 15px',
        maxHeight: 'calc(100vh - 10px)',
        '& *, .MuiTypography-root':{
            fontFamily:'Inter',
            letterSpacing: '-0.2px'
        }
    }
}));

export const DialogHeader = styled('div')(({ theme }) => ({
    height: 50,
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #6F6F6F',
    padding: '0 16px',
    boxSizing: 'border-box',
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
            opacity: 0.8,
        },
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 700,
    }
}));

export const ActionBox = styled('div')(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 26,
    marginBottom: 19
}));

export const ButtonStyle = styled(Button)(({ theme, action }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 100,
        height: 43,
        padding: '0 20px',
        borderRadius: 5,
        background: 'rgba(255, 255, 255, 0.1)',
        fontSize: '0.875rem',
        color: '#fff',
        border: '1px solid #969696',
        fontWeight: 'bold',
        textTransform: "none",
        boxSizing: 'border-box',
        marginRight: action ? 20 : 0,
        "&:hover": {
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
            border: '1px solid #969696',
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    },
}));

export const ControlButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background: '#23B882',
        marginRight: 0,
        border: 0,
        color: '#fff',
        "&:hover": {
            background: "rgba(35, 184, 130, 0.8)",
            border: 0,
            color: '#fff',
        },
    },
}));

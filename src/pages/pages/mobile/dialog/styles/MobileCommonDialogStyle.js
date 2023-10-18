import {styled} from "@mui/material/styles";
import {Dialog, IconButton, Typography} from "@mui/material";

export const DialogBox = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root':{
        maxWidth: 1000,
        background:'#fff',
        boxShadow:'0px 0px 15px 0px rgba(22, 22, 26, 0.25)',
        border: '1px solid #dadada',
        boxSizing: 'border-box',
        borderRadius: 10,
        margin: '5px 15px',
        maxHeight: 'calc(100vh - 10px)',
        '& *, .MuiTypography-root, button':{
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
    borderBottom: '1px solid #dadada',
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
        color: '#18181d',
        fontWeight: 700,
    }
}));


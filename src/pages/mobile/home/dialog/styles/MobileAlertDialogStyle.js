import {styled} from "@mui/material/styles";
import {Button, Dialog} from "@mui/material";

export const DialogBox = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root':{
        maxWidth: 1200,
        background:'#fff',
        boxShadow:'0px 0px 15px 0px rgba(22, 22, 26, 0.25)',
        border: '1px solid #dadada',
        boxSizing: 'border-box',
        borderRadius: 10,
        padding: '32px 28px 23px',
        '& *, .MuiTypography-root':{
            fontFamily:'Inter',
            letterSpacing: '-0.2px'
        }
    }
}));
export const TextBox = styled('div')(({ theme }) => ({
    '& p':{
        fontSize: '1rem',
        fontWeight: 400,
        color: '#18181d',
        '& span':{
            fontWeight: 700
        }
    }
}));

export const ActionBox = styled('div')(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 26
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 100,
        height: 43,
        padding: '0 20px',
        borderRadius: 5,
        background: '#fff',
        fontSize: '0.875rem',
        color: 'rgba(24, 24, 29, 0.7)',
        border: '1px solid #848589',
        fontWeight: 'bold',
        textTransform: "none",
        boxSizing: 'border-box',
        marginRight: 20,
        "&:hover": {
            background: "rgba(255, 255, 255, 0.8)",
            color: 'rgba(24, 24, 29, 0.8)',
            border: '1px solid rgba(132, 133, 137, 0.8)'
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

import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

export const NoticeContainer = styled('div')(({ theme }) => ({
    padding: '40px 21px 20px',
    boxSizing: 'border-box'
}));

export const TextBox = styled('div')(({ theme }) => ({
    '& p':{
        fontSize: '0.875rem',
        fontWeight: 400,
        color: '#18181d',
        textAlign: 'center',
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
    marginTop: 30
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 140,
        height: 43,
        padding: '0 20px',
        borderRadius: 5,
        background: '#fff',
        fontSize: '1rem',
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

export const ControlButton = styled(ButtonStyle)(({ theme , redColor}) => ({
    "&.MuiButtonBase-root": {
        background: redColor ? '#EF222E' : '#23B882',
        marginRight: 0,
        border: 0,
        color: '#fff',
        "&:hover": {
            background: redColor ? 'rgba(239, 34, 46, 0.8)' : "rgba(35, 184, 130, 0.8)",
            border: 0,
            color: '#fff',
        },
    },
}));

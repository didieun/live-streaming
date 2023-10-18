import {styled} from "@mui/material/styles";
import {
    Button,
    Dialog,
    IconButton,
    Typography
} from "@mui/material";

export const DialogBox = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root':{
        maxWidth: 1200,
        background:'#2a2a2a',
        boxShadow:'none',
        border: '1px solid #6f6f6f',
        boxSizing: 'border-box',
        borderRadius: 10,
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
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 500,
    }
}));

export const ChildrenBox = styled('div')(({ theme }) => ({

}));


export const ActionBox = styled('div')(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 55px 21px',
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-end'
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 140,
        height: 43,
        padding: '0 50px',
        borderRadius: 5,
        background: '#969696',
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: "none",
        "&:hover": {
            background: "rgba(150, 150, 150, 0.8)",
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const ControlButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background: '#23b882',
        marginLeft: 20,
        "&:hover": {
            background: "rgba(35, 184, 130, 0.8)",
        },
    },
}));
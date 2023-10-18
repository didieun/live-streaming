import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const NoticeContainer = styled('div')(({ theme }) => ({
    width: 364,
    padding: '40px 21px 20px',
    boxSizing: 'border-box'
}));

export const ImageBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 210,
    background: '#3B3B3B',
    boxShadow:'0px 1.6414103507995605px 1.6414103507995605px 0px rgba(0, 0, 0, 0.25)',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    boxSizing: 'border-box',
    overflow: 'hidden',
    border: '1px solid #6F6F6F',
    marginBottom: 12,
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    '& path':{
        fill: '#fff'
    }
}));

export const NoImageBox = styled(ImageBox)(({ theme }) => ({
    border: '1px dashed #6F6F6F',
}));

export const ImageText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#fff',
        opacity: 0.6,
        fontWeight: 500,
        marginTop: 4,
        textAlign: 'center'
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 400,
        color: '#fff',
        textAlign: 'center',
        '& span':{
            fontWeight: 700
        }
    }
}));

export const IdText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.75rem',
        color: '#fff',
        fontWeight: 700,
        margin: '20px 0 30px',
        textAlign: 'center'
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
        background: 'rgba(255, 255, 255, 0.1)',
        fontSize: '1rem',
        color: '#fff',
        border: '1px solid #969696',
        fontWeight: 'bold',
        textTransform: "none",
        boxSizing: 'border-box',
        "&:hover": {
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
            border: '1px solid #969696',
        },
        '&.Mui-disabled':{
            background: '#969696',
            color: '#18181d',
        },
    },
}));

export const ControlButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background: '#23B882',
        marginLeft: 20,
        border: 0,
        color: '#fff',
        "&:hover": {
            background: "rgba(35, 184, 130, 0.8)",
            border: 0,
            color: '#fff',
        },
    },
}));
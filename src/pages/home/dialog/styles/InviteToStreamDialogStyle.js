import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";
import {Flex} from "../../studio/startStream/dialog/styles/EditStreamInfoStyle";

export const NoticeContainer = styled('div')(({ theme }) => ({
    width: 364,
    padding: '40px 21px 20px',
    boxSizing: 'border-box'
}));

export const ImageBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 210,
    background: '#eee',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    boxSizing: 'border-box',
    overflow: 'hidden',
    marginBottom: 12,
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
}));

export const NoImageBox = styled(ImageBox)(({ theme }) => ({
    border: '1px dashed #DADADA',
}));

export const ImageText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#18181d',
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
        color: '#18181d',
        textAlign: 'center',
        '& span':{
            fontWeight: 700
        }
    }
}));

export const IdText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.75rem',
        color: '#18181d',
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
        background: '#fff',
        fontSize: '1rem',
        color: 'rgba(24, 24, 29, 0.7)',
        border: '1px solid #848589',
        fontWeight: 'bold',
        textTransform: "none",
        boxSizing: 'border-box',
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
import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const NoticeContainer = styled('div')(({ theme }) => ({
    width: 530,
    padding: '40px 21px 20px',
    boxSizing: 'border-box'
}));

export const NoticeBox = styled('div')(({ theme }) => ({
    width: 50,
    height: 19,
    border: '1px solid #23b882',
    borderRadius: 4,
    background: '#fff',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    '& p':{
        fontSize: '0.75rem',
        color: '#23b882',
        fontWeight: 'bold'
    }
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 500,
        marginBottom: 31
    }
}));

export const ScrollBox = styled('div')(({ theme }) => ({
    maxHeight: 150,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#6f6f6f',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 400,
    }
}));

export const LineStyle = styled('div')(({ theme }) => ({
    width: '100%',
    height: 1,
    background: '#DADADA',
    margin: '6px 0 20px'
}));

export const FlexCenter = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'center'
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 140,
        height: 43,
        padding: '0 20px',
        fontSize: '1rem',
        fontWeight: 'bold',
        textTransform: "none",
        boxSizing: 'border-box',
        background: '#23B882',
        border: 0,
        color: '#fff',
        marginTop: 40,
        "&:hover": {
            background: "rgba(35, 184, 130, 0.8)",
            border: 0,
            color: '#fff',
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    },
}));

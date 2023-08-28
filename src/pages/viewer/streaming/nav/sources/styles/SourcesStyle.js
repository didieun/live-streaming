import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: 346,
    background: '#2A2A2A'
}));

export const TitleBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 46,
    background:'#3C3C3C',
    borderBottom: '1px solid #6f6f6f',
    boxSizing: 'border-box',
    padding: '0 9px',
    display:'flex',
    alignItems:'center'
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color:'#fff',
        fontWeight: 700,
        marginLeft: 7
    }
}));

export const SourcesBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'calc(100% - 46px)',
    padding: '19px 0 12px',
    boxSizing: 'border-box',
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

export const SourcesButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        height: 40,
        background: 'transparent',
        padding: '0 0 0 9px',
        boxSizing: 'border-box',
        borderRadius: 0,
        width: '100%',
        display:'flex',
        justifyContent: 'flex-start',
        '&:hover':{
            background: '#2E8C6A',
            '& p':{
                fontWeight: 700
            }
        },
        '& p':{
            fontSize: '0.938rem',
            color:'#fff',
            fontWeight: 400,
            marginLeft: 7,
            textTransform:'none'
        }
    }
}));

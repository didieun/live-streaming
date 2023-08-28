import {styled} from "@mui/material/styles";
import {Box, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '40%',
    background:'#2A2A2A'
}));

export const Top = styled('div')(({ theme }) => ({
    width: '100%',
    height: 46,
    background:'#3C3C3C',
    borderBottom: '1px solid #6f6f6f',
    boxSizing: 'border-box',
    padding: '0 14px',
    display:'flex',
    alignItems:'center'
}));

export const FlexRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    marginBottom: 8
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color:'#fff',
        fontWeight: 700,
        marginLeft: 9
    }
}));

export const ContentsBox = styled('div')(({ theme }) => ({
    width:'100%',
    height:'calc(100% - 46px)',
    padding: '14px 15px',
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

export const EmptyBox = styled('div')(({ theme }) => ({
    width:'100%',
    height:'100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center'
}));

export const EmptyText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color:'#fff',
        fontWeight: 400,
        textAlign: 'center',
        marginTop: 14
    }
}));

export const TextStyle = styled('div')(({ theme }) => ({
    maxWidth: 'calc(100% - 21px - 12px - 21px)',
    fontSize: '1rem',
    color:'#fff',
    fontWeight: 400,
    marginLeft: 6,
    '& > span':{
        fontWeight: 700
    },
    '& svg':{
        marginLeft: 6
    }
}));

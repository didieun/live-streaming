import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: 100,
    background: '#2A2A2A',
    boxSizing: 'border-box',
    padding: '18px 12px',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-between'
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color:'#fff',
        fontWeight: 400,
    }
}));

export const TextMargin = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root':{
        marginLeft: 40
    }
}));

export const TextOpacity = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root':{
        opacity: 0.6,
        textAlign: 'center'
    }
}));

export const LineStyle = styled('div')(({ theme }) => ({
    width: 1,
    height: 14,
    background: '#fff',
    margin: '0 13px'
}));
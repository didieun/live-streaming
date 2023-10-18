import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: 80,
    background: '#2A2A2A',
    boxSizing: 'border-box'
}));

export const ContainerIn = styled('div')(({ theme }) => ({
    width: 1200,
    height: '100%',
    margin: '0 auto',
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
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
        opacity: 0.6
    }
}));

export const LineStyle = styled('div')(({ theme }) => ({
    width: 1,
    height: 14,
    background: '#fff',
    margin: '0 13px'
}));
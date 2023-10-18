import {styled} from "@mui/material/styles";
import {IconButton, Input, TableContainer, TextareaAutosize, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    maxHeight: 'calc(100vh - 300px)',
    padding: '30px 21px',
    boxSizing: 'border-box',
    overflowY:'auto',
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

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center',
}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'flex-start'
}));

export const MarginBottom30 = styled('div')(({ theme }) => ({
    marginBottom: 30
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 165,
        fontSize: '1rem',
        fontWeight: 700,
        color: 'rgba(24, 24, 29, 0.7)',
        lineHeight: 1
    }
}));

export const PointsText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        fontWeight: 400,
        marginLeft: 5,
        '& span':{
            fontSize: '1.5rem',
            color: '#2E8C6A',
            fontWeight: 700,
            marginRight: 4
        }
    }
}));

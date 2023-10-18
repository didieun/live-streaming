import {styled} from "@mui/material/styles";
import {Button, IconButton, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    padding: '20px 16px 0px',
}));

export const Title = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color:'#23B882',
        fontWeight: 400,
        marginBottom: 5
    }
}));

export const UrlBox = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: 300,
    height: 36,
    borderRadius: 4,
    border: '1px solid #6f6f6f',
    background: '#3c3c3c',
    padding: '0 10px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p':{
        width: 'calc(100% - 21px - 8px)',
        fontSize: '0.813rem',
        color: '#fff',
        fontWeight: 400,
        marginRight: 8,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
    }
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '0 !important',
        "&:hover": {
            background: "transparent",
            opacity: 0.8,
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color:'rgba(255, 255, 255, 0.7)',
        fontWeight: 400,
        marginTop: 24,
        textAlign: 'center'
    }
}));

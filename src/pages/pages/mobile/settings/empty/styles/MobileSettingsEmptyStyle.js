import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const EmptyTableBox = styled('div')(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: '0 15px'
}));

export const EmptyIconBox = styled('div')(({ theme }) => ({
    width: 100,
    height: 100,
    background: '#D9D9D9',
    borderRadius: '50%',
}));

export const EmptyTitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#18181d',
        fontWeight: 700,
        marginTop: 21,
        marginBottom: 24,
        textAlign: 'center'
    }
}));

export const EmptySubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        color: '#18181d',
        marginBottom: 30,
        textAlign: 'center'
    }
}));

export const ActionBox = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const EmptyButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 180,
        height: 36,
        borderRadius: 4,
        background: '#2E8C6A',
        color: '#fff',
        fontSize: '0.813rem',
        fontWeight: 700,
        textTransform: 'none',
        '&:hover':{
            background: 'rgba(46, 140, 106, 0.8)'
        }
    }
}));

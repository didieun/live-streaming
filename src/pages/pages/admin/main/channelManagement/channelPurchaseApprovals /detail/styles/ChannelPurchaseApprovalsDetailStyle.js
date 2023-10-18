import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.875rem',
        color: '#000',
        fontWeight: 700,
        marginBottom: 20
    }
}));

export const BackButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 30,
        "&:hover": {
            background: "transparent",
        },
        '& p':{
            textTransform: 'none',
            fontSize: '0.875rem',
            color: '#848589',
            fontWeight: 'bold',
            marginLeft: 4
        }
    },
}));

export const TableTitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.5rem',
        color: '#18181d',
        fontWeight: 500,
    }
}));

export const JustifyEnd = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'flex-end',
    marginBottom: 60
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'space-between',
    marginTop: 18
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '0 10px',
        height: 36,
        background: '#18181d',
        borderRadius: 4,
        fontSize: '0.938rem',
        fontWeight: 800,
        color: '#fff',
        textTransform:'none',
        marginTop: 14,
        '&:hover':{
            background: '#18181d'
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    }
}));

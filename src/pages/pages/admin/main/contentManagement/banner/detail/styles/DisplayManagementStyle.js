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

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
}));

export const JustifyCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 43
}));

export const TableTitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.5rem',
        color: '#18181d',
        fontWeight: 500,
        '& span':{
            fontWeight: 700
        }
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color: '#2E8C6A',
        fontWeight: 500,
        marginRight: 6
    }
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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

export const LiveBox = styled('div')(({ theme }) => ({
    width: 60,
    height: 23,
    borderRadius: 5,
    background:'#ef222e',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    marginRight: 13,
    '& p':{
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 3
    },
    '& svg':{
        width: 19,
        height: 19
    },
}));

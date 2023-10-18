import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const Message = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.5rem',
        color:'#2E8C6A',
        fontWeight: 400,
        marginBottom: 40
    }
}));

export const LoginButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 346,
        height: 52,
        padding: 0,
        background:'#2E8C6A',
        borderRadius: 8,
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 700,
        textTransform: "none",
        "&:hover": {
            background: "#2E8C6A",
        },
    },
}));
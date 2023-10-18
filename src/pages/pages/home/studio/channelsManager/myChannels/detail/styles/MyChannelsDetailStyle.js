import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const BackButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
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
        marginTop: 10
    }
}));

export const BoxMargin = styled('div')(({ theme }) => ({
    marginTop: 14
}));
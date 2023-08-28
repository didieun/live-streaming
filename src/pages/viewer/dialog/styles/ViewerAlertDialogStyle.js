import {styled} from "@mui/material/styles";
import {Box, Button} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    padding: '40px 21px 20px',
    boxSizing: 'border-box'
}));

export const TextBox = styled('div')(({ theme }) => ({
    '& p':{
        fontSize: '1rem',
        fontWeight: 400,
        color: '#fff',
        textAlign: 'center',
        '& span':{
            fontWeight: 700
        }
    }
}));

export const ActionBox = styled('div')(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 30
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 140,
        height: 43,
        padding: '0 20px',
        borderRadius: 5,
        background: 'rgba(255, 255, 255, 0.1)',
        fontSize: '1rem',
        color: '#fff',
        border: '1px solid #848589',
        fontWeight: 'bold',
        textTransform: "none",
        boxSizing: 'border-box',
        marginRight: 20,
        "&:hover": {
            background: 'rgba(255, 255, 255, 0.1)',
        },
        '&.Mui-disabled':{
            background: '#969696',
            border: '1px solid #969696',
        },
    },
}));

export const buttonColorRed = (theme) => ({
    background: '#ef222e',
    marginRight: 0,
    border: '1px solid #ef222e ',
    color: '#fff',
    "&:hover": {
        background:"rgba(239, 34, 46, 0.8)",
    },
});

export const buttonColor = (theme) => ({
    background: '#23B882',
    marginRight: 0,
    color: '#fff',
    border: '1px solid #23B882',
    "&:hover": {
        background:"rgba(35, 184, 130, 0.8)",
    },
});

export const ControlButton = styled(ButtonStyle, { shouldForwardProp: (prop) => prop !== 'color' })(
    ({ theme, color }) => ({
        ...(color && {
            ...buttonColorRed(theme),
            '&.MuiButtonBase-root': buttonColorRed(theme),
        }),
        ...(!color && {
            ...buttonColor(theme),
            '&.MuiButtonBase-root': buttonColor(theme),
        }),
    }),
);


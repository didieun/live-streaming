import {styled} from "@mui/material/styles";
import {Button, FormControl, FormControlLabel, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center'
}));

export const LogoText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '2.688rem',
        color:'#2e8c6a',
        fontWeight: 'bold',
        marginBottom: 40
    }
}));

export const LoginButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '0',
        width: 346,
        height: 52,
        fontSize: "1.125rem",
        fontWeight: 'bold',
        textTransform: "none",
        boxSizing: 'border-box',
        borderRadius: 8,
        lineHeight: 0,
        background:'#2E8C6A',
        color:'#fff',
        marginTop: 30,
        marginBottom: 10,
        "&:hover": {
            background: "rgba(46, 140, 106, 0.8)",
        },
    },
}));

export const AlignBox = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center',
}));

export const SignUpBox = styled(AlignBox)(({ theme }) => ({
    marginTop: 60
}));

export const ErrorBox = styled(AlignBox)(({ theme }) => ({
    width: 346,
    marginTop: 10
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color:'#18181d',
        // fontWeight: 300,
        marginRight: 5
    }
}));

export const SignUpButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '0',
        minWidth: 10,
        fontSize: '0.875rem',
        color:'#18181d',
        fontWeight: 'bold',
        textDecoration: 'underline',
        textTransform: "none",
        boxSizing: 'border-box',
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const CheckBoxLabel = styled(FormControlLabel)(({ theme }) => ({
    "&.MuiFormControlLabel-root": {
        margin: 0,
        '& .MuiButtonBase-root':{
            padding: 0,
            '&:hover':{
                background:'transparent'
            }
        },
        '& .MuiTypography-root':{
            fontSize: '0.875rem',
            color: '#18181d',
            marginLeft: 6
        }
    },
}));

export const Input = styled(FormControl)(({ theme }) => ({
    '& .MuiInputBase-root':{
        width: 346,
        height: 49,
        background: '#fff',
        borderRadius: '8px 8px 0 0',
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        '& input':{
            padding: "3px 16px 0",
            fontSize: "1rem",
            color: "#18181d",
            fontWeight: 'bold',
            "&::placeholder": {
                opacity: 0.4,
            },
        },
        '&:hover':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "1px solid #DADADA",
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border: "1px solid #DADADA",
        },
        '&.Mui-focused':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "2px solid #23b882 !important",
            },
        },
        '&.Mui-error':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "2px solid #ea2a58 !important",
            },
        },
    }
}));

export const IdInput = styled(Input)(({ theme }) => ({
    '& .MuiInputBase-root':{
        borderRadius: '8px 8px 0 0',
        '&:hover':{
            '& .MuiOutlinedInput-notchedOutline':{
                borderBottom: 0
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            borderBottom: 0
        },
    }
}));

export const PasswordInput = styled(Input)(({ theme }) => ({
    '& .MuiInputBase-root':{
        borderRadius: '0 0 8px 8px',
        '&:hover':{
            '& .MuiOutlinedInput-notchedOutline':{
                borderTop: 0
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            borderTop: 0
        },
    }
}));

export const LineStyle = styled('div')(({ theme }) => ({
    width: 346,
    height: 1,
    background:'#DADADA'
}));

export const ErrorText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color:'#ea2a58',
        fontWeight: 'bold',
        marginLeft: 4
    }
}));
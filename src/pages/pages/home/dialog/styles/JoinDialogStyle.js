import {styled} from "@mui/material/styles";
import {
    Button,
    Dialog, FormControlLabel,
    IconButton, TextField,
    Typography
} from "@mui/material";

export const DialogBox = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root':{
        maxWidth: 1200,
        background:'#fff',
        boxShadow:'0px 0px 15px 0px rgba(22, 22, 26, 0.25)',
        border: '1px solid #dadada',
        boxSizing: 'border-box',
        borderRadius: 10,
        '& *, .MuiTypography-root, button':{
            fontFamily:'Inter',
            letterSpacing: '-0.2px'
        }
    }
}));

export const DialogHeader = styled('div')(({ theme }) => ({
    height: 50,
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #dadada',
    padding: '0 16px',
    boxSizing: 'border-box',
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
        '& .close':{
            stroke: '#18181d'
        }
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color: '#18181d',
        fontWeight: 700,
        marginLeft: 10,
        lineHeight: 1
    }
}));

export const ChildrenBox = styled('div')(({ theme }) => ({
    padding: '30px 21px'
}));

export const ChildrenBoxIn = styled('div')(({ theme }) => ({
    maxHeight: 'calc(100vh - 300px)',
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

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
}));

export const AlignEnd = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'flex-end'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '0',
        width: '100%',
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
        '&.Mui-disabled':{
            background: '#969696'
        },
    },
}));

export const MarginBottom30 = styled('div')(({ theme }) => ({
    marginBottom: 30
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 140,
        fontSize: '1rem',
        fontWeight: 700,
        color: 'rgba(24, 24, 29, 0.7)',
        lineHeight: 1
    }
}));

export const ButtonStyle1 = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 125,
        height: 34,
        borderRadius: 4,
        background: '#18181d',
        color: '#fff',
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'none',
        '&:hover':{
            background: '#18181d'
        }
    },
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
    '&.MuiFormControl-root':{
        width: 284,
        height: 34,
        marginRight: 8,
    },
    '& .MuiInputBase-root':{
        width: '100%',
        height: '100%',
        background: '#eee',
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        padding: '0 8px !important',
        border: "1px solid #dadada",
        '& input':{
            padding: "0 !important",
            fontSize: "0.875rem",
            color: "#18181d",
            fontWeight: 700,
            opacity: 1,
            "&::placeholder": {
                color: "#18181d",
                opacity: 0.4,
                fontWeight: 'normal',
            },
        },
        '&:hover':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "1px solid transparent",
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border: "1px solid transparent",
        },
        '&.Mui-focused':{
            border: "1px solid transparent",
            '& .MuiOutlinedInput-notchedOutline':{
                border: "2px solid #23b882",
            },
        },
        '&.Mui-error':{
            border: "1px solid transparent",
            '& .MuiOutlinedInput-notchedOutline':{
                border: "2px solid #ea2a58",
            },
        },
        '& .MuiInputAdornment-root':{
            '& p':{
                fontSize: "0.875rem",
                color: "#18181d",
                fontWeight: '700',
                opacity: 1,
            }
        }
    }
}));

export const AlignEnd2 = styled(AlignEnd)(({ theme }) => ({
    width: 284,
    display:'flex',
    justifyContent:'flex-end',
    alignItems: 'center'
}));

export const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        opacity: 0.6,
        fontWeight: 400,
        lineHeight: 1.3,
        marginTop: 8,
        '& span':{
            color: '#EF222E',
        }
    }
}));

export const NumberText = styled(SubText)(({ theme }) => ({
    '&.MuiTypography-root':{
        marginTop: 3,
    }
}));

export const WarningBox = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& p':{
        fontSize: '0.875rem',
        color: '#EF222E',
        fontWeight: 400,
        marginLeft: 4
    },
    '& path':{
        stroke: '#EF222E'
    }
}));

export const CheckBox = styled('div')(({ theme, check }) => ({
    display:'flex',
    marginTop: 5,
    '& p':{
        fontSize: '0.875rem',
        color: check ? '#2E8C6A' : 'rgba(24, 24, 24, 0.6)',
        fontWeight: 400,
        marginLeft: 4
    },
    '& svg':{
        marginTop: 3,
        '& path':{
            stroke: check ? '#2E8C6A' : 'rgba(24, 24, 24, 0.6)',
        }
    }
}));

export const FormControlLabelCheckBox = styled(FormControlLabel)(({ theme }) => ({
    '&.MuiFormControlLabel-root':{
        margin: 0,
        '& .MuiButtonBase-root':{
            padding: 0
        },
        '& p':{
            marginLeft: 8,
            fontSize: '0.938rem',
            color: '#070a13',
            fontWeight: 400,
            '& span':{
                color: '#2E8C6A',
                cursor: 'pointer',
                textDecoration: 'underline'
            }
        }
    }
}));

export const LoginText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.938rem',
        color: '#2E8C6A',
        fontWeight: 300
    }
}));

export const LoginButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '0',
        fontSize: '0.938rem',
        color: '#2E8C6A',
        fontWeight: 700,
        background: 'transparent',
        textTransform: 'none',
        "&:hover": {
            background: "transparent",
        },
    },
}));
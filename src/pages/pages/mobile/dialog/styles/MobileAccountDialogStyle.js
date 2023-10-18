import {styled} from "@mui/material/styles";
import {
    Button,
    FormControlLabel,
    IconButton,
    Input,
    TableContainer,
    TextareaAutosize,
    TextField,
    Typography
} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({

}));

export const ContainerIn = styled('div')(({ theme }) => ({
    maxHeight: 'calc(100vh - 300px)',
    padding: '10px 16px',
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
    alignItems:'flex-start'
}));

export const MarginBottom20 = styled('div')(({ theme }) => ({
    marginBottom: 20
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 700,
        color: 'rgba(24, 24, 29, 0.7)',
        lineHeight: 1,
        marginBottom: 8
    }
}));

export const TextStyle = styled(TitleText)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: 'rgba(24, 24, 29, 1)',
    }
}));

export const TextStyle2 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        fontWeight: 400,
        color: 'rgba(24, 24, 29, 1)',
        lineHeight: 1.3,
    }
}));

export const RedText = styled('span')(({ theme }) => ({
    color: '#EF222E',
    fontWeight: 700
}));

export const UnderlineText = styled('span')(({ theme }) => ({
    color: '#18181d',
    textDecoration:'underline',
    cursor:'pointer',
}));

export const FlexEnd = styled('div')(({ theme }) => ({
    width: '100%',
    display:'flex',
    justifyContent:'flex-end'
}));

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: '100%',
    height: 90,
    fontSize: '0.875rem',
    fontWeight: 700,
    color:'#18181D',
    padding: '10px 12px',
    border:'1px solid #DADADA',
    borderRadius: 4,
    background:'transparent',
    resize: 'none',
    boxSizing:'border-box',
    overflowY: 'auto',
    '&::placeholder':{
        color:'#18181d',
        opacity: 0.3,
        fontWeight: 400,
    },
    '&:focus':{
        outline: '0',
        border: '2px solid #23B882'
    },
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#D9D9D9',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
}));

export const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.688rem',
        color: '#18181d',
        opacity: 0.6,
        fontWeight: 400,
        lineHeight: 1.3,
        '& span':{
            color: '#EF222E',
        }
    }
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center',
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
    '&.MuiFormControl-root':{
        width: 250,
        marginRight: 8
    },
    '& .MuiInputBase-root':{
        width: '100%',
        height: 30,
        background: '#eee',
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        padding: '0 8px !important',
        '& input':{
            padding: "0 !important",
            fontSize: "0.75rem",
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
                border: "1px solid #dadada",
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border: "1px solid #dadada",
        },
        '&.Mui-focused':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "2px solid #23b882",
            },
        },
        '&.Mui-error':{
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

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const ActionBox = styled('div')(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 21px 20px',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    background: '#fff'
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: '48%',
        height: 43,
        padding: 0,
        borderRadius: 5,
        background: '#fff',
        fontSize: '0.875rem',
        color: 'rgba(24, 24, 29, 0.7)',
        border: '1px solid #848589',
        fontWeight: 'bold',
        textTransform: "none",
        boxSizing: 'border-box',
        "&:hover": {
            background: "rgba(255, 255, 255, 0.8)",
            color: 'rgba(24, 24, 29, 0.8)',
            border: '1px solid rgba(132, 133, 137, 0.8)'
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    },
}));

export const ControlButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background: '#23B882',
        border: 0,
        color: '#fff',
        "&:hover": {
            background: "rgba(35, 184, 130, 0.8)",
            border: 0,
            color: '#fff',
        },
    },
}));
export const FormControlLabelCheckBox = styled(FormControlLabel)(({ theme }) => ({
    '&.MuiFormControlLabel-root':{
        margin: 0,
        '& .MuiButtonBase-root':{
            padding: 0
        },
        '& .MuiFormControlLabel-label':{
            marginLeft: 8,
            fontSize: '0.875rem',
            color: '#070a13',
            fontWeight: 400
        }
    }
}));

export const WarningButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background: '#EF222E',
        marginRight: 0,
        border: 0,
        color: '#fff',
        "&:hover": {
            background: "rgba(239, 34, 46, 0.8)",
            border: 0,
            color: '#fff',
        },
    },
}));
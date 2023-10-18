import {styled} from "@mui/material/styles";
import {Button, IconButton, Input, TableContainer, TextareaAutosize, TextField, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({

}));

export const ContainerIn = styled('div')(({ theme }) => ({
    maxHeight: 'calc(100vh - 300px)',
    padding: '30px 21px',
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

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center',
}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'flex-start'
}));

export const MarginBottom30 = styled('div')(({ theme }) => ({
    marginBottom: 30
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 165,
        fontSize: '1rem',
        fontWeight: 700,
        color: 'rgba(24, 24, 29, 0.7)',
        lineHeight: 1
    }
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
    '&.MuiFormControl-root':{
        width: 251,
        marginRight: 8
    },
    '& .MuiInputBase-root':{
        width: '100%',
        height: 34,
        background: '#eee',
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        padding: '0 8px !important',
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


export const ActionBox = styled('div')(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 21px 20px',
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-end',
    background: '#fff'
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 140,
        height: 43,
        padding: '0 40px',
        borderRadius: 5,
        background: '#fff',
        fontSize: '1rem',
        color: 'rgba(24, 24, 29, 0.7)',
        border: '1px solid #848589',
        fontWeight: 'bold',
        textTransform: "none",
        boxSizing: 'border-box',
        marginRight: 20,
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
        marginRight: 0,
        border: 0,
        color: '#fff',
        "&:hover": {
            background: "rgba(35, 184, 130, 0.8)",
            border: 0,
            color: '#fff',
        },
    },
}));


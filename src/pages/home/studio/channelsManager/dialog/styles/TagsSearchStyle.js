import {styled} from "@mui/material/styles";
import {IconButton, TextField} from "@mui/material";

export const StyledInput = styled(TextField)(({ theme, width }) => ({
    marginBottom: 4,
    '& .MuiInputBase-root':{
        width: width,
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
            fontWeight: 'normal',
            opacity: 1,
            "&::placeholder": {
                color: "#18181d",
                opacity: 0.7,
                fontWeight: 'normal'
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
    }
}));

export const ListBoxStyle = styled('div')(({ theme }) => ({
    '& *': {
        fontFamily: 'Inter !important',
        letterSpacing: '-0.2px'
    },
    '& .MuiPaper-root':{
        boxShadow:'0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
        borderRadius: '0 0 4px 4px',
        background: '#fff',
    },
    '& .MuiAutocomplete-noOptions':{
        fontSize: '0.875rem',
        color:'#18181d',
        opacity: 0.3
    }
}));

export const ListStyle = styled('li')(({ theme }) => ({
    width: '100%',
    fontSize: '0.875rem',
    color:'#18181d',
    boxSizing: 'border-box',
    height: 24,
    '&:hover':{
        background: '#dadada !important'
    },
    '&.Mui-focused': {
        background: '#dadada !important'
    },
    '&.MuiAutocomplete-option[aria-selected="true"]':{
        background: '#dadada !important'
    },
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));
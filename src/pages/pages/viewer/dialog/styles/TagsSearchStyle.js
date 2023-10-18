import {styled} from "@mui/material/styles";
import {IconButton, TextField} from "@mui/material";

export const StyledInput = styled(TextField)(({ theme, width }) => ({
    marginBottom: 4,
    '& .MuiInputBase-root':{
        width: width,
        height: 34,
        background: 'transparent',
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        padding: '0 8px !important',
        '& input':{
            padding: "0 !important",
            fontSize: "0.875rem",
            color: "#fff",
            fontWeight: 'normal',
            opacity: 1,
            "&::placeholder": {
                color: "#fff",
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
        '& path':{
            stroke: '#fff'
        }
    }
}));

export const ListBoxStyle = styled('div')(({ theme }) => ({
    '& *': {
        fontFamily: 'Inter !important',
        letterSpacing: '-0.2px'
    },
    '& .MuiPaper-root':{
        boxShadow:'none',
        borderRadius: 4,
        background: '#212121',
        border: '1px solid #6f6f6f',
        '& ul':{
            padding: '5px 0',
        }
    },
    '& .MuiAutocomplete-noOptions':{
        fontSize: '0.875rem',
        color:'#fff',
    }
}));

export const ListStyle = styled('li')(({ theme }) => ({
    width: '100%',
    fontSize: '0.875rem',
    color:'#fff',
    boxSizing: 'border-box',
    height: 30,
    borderRadius: 0,
    cursor:'pointer',
    padding: 0,
    '&:hover':{
        background: 'rgba(35, 184, 130, 0.3) !important'
    },
    '&.Mui-focused': {
        background: 'rgba(35, 184, 130, 0.3) !important'
    },
    '&.MuiAutocomplete-option[aria-selected="true"]':{
        background: 'rgba(35, 184, 130, 0.3) !important'
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
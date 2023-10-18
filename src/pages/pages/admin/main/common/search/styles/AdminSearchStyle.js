import {styled} from "@mui/material/styles";
import {FormControl, IconButton} from "@mui/material";

export const SearchBox = styled(FormControl)(({ theme, width }) => ({
    '& .MuiInputBase-root':{
        width: width,
        height: 34,
        background: '#eee',
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        paddingRight: 8,
        '& input':{
            padding: "0 0 0 13px",
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
            background:'#fff',
            '& .MuiOutlinedInput-notchedOutline':{
                border: "1px solid #23b882",
            },
        },
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
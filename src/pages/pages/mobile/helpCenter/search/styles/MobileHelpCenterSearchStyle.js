import {styled} from "@mui/material/styles";
import HelpCenterSearchBk from "../../../../common/images/HelpCenterSearchBk.png";
import {FormControl, IconButton, Typography} from "@mui/material";
import SearchCancelIcon from "../../../../common/images/SearchCancelIcon.svg";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    paddingTop: 54,
    boxSizing: 'border-box'
}));

export const ContainerImage = styled('div')(({ theme }) => ({
    width: '100%',
    height: 83,
    backgroundImage: `url(${HelpCenterSearchBk})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color:'#fff',
        fontWeight: 500,
        position: 'absolute',
        bottom: 30,
    }
}));

export const SearchBox = styled(FormControl)(({ theme}) => ({
    '&.MuiFormControl-root':{
        width: 274,
        position: 'absolute',
        bottom: -14,
    },
    '& .MuiInputBase-root':{
        width: '100%',
        height: 28,
        background: '#fff',
        borderRadius: 52,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        paddingRight: 10,
        '& input':{
            padding: "0 0 0 10px",
            fontSize: "0.875rem",
            color: "#18181d",
            fontWeight: 'normal',
            opacity: 1,
            "&::placeholder": {
                color: "#18181d",
                opacity: 0.7,
                fontWeight: 'normal'
            },
            '&::-webkit-search-cancel-button':{
                WebkitAppearance: 'none',
                content:`url(${SearchCancelIcon})`,
                cursor: 'pointer',
                width: 14
            }
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
            background:'#fff',
            '& .MuiOutlinedInput-notchedOutline':{
                border: "2px solid #23b882",
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
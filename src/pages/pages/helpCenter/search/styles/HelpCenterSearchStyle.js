import {styled} from "@mui/material/styles";
import HelpCenterSearchBk from "../../../common/images/HelpCenterSearchBk.png";
import SearchCancelIcon from "../../../common/images/SearchCancelIcon.svg";
import {FormControl, IconButton, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    paddingTop: 54,
    boxSizing: 'border-box'
}));

export const ContainerImage = styled('div')(({ theme }) => ({
    width: '100%',
    height: 140,
    backgroundImage: `url(${HelpCenterSearchBk})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative'
}));

export const MainContainerImage = styled(ContainerImage)(({ theme }) => ({
    height: 230,
}));

export const ContainerIn = styled('div')(({ theme }) => ({
    width: 1200,
    height: '100%',
    margin: '0 auto',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '2.25rem',
        color:'#fff',
        fontWeight: 500,
        position: 'absolute',
        bottom: 65,
    }
}));

export const SearchBox = styled(FormControl)(({ theme}) => ({
    '&.MuiFormControl-root':{
        width: 720,
    },
    '& .MuiInputBase-root':{
        width: '100%',
        height: 50,
        background: '#fff',
        borderRadius: 114,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        paddingRight: 16,
        '& input':{
            padding: "0 0 0 16px",
            fontSize: "1.125rem",
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
                cursor: 'pointer'
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
                border: "3px solid #23b882",
            },
        },
    }
}));

export const MainSearchBox = styled(SearchBox)(({ theme}) => ({
    '&.MuiFormControl-root':{
        position: 'absolute',
        bottom: -25,
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
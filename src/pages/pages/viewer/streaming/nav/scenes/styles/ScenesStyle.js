import {styled} from "@mui/material/styles";
import {Button, IconButton, Popover, TextField, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'calc(100% - 346px)',
    background: '#2A2A2A',
    borderBottom: '1px solid #6f6f6f',
    boxSizing:'border-box'
}));

export const TitleBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 46,
    background:'#3C3C3C',
    borderTop: '1px solid #6f6f6f',
    borderBottom: '1px solid #6f6f6f',
    boxSizing: 'border-box',
    padding: '11px 9px',
    display:'flex',
    alignItems:'center',
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color:'#fff',
        fontWeight: 700,
        marginLeft: 7
    }
}));

export const ScenesBoxList = styled('div')(({ theme }) => ({
    width: '100%',
    maxHeight: 'calc(100vh - 750px)',
    padding: '15px 9px 0',
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

export const ScenesBox = styled('div')(({ theme }) => ({
    width: '100%',
    marginBottom: 23,
    '&:last-child':{
        marginBottom: 0
    }
}));

export const ScenesBoxIn = styled('div')(({ theme, select }) => ({
    width: '100%',
    aspectRatio: 16 / 9,
    boxSizing: 'border-box',
    background: '#D0D0D0',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: select ? '3px solid #23B882' : '',
    cursor: 'pointer'
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const AddSceneBox = styled('div')(({ theme }) => ({
    padding: '15px 9px 0',
}));

export const AddSceneButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root':{
        width: '100%',
        height: 38,
        borderRadius: 5,
        background:'#fff',
        fontSize: '0.938rem',
        color: '#18181d',
        fontWeight: 700,
        textTransform:'none',
        '&:hover':{
            background:'rgba(255, 255, 255, 0.8)'
        }
    }
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root':{
        width: 117,
        height: 34,
        background: 'transparent',
        borderRadius: 0,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        padding: '0 5px 0 0 !important',
        '& input':{
            padding: "0 !important",
            fontSize: '0.875rem',
            color: '#fff',
            fontWeight: 400,
            opacity: 1,
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
            "&::placeholder": {
                color: "#fff",
                opacity: 0.7,
                fontWeight: 'normal'
            },
        },
        '&:hover':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: 0,
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border: 0,
        },
        '&.Mui-focused':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: 0,
            },
        },
    }
}));

export const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root':{
        background: '#212121',
        boxShadow: 'none',
        border: '1px solid #6f6f6f',
        boxSizing:'border-box',
        '& *': {
            fontFamily: 'Inter !important',
            letterSpacing: '-0.2px'
        },
        '& ul': {
            padding: '5px 0',
            '& li':{
                width: '100%',
                fontSize: '0.875rem',
                color:'#fff',
                boxSizing: 'border-box',
                height: 22,
                borderRadius: 0,
                cursor:'pointer',
                '&:hover':{
                    background: 'rgba(35, 184, 130, 0.3)'
                },
                '&.Mui-selected':{
                    background: 'rgba(35, 184, 130, 0.3)'
                },
            }
        }
    },
}));
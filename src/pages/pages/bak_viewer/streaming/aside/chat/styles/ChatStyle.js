import {styled} from "@mui/material/styles";
import {Box, IconButton, TextareaAutosize, Typography} from "@mui/material";
import {footerHeight} from "../../../Streaming";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '60%',
    background:'#2A2A2A'
}));

export const Top = styled('div')(({ theme }) => ({
    width: '100%',
    height: 46,
    background:'#3C3C3C',
    borderBottom: '1px solid #6f6f6f',
    boxSizing: 'border-box',
    padding: '0 14px',
    display:'flex',
    alignItems:'center'
}));

export const FlexRow = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    marginBottom: 8
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: '100%',
        fontSize: '1.125rem',
        color:'#fff',
        fontWeight: 700,
        marginLeft: 9
    }
}));

export const ContentsBox = styled('div')(({ theme }) => ({
    width:'100%',
    height:`calc(100% - 46px - ${footerHeight}px)`,
    padding: '14px 15px',
    boxSizing: 'border-box',
    overflowY: 'auto',
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

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: '100%',
        fontSize: '1rem',
        color:'#fff',
        fontWeight: 400,
    }
}));

export const ChatBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: footerHeight,
    background:'#3C3C3C',
    padding: '11px 14px 11px 13px',
    boxSizing: 'border-box',
    display:'flex',
    alignItems:'center',
}));

export const SendButton = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 50,
        height: 50,
        padding: 0,
        background:'rgba(35, 184, 130, 0.1)',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: 15,
        boxSizing: 'border-box',
        "&:hover": {
            background:'rgba(35, 184, 130, 0.1)',
            '& path':{
                opacity: 0.8
            }
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: 'calc(100% - 65px)',
    fontSize: '0.875rem',
    fontWeight: 400,
    color:'#fff',
    padding: 0,
    border:0,
    background:'transparent',
    resize: 'none',
    '&::placeholder':{
        color:'#fff'
    },
    '&:focus':{
        outline: 0
    },
    overflowY: 'auto',
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


export const ChatShow = styled('div')(({ theme }) => ({
    display:'flex',
    marginBottom: 6
}));

export const AvatarBox = styled('div')(({ theme }) => ({
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: "#eeeeee",
    marginRight: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #848589",
    boxSizing: "border-box",
    overflow:'hidden',
    '& img':{
        width: '100%'
    },
    '& svg':{
        width: 15,
        height: 15
    }
}));

export const ChatRightBox = styled('div')(({ theme }) => ({
    width: 'calc(100% - 24px - 6px)'
}));

export const UserName = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: 'rgba(255, 255, 255, 0.7)',
    }
}));

export const MyName = styled(UserName)(({ theme }) => ({
    '&.MuiTypography-root':{
        display:'inline-block',
        background: '#23b882',
        padding: '0 3px',
        color: '#2a2a2a'
    }
}));

export const ChatText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 500
    }
}));
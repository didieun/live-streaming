import {styled} from "@mui/material/styles";
import {Box, Button, IconButton, Popover, TextareaAutosize, Typography} from "@mui/material";
import {asideWidth, smallAsideWidth} from "../../Watching";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
}));

export const ChatHeader = styled('div')(({ theme }) => ({
    width: '100%',
    height: 38,
    background:'#3c3c3c',
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '0 3px',
    borderBottom: '1px solid #6f6f6f',
    '&::after':{
        content:"''",
        display:'block',
        width: 24,
        height: 24
    }
}));

export const AlignCenter = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
            opacity: 0.8
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.938rem',
        color:'#fff',
        fontWeight: 'bold',
        marginLeft: 8
    }
}));

export const ChatContents = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'calc(100% - 38px)',
    background: '#292929'
}));

export const ChatBoxIn = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'calc(100% - 100px)',
    padding: '15px 12px',
    boxSizing: 'border-box',
    position:'relative',
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

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#fff',
    }
}));

export const ChatBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 100,
    background:'#3C3C3C',
    padding: '10px 14px 10px 13px',
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


export const GiftButton = styled(ButtonIcon)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 48,
        height:48,
        position: 'absolute',
        bottom: 13,
        right: 14,
        background: '#fff',
        "&:hover": {
            background: "rgba(255, 255, 255, 0.8)",
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
        '& svg':{
            width: 24,
            height: 24
        }
    },
}));

export const PopoverBox = styled(Popover)(({ theme }) => ({
    '&.MuiPopover-root':{
        '& .MuiPaper-root':{
            width: asideWidth,
            background:'#2a2a2a',
            boxShadow: 'none',
            border: '1px solid #6f6f6f',
            borderRadius: 0,
            boxSizing: 'border-box',
            marginLeft: 16,
            marginTop: 13,
            '@media all and (max-width: 1400px)': {
                width: smallAsideWidth,
            },
        }
    }
}));

export const PopoverHeader = styled('div')(({ theme }) => ({
    height: 50,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #6f6f6f',
    padding: '0 14px',
    '& p':{
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 700
    }
}));

export const PopoverContents = styled('div')(({ theme }) => ({
    padding: '20px 20px 20px',
}));

export const JustifySpace = styled(AlignCenter)(({ theme }) => ({
    justifyContent: 'space-between'
}));

export const FlexColumn = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
}));

export const PointBox = styled('div')(({ theme }) => ({
    width: 70,
    height: 70,
    borderRadius: '50%',
    background:'#848589',
    marginBottom: 8
}));

export const PointText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color:'#fff',
        fontWeight: 'bold',
    }
}));

export const JustifyRight = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 15
}));

export const MyPointsBox = styled('div')(({ theme }) => ({
    height: 30,
    display:'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 13px',
    borderRadius: 99,
    background: '#F1D22F',
    '& p':{
        fontSize: '0.875rem',
        color: '#18181d',
        fontWeight: 400,
        '& span':{
            fontWeight: 700
        }
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: '100%',
        height: 36,
        borderRadius: 5,
        background:'#23B882',
        padding: 0,
        "&:hover": {
            background: "rgba(35, 184, 130, 0.8)",
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
        '& p':{
            fontSize: '0.875rem',
            color: '#fff',
            fontWeight: 400,
            textTransform: 'none',
            '& span':{
                fontWeight: 700
            }
        }
    },
}));

export const Chat = styled('div')(({ theme }) => ({
    display:'flex',
    marginBottom: 6
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
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
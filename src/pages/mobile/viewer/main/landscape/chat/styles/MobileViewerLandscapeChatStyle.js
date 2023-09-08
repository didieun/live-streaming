import {styled} from "@mui/material/styles";
import {Box, FormControl, IconButton, Typography} from "@mui/material";
import {ButtonIcon} from "../../../chat/styles/MobileViewerChatDrawerStyle";

export const Container = styled('div')(({ theme }) => ({
    width: 300,
    height: '100vh',
}));

export const ChatHeader = styled('div')(({ theme }) => ({
    width: '100%',
    height: 28,
    background:'#3c3c3c',
    display:'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '0 8px',
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

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        color:'#fff',
        fontWeight: 'bold',
    }
}));

export const ChatContents = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'calc(100% - 28px)',
    background: '#292929'
}));

export const ChatBoxIn = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'calc(100% - 40px)',
    padding: '12px 14px',
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
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 400,
        marginBottom: 14
    }
}));

export const CameraBox = styled('div')(({ theme }) => ({
    width: 18,
    height: 18,
    borderRadius: 4,
    background: 'linear-gradient(180deg, #EF222E 0%, #ED0D5E 100%)',
    border: '1px solid #AA0A13',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6
}));

export const ChatBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 40,
    background:'#3C3C3C',
    padding: '0 9px 0 13px',
    boxSizing: 'border-box',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

export const Chat = styled('div')(({ theme }) => ({
    marginBottom: 10
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

export const UserName = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
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
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 500,
        marginTop: 5
    }
}));

export const  SearchBox = styled(FormControl)(({ theme }) => ({
    '&.MuiFormControl-root':{
        width: 'calc(100% - 30px)',
        maxWidth: 440,
    },
    '& .MuiInputBase-root':{
        width: '100%',
        // height: 28,
        background: '#3B3B3B',
        borderRadius: 0,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        '& input':{
            padding: "0 10px 0 0",
            fontSize: "0.75rem",
            color: "#fff",
            fontWeight: 'normal',
            opacity: 1,
            "&::placeholder": {
                color: "#fff",
                opacity: 1,
                fontWeight: 'normal'
            },
        },
        '&:hover':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "0",
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border: "0",
        },
        '&.Mui-focused':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "0",
            },
        },
        '& path':{
            stroke: '#fff'
        }
    }
}));

export const SendButton = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 30,
        height: 30,
        padding: 0,
        background:'rgba(35, 184, 130, 0.1)',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        "&:hover": {
            background:'rgba(35, 184, 130, 0.1)',
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
        '& svg':{
            width: 16,
            height: 16,
            '& path':{
                opacity: 0.5
            }
        }
    },
}));


export const GiftButtonBox = styled('div')(({ theme }) => ({
    position: 'absolute',
    bottom: 7,
    right: 10,
}));

export const GiftButtonBoxIn = styled('div')(({ theme }) => ({
    position: 'relative',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-end'
}));

export const GiftText = styled('div')(({ theme }) => ({
    fontSize: '0.75rem',
    color: '#23b882',
    fontWeight: 700,
    marginBottom: 5,
    position: 'relative',
    animation: 'fadeInUp 1.8s ease-in-out',
    animationFillMode: 'forwards',
    "@keyframes fadeInUp": {
        "from": {
            transform: 'translate3d(0, 120%, 0)',
        },
        "50%": {
            opacity: 1,
            transform: 'translateZ(0)',
        },
        "to": {
            opacity: 0,
        }
    },
    '&.MuiTypography-root':{

    }
}));

export const GiftButton = styled(ButtonIcon)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 30,
        height:30,
        background: '#fff',
        "&:hover": {
            background: "#fff",
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
        '& svg':{
            width: 15,
            height: 15
        }
    },
}));

import {styled} from "@mui/material/styles";
import {Box, Button, IconButton, Input, Popover, TextareaAutosize, Typography} from "@mui/material";
import {watchingAsideWidth, smallAsideWidth} from "../../Watching";

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
    height: 'calc(100% - 120px)',
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
    height: 120,
    background:'#3C3C3C',
    padding: '10px 8px 10px 8px',
    boxSizing: 'border-box',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}));

export const SendButton = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 36,
        height: 36,
        padding: 0,
        background:'rgba(35, 184, 130, 0.1)',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
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
        '& svg':{
            width: 18,
            height: 18
        }
    },
}));

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: '100%',
    fontSize: '0.875rem',
    fontWeight: 400,
    color:'#fff',
    padding: '0 0 6.5px',
    border:0,
    background:'transparent',
    resize: 'none',
    borderBottom: '1px solid rgba(35, 184, 130, 0.4)',
    '&::placeholder':{
        color:'#fff'
    },
    '&:focus':{
        outline: 0
    },
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#6f6f6f',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        // border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
}));


export const GiftButton = styled(ButtonIcon)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 36,
        height:36,
        background: '#fff',
        "&:hover": {
            background: "rgba(255, 255, 255, 0.8)",
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
        '& svg':{
            width: 18,
            height: 18
        }
    },
}));

export const PopoverBox = styled(Popover)(({ theme }) => ({
    '&.MuiPopover-root':{
        '& .MuiPaper-root':{
            width: watchingAsideWidth,
            background:'#2a2a2a',
            boxShadow: 'none',
            border: '1px solid #6f6f6f',
            borderRadius: 0,
            boxSizing: 'border-box',
            marginLeft: 16,
            marginTop: -75,
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
    padding: '15px 14px 18px',
}));

export const JustifySpace = styled(AlignCenter)(({ theme }) => ({
    justifyContent: 'space-between'
}));

export const FlexWrap = styled('div')(({ theme }) => ({
    display:'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-between'
}));

export const FlexColumn = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
}));

export const MyPointsTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        marginTop: 11,
        fontSize: '0.813rem',
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: 600,
        lineHeight: 1
    }
}));

export const MyPointsMoney = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: 700,
        lineHeight: 1,
        marginBottom: 8,
        '& span':{
            color: '#f1d22f'
        }
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: '100%',
        height: 45,
        borderRadius: 99,
        background:'#23B882',
        padding: 0,
        "&:hover": {
            background: "rgba(35, 184, 130, 0.8)",
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
        '& p':{
            fontSize: '1.063rem',
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
    alignItems: 'flex-start',
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

export const CoinButton = styled('div')(({ theme }) => ({
    width: 86,
    padding: '4px 0 16px',
    boxSizing: 'border-box',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor:'pointer',
}));

export const CountBoxIn = styled('div')(({ theme }) => ({
    width: 76,
    background: '#3C3C3C',
    height: 25,
    borderRadius: 75,
    border: '1px solid #6f6f6f',
    boxSizing: 'border-box',
    padding: '3px 5px',
    display:'inline-flex',
    alignItems: 'center',
    '& path':{
        stroke: '#fff'
    },
    '& .Mui-disabled':{
        '& path':{
            opacity: 0.3
        }
    },
}));

export const InputBox = styled(Input)(({ theme }) => ({
    '&.MuiInputBase-root':{
        width: 30,
        margin: '0 5px',
        fontSize: '1rem',
        fontWeight: 400,
        color: '#fff',
        '& input':{
            textAlign: 'center'
        },
        '&:after, &:before':{
            borderBottom: 0
        }
    },
    '&.MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error):before':{
        borderBottom: 0
    },
}));

export const PointsBoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        color: '#fff',
        opacity:0.6,
        fontWeight: 400,
        marginBottom: 6
    }
}));

export const PopoverMoneyText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 700,
    }
}));

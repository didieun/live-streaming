import {styled} from "@mui/material/styles";
import {Box, Button, IconButton, Typography} from "@mui/material";
import {headerHeight} from "../../Watching";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: headerHeight,
    background:'#2A2A2A',
    borderBottom: '1px solid #6f6f6f',
    boxSizing:'border-box',
    padding: '0 24px',
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position:'fixed',
    zIndex: 1000
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const FlexColumn = styled('div')(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    '& svg':{
        width: 14,
        height: 14
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 96,
        height: 26,
        padding: 0,
        background:'#fff',
        borderRadius: 4,
        fontSize: '0.813rem',
        color: '#23b882',
        fontWeight: 'bold',
        textTransform:'none',
        marginBottom: 4,
        "&:hover": {
            background: "rgba(255, 255, 255, 0.8)",
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const ButtonStyleOn = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background:'#23b882',
        color: '#fff',
        "&:hover": {
            background: "rgba(35, 184, 130, 0.8)",
        },
    },
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        color: '#fff',
        fontWeight: 500,
        marginLeft: 3,
        lineHeight: 1
    }
}));

export const ChannelImageBox = styled('div')(({ theme }) => ({
    width: 79,
    height: 44,
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    overflow: 'hidden',
    border: '1px solid rgba(0, 0, 0, 0.10)',
    boxSizing: 'border-box',
    marginRight: 12,
    background:'#848589',
    '& img':{
        width: '100%'
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        maxWidth: 291,
        fontSize: '1rem',
        color:'#fff',
        fontWeight: 'bold',
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        marginRight: 5,
    }
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
        '& svg':{
            width: 30,
            height: 30
        }
    },
}));

export const ArrowButtonIcon = styled(ButtonIcon)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        '& svg':{
            width: 14,
            height: 14
        }
    },
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "#eeeeee",
    marginRight: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #DADADA",
    boxSizing: "border-box",
    overflow:'hidden',
    '& img':{
        width: '100%'
    },
    '& svg':{
        width: '25px !important',
        height: '25px !important',
    },
}));

export const ProfileButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background:'transparent',
        marginLeft: 24,
        "&:hover": {
            background: "transparent",
        },
        '& svg':{
            width: 14,
            height: 14
        }
    },
}));
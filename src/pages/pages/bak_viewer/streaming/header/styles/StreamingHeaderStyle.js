import {styled} from "@mui/material/styles";
import {headerHeight, smallHeaderHeight} from "../../Streaming";
import {Box, Button, IconButton, Typography} from "@mui/material";

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
    '@media all and (max-width: 1800px)': {
        height: smallHeaderHeight,
    },
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const LogoBox = styled(Box)(({ theme }) => ({
    "& p": {
        fontSize: "1.5rem",
        color: "#2E8C6A",
        fontWeight: 700,
    },
}));

export const ChannelImageBox = styled('div')(({ theme }) => ({
    width: 100,
    height: 56,
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
    '@media all and (max-width: 1800px)': {
        width: 79,
        height: 44,
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        maxWidth: 440,
        fontSize: '1.25rem',
        color:'#fff',
        fontWeight: 700,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        marginRight: 4,
        '@media all and (max-width: 1800px)': {
            maxWidth: 350,
            fontSize: '1rem',
        },
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
        '@media all and (max-width: 1800px)': {
            '& svg':{
                width: 30,
                height: 30
            }
        },
    },
}));

export const ArrowButtonIcon = styled(ButtonIcon)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        '@media all and (max-width: 1800px)': {
            '& svg':{
                width: 14,
                height: 14
            }
        },
    },
}));

export const MarginRight = styled('div')(({ theme }) => ({
    marginRight: 30
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color:'#848589',
        fontWeight: 400,
        '@media all and (max-width: 1800px)': {
            fontSize: '0.75rem',
        },
    }
}));

export const NumberText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.875rem',
        color:'#fff',
        fontWeight: 700,
        lineHeight: 1,
        '@media all and (max-width: 1800px)': {
            fontSize: '1.25rem',
        },
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background:'transparent',
        marginRight: 36,
        '& p': {
            fontSize: '1.25rem',
            marginLeft: 6,
            color:'#848589',
            fontWeight: 400,
            textTransform: "none",
        },
        "&:hover": {
            background: "transparent",
            opacity: 0.8
        },
        '@media all and (max-width: 1800px)': {
            marginRight: 20,
            '& p':{
                fontSize: '0.875rem'
            },
            '& svg':{
                width: 30,
                height: 30
            }
        },
        '&.Mui-disabled':{
            opacity: 0.3
        }
    },
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
    width: 50,
    height: 50,
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
        width: 30,
        height: 30,
    },
    '@media all and (max-width: 1800px)': {
        width: 40,
        height: 40,
        '& svg':{
            width: 30,
            height: 30,
        },
    },
}));

export const ProfileButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        marginLeft: 36,
        marginRight: 0,
        '@media all and (max-width: 1800px)': {
            marginLeft: 20,
            '& svg':{
                width: 14,
                height: 14
            }
        },
    },
}));
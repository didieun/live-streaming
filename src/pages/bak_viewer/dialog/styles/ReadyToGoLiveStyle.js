import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    padding: '40px 55px 16px',
}));

export const VideoBox = styled('div')(({ theme }) => ({
    position:'relative',
    width: 585,
    aspectRatio: 16 / 9,
    background: '#848589',
    boxShadow: '0px 1.6414103507995605px 1.6414103507995605px 0px rgba(0, 0, 0, 0.25)',
    boxSizing:'border-box',
    marginBottom: 20
}));

export const SubVideoBox = styled('div')(({ theme }) => ({
    position:'absolute',
    bottom: 5,
    left: 4,
    width: 190,
    aspectRatio: 16 / 9,
    background: '#3F4147',
    boxSizing:'border-box'
}));

export const BoxStyle = styled('div')(({ theme }) => ({
    width: 585,
    height: 140,
    border: '1px solid #6F6F6F',
    background: '#3c3c3c',
    boxSizing:'border-box',
    borderRadius: 4,
    marginBottom:14,
    overflowY: 'auto',
    padding: '10px 13px',
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

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: 700,
        marginBottom: 8
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 500,
        marginBottom: 3
    }
}));

export const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: 400,
    }
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center'
}));

export const UrlText = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        maxWidth: 'calc(100% - 50px)',
        padding: 0,
        background: "transparent",

        "&:hover": {
            background: "transparent",
            textDecoration: 'underline',
        },
        '& p':{
            color: 'rgba(35, 184, 130, 0.7)',
            fontWeight: 400,
            fontSize: '0.875rem',
            textDecoration: 'underline',
            textTransform: 'none',
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
        }
    },
}));

export const CopyButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 40,
        width: 40,
        height: 20,
        padding: 0,
        background: "#DADADA",
        borderRadius: 4,
        color: '#18181D',
        fontWeight: 500,
        fontSize: '0.75rem',
        textTransform: 'none',
        marginLeft: 10,
        "&:hover": {
            background: "#DADADA",
            opacity: 0.8
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));
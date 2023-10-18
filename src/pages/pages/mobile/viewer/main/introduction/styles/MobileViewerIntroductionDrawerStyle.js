import {styled} from "@mui/material/styles";
import {Box, IconButton, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    height: '100%'
}));

export const TopBar = styled('div')(({ theme }) => ({
    width: '100%',
    height: 36,
    boxSizing: 'border-box',
    background:'#2a2a2a',
    borderBottom: '1px solid #6f6f6f',
    padding: '0 12px',
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    '& p':{
        fontSize: '0.813rem',
        color: '#fff',
        fontWeight: 700,
    },
    '& path':{
        stroke: '#fff'
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

export const ContentsBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'calc(100% - 36px)',
    padding: '13px 12px',
    boxSizing: 'border-box',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#d9d9d9',
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
        fontSize: '0.938rem',
        color:'#fff',
        fontWeight: 700,
        marginBottom: 10
    }
}));


export const AvatarBox = styled(Box)(({ theme }) => ({
    width: 33,
    height: 33,
    borderRadius: "50%",
    background: "#eeeeee",
    marginRight: 7,
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
        width: 20,
        height: 20
    },
}));

export const UserName = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: '0.813rem',
        color: '#fff',
        fontWeight: 700,
        lineHeight: 1.2
    }
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const UserNumberBox = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    '& svg':{
        width: 16,
        height: 16,
        marginRight: 4,
        '& path':{
            stroke: '#848589'
        }
    },
    '& p':{
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 400,
        opacity: 0.7
    }
}));

export const WidthBox = styled('div')(({ theme }) => ({
    width: 'calc(100% - 33px - 7px)',
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.813rem',
        color: '#fff',
        fontWeight: 400,
        lineHeight: '128%',
        marginTop: 13
    }
}));
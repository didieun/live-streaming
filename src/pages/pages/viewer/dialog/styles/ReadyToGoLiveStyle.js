import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    padding: '40px 55px 16px',
}));

export const VideoBox = styled('div')(({ theme }) => ({
    width: 558,
    aspectRatio: 16 / 9,
    background:'#848589',
    boxSizing:'border-box',
    position: 'relative',
    boxShadow: '0px 1.6414103507995605px 1.6414103507995605px 0px rgba(0, 0, 0, 0.25)',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    marginBottom: 20,
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: 'scaleX(-1)'
    }
}));

export const Position = styled('div')(({ theme }) => ({
    position:'absolute',
    bottom: 7,
    right: 7,
}));
export const SubVideoBox = styled(Position)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position:'absolute',
    width: 176,
    aspectRatio: 16 / 9,
    background: '#D0D0D0',
    boxSizing:'border-box',
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}));

export const SubVideoScreenShareBox = styled(SubVideoBox)(({ theme }) => ({
    bottom: 7,
    left: 7,
    right: 'unset'
}));

export const TextShareBox = styled(Position)(({ theme }) => ({
    bottom: 'unset',
    top: 7,
    left: 7,
    right: 'unset',
    '& p':{
        fontFamily:'Roboto !important',
        fontSize: '1.438rem',
        color: '#42FF00',
        fontWeight: 800,
        lineHeight:1,
        transform: 'scaleX(-1)'
    }
}));

export const ImageShareBox = styled(Position)(({ theme }) => ({
    bottom: 'unset',
    top: 12,
    '& img':{
        transform: 'scaleX(-1)'
    }
}));

export const SceneIconUser = styled('div')(({ theme }) => ({
    width: 50,
    height: 50,
    background: '#fff',
    border: '1px solid #dadada',
    borderRadius: '50%',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

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
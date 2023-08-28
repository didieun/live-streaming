import {styled} from "@mui/material/styles";
import {footerHeight} from "../../Streaming";
import {Button, IconButton, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: footerHeight,
    background:'transparent',
    boxSizing:'border-box',
    paddingTop: 4,
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const ContainerListScroll = styled(AlignCenter)(({ theme }) => ({
    width: '100%',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
        width: '10px',
        height: '10px'
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

export const BackgroundBasic = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
}));


export const TabBox = styled('div')(({ theme }) => ({
    minWidth: 86,
    height: 24,
    borderRadius: '5px 5px 0 0',
    background:'#2A2A2A',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 5,
    padding: '0 20px',
    '& p':{
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 400
    }
}));

export const ContainerList = styled('div')(({ theme }) => ({
    width: '100%',
    height: 184,
    background:'#2A2A2A',
    boxSizing:'border-box',
    padding: '5px 13px',
}));

export const ContainerListIn = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
}));

export const EmptyBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p':{
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 400,
        marginLeft: 12
    }
}));

export const PreferenceButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background:'transparent',
        marginLeft: 13,
        "&:hover": {
            background: "transparent",
            opacity: 0.8
        },
        '& p':{
            fontSize: '0.875rem',
            color: '#fff',
            fontWeight: 400,
            marginLeft: 4,
            textTransform: "none",
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
            opacity: 0.8,
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const SceneIconUser = styled('div')(({ theme }) => ({
    width: 40,
    height: 40,
    background: '#fff',
    border: '1px solid #dadada',
    borderRadius: '50%',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

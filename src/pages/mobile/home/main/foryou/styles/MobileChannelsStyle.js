import {styled} from "@mui/material/styles";
import {Box, Button, Typography} from "@mui/material";
import Slider from "react-slick";

export const Container = styled('div')(({ theme }) => ({
    boxSizing: 'border-box',
    display:'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
    gap: '24px 10px',
    padding: '0 26px',
    '@media all and (min-width: 480px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px 5px',
    },
    '@media all and (min-width: 700px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '@media all and (min-width: 1000px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px 10px',
    },
    '@media all and (min-width: 1100px)': {
        gap: 24,
    },
}));

export const ChannelBox = styled(Box)(({ theme }) => ({
    background:'#fff',
    cursor:'pointer',
}));

export const VideoBox = styled(Box)(({ theme }) => ({
    aspectRatio: 16 / 9,
    background: '#C4C4C4',
    border: '1px solid #dadada',
    boxSizing: 'border-box',
    borderRadius: 0,
    overflow:'hidden',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    position: 'relative',
    '& img':{
        width: '100%'
    }
}));

export const LiveBox = styled("div")(({ theme }) => ({
    position:'absolute',
    height: 23,
    top: 10,
    left: 12,
    display:'inline-flex',
    alignItems:'center',
    justifyContent: 'center',
    background:'#ef222e',
    padding: '0 6px 0 5px ',
    borderRadius: 5,
    boxSizing:'border-box',
    '& p':{
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 700,
        marginLeft: 3
    },
    '& svg':{
        width: 18,
        height: 18
    }
}));

export const InfoBox = styled('div')(({ theme }) => ({
    padding: '15px 16px',
    boxSizing: 'border-box',
}));

export const TitleTextBox = styled(Box)(({ theme }) => ({
    boxSizing: 'border-box',
    display: 'table',
    tableLayout: 'fixed',
    width: '100%',
    marginBottom: 16,
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        display: 'table-cell',
        width: '100%',
        maxWidth: '100%',
        fontSize: '1.125rem',
        fontWeight: 600,
        color:'#18181d',
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
    }
}));

export const TextStyle = styled(TitleText)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 'calc(100% - 18px - 7px)',
        fontSize: '0.875rem',
        fontWeight: 'normal',
        color:'rgba(24, 24, 29, 0.7)',
        marginLeft: 7,
        marginBottom: 0,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        '& span':{
            fontWeight: 500
        }
    }
}));

export const AlignCenter = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'
}));

export const ViewersBox = styled(AlignCenter)(({ theme }) => ({
    marginTop: 14,
    marginBottom: 20,
    '& svg':{
        width: 18,
        height: 18,
        '& path':{
            stroke: 'rgba(24, 24, 29, 0.7)'
        }
    }
}));

export const ScrollBox = styled('div')(({ theme }) => ({
    width:'100%',
    display: 'table',
    tableLayout: 'fixed'
}));

export const SliderBox = styled('div')(({ theme }) => ({
    display: 'table-cell',
    width: '100%',
    overflowX:'hidden'
}));

export const SliderBoxIn = styled('div')(({ theme }) => ({
    display: 'flex',
    height: 25,
    overflowX:'scroll',
    '&::-webkit-scrollbar': {
        width: 1,
        height: 1,
    },
    '&::-webkit-scrollbar-thumb': {
        background: 'transparent',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '0',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
}));

export const TagMargin = styled('div')(({ theme }) => ({
    marginRight: 6,
    '&:last-child':{
        marginRight:0
    },
}));

export const TagBox = styled(Button)(({ theme }) => ({
    background:'#d2d2d2',
    maxWidth: 1000,
    height: 24,
    padding: '0 8px',
    borderRadius: 77,
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    '& p':{
        fontSize: '0.75rem',
        color:'rgba(24, 24, 29, 0.7)',
        fontWeight: 500,
        textTransform: "none",
    },
    '&:hover':{
        background:'#d2d2d2'
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: '100%',
        height: 35,
        background:'#969696',
        padding: 0,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        "&:hover": {
            background: "#969696",
        },
        '& p':{
            fontSize: '0.938rem',
            color: '#fff',
            fontWeight: 'bold',
            marginLeft: 8,
            textTransform: "none",
        }
    },
}));

export const ButtonOnStyle = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background:'#3A974C',
        "&:hover": {
            background: "#3A974C",
        },
        '& p':{
            color: '#fff',
        }
    },
}));

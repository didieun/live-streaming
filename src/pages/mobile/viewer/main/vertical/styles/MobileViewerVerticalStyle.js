import {styled} from "@mui/material/styles";

import {Button} from "@mui/material";
import TooltipWrapper from "../../../../../home/TooltipWrapper";
import {smallAsideWidth, watchingAsideWidth} from "../../../../../viewer/watching/Watching";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    padding:'42px 0 0',
    background: '#2A2A2A',
    display: 'flex',
    flexDirection:'column',
}));

export const ContainerIn = styled('div')(({ theme, open }) => ({
    width: '100%',
    background: '#2A2A2A',
    boxSizing: 'border-box',
    position: 'relative',
    flex: 1,
    overflowY:open ? 'hidden' : 'auto',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#D9D9D9',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
}));

export const ChatButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '8px 12px',
        height: 36,
        width: '100%',
        background: '#3B3B3B',
        borderBottom: '1px solid #6f6f6f',
        borderRadius: 0,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        "&:hover": {
            background: "#3B3B3B",
        },
        '& p':{
            fontSize: '0.813rem',
            color: '#fff',
            fontWeight: 700,
            textTransform: 'none',
            marginLeft: 8
        }
    },
}));

export const DrawerBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    background:'#2A2A2A',
    border: '1px solid #6f6f6f',
    position:'absolute',
    bottom: 0,
    animation: 'fadein 0.25s' ,
    "@keyframes fadein": {
        "from": {
            transform: "translateY(200%)",
            opacity: 0
        },
        "to": {
            transform: "translateY(0)",
            opacity: 1
        }
    },
}));

// 공통 툴팁
export const TooltipStyle = styled(TooltipWrapper)(({ theme }) => ({
    background: '#f4d219',
    border: '1px solid #F3A50E',
    borderRadius: 0,
    fontSize: '0.813rem',
    padding: '1px 6px',
    color: '#000',
    fontFamily:'Inter',
    letterSpacing: '-0.2px'
}));

export const ArrowTooltipStyle = styled(TooltipWrapper)(({ theme , top, bottom, right, left, triangle}) => ({
    maxWidth: 500,
    background: '#2F80ED',
    borderRadius: 6,
    padding: 11,
    '& > div':{
        position: 'relative',
        display:'flex',
        alignItems: 'flex-start',
        '&:before':{
            content: "''",
            // backgroundImage: `url(${TooltipArrowBlue})`,
            backgroundImage: `url(${triangle})`,
            backgroundRepeat:'no-repeat',
            position: 'absolute',
            top: top,
            left: left,
            bottom: bottom,
            right: right,
            transform: 'translate(-50%, 0) ',
            width: 26,
            height: 26,
        }
    },
    '& p':{
        fontSize: '0.938rem',
        color: '#fff',
        fontWeight: 400,
        fontFamily:'Inter',
        letterSpacing: '-0.2px',
        marginRight: 10,
        '& span':{
            color: '#F2C0C0',
            fontWeight: 700
        }
    },
    '& .close':{
        stroke: '#fff !important'
    }
}));

export const ArrowTooltipStyleGray = styled(ArrowTooltipStyle)(({ theme , top, bottom, right, left, triangle}) => ({
    background: '#494859',
    borderRadius: 10,
    padding: '8px 11px',
    '& > div':{
        '&:before':{
            backgroundImage: `url(${triangle})`,
            top: top,
            left: left,
            bottom: bottom,
            right: right,
        }
    },
}));




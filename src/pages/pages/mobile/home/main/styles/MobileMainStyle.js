import {styled} from "@mui/material/styles";
import TooltipWrapper from "../../../../home/TooltipWrapper";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box',
    padding: '83px 0 29px',
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
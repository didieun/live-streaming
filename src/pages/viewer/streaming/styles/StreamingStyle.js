import {styled} from "@mui/material/styles";
import {asideWidth, headerHeight, navWidth} from "../Streaming";
import {Box, IconButton} from "@mui/material";
import TooltipWrapper from "../../../home/TooltipWrapper";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    background: '#0d0d0d',
    '& *, .MuiTypography-root':{
        fontFamily:'Inter',
        letterSpacing: '-0.2px'
    }
}));

export const Flex = styled('div')(({ theme }) => ({
    display: 'flex'
}));

export const emptyNav = (theme) => ({
    width: navWidth,
    boxSizing: 'border-box',
    border: '3px solid #23B882'
});

export const basicNav = (theme) => ({
    width: navWidth,
    boxSizing: 'border-box',
});

export const Nav = styled(Box, { shouldForwardProp: (prop) => prop !== 'empty' })(
    ({ theme, empty }) => ({
        ...(empty && {
            ...emptyNav(theme),
            '&.MuiBox-root': emptyNav(theme),
        }),
        ...(!empty && {
            ...basicNav(theme),
            '&.MuiBox-root': basicNav(theme),
        }),
    }),
);

export const Section = styled('div')(({ theme }) => ({
    width: `calc(100% - ${asideWidth}px)`,
    height: `calc(100vh - ${headerHeight}px)`,
}));

export const Aside = styled('div')(({ theme }) => ({
    width: asideWidth,
    height: `calc(100vh - ${headerHeight}px)`,
    borderLeft: '1px solid #6f6f6f',
    boxSizing: 'border-box',
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
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
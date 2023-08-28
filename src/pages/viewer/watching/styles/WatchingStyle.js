import {styled} from "@mui/material/styles";
import {IconButton} from "@mui/material";
import {watchingAsideWidth, watchingHeaderHeight, smallAsideWidth} from "../Watching";
import TooltipWrapper from "../../../home/TooltipWrapper";
import WatchingTooltipArrowGray from "../../../common/images/WatchingTooltipArrowGray.png";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    background: '#0d0d0d',
    '& *, .MuiTypography-root':{
        fontFamily:'Inter',
        letterSpacing: '-0.2px'
    }
}));

export const Contents = styled('div')(({ theme }) => ({
    height: `calc(100% - ${watchingHeaderHeight}px)`,
    paddingTop: watchingHeaderHeight
}));

export const ContentsFullScreen = styled('div')(({ theme }) => ({
    height: '100%'
}));

export const ContentsTop = styled('div')(({ theme }) => ({
    display:'flex',
    width: '100%',
}));

export const openedMixin = (theme) => ({
    width: `calc(100% - ${watchingAsideWidth}px)`,
    // height: 'auto',
    '@media all and (max-width: 1400px)': {
        width: `calc(100% - ${smallAsideWidth}px)`,
    },
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

export const closedMixin = (theme) => ({
    width: '100%',
    // height: 'auto',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
});

export const Section = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        ...(open && {
            ...openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
        }),
    }),
);

export const openedAsideMixin = (theme) => ({
    width: watchingAsideWidth,
    height: `calc(100% - ${watchingHeaderHeight}px)`,
    boxSizing: 'border-box',
    borderLeft:'1px solid #6f6f6f',
    position:'fixed',
    top:watchingHeaderHeight,
    right: 0,
    '@media all and (max-width: 1400px)': {
        width: smallAsideWidth,
    },
});

export const closedAsideMixin = (theme) => ({
    display:'none'
});

export const Aside = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        ...(open && {
            ...openedAsideMixin(theme),
        }),
        ...(!open && {
            ...closedAsideMixin(theme),
        }),
    }),
);

export const openedAsideFullScreen = (theme) => ({
    width: watchingAsideWidth,
    height: 'auto',
    boxSizing: 'border-box',
    borderLeft:'1px solid #6f6f6f',
    '@media all and (max-width: 1400px)': {
        width: smallAsideWidth,
    },
});

export const closedAsideFullScreen = (theme) => ({
    display:'none'
});

export const AsideFullScreen = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        ...(open && {
            ...openedAsideFullScreen(theme),
        }),
        ...(!open && {
            ...closedAsideFullScreen(theme),
        }),
    }),
);

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

export const ArrowTooltipStyle = styled(TooltipWrapper)(({ theme }) => ({
    minWidth: 208,
    maxWidth: 500,
    background: '#2a2a2a',
    border: '1px solid #6F6F6F',
    borderRadius: 35,
    padding: '12px 12px 24px',
    marginBottom: '20px !important',
    '& > div':{
        position: 'relative',
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
        '&:before':{
            content: "''",
            backgroundImage: `url(${WatchingTooltipArrowGray})`,
            backgroundRepeat:'no-repeat',
            position: 'absolute',
            bottom: -50,
            left: '50%',
            transform: 'translate(-50%, 0) ',
            width: 26,
            height: 26,
        }
    },
}));

export const DialogArrowTooltipStyle = styled(TooltipWrapper)(({ theme , top, bottom, right, left, triangle}) => ({
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


export const ArrowTooltipStylePopover = styled(TooltipWrapper)(({ theme }) => ({
    width: 96,
    background: '#2a2a2a',
    border: '1px solid #6F6F6F',
    borderRadius: 8,
    padding: '4px 6.5px 13px',
    boxSizing: 'border-box',
    boxShadow:'0px 0px 10px 0px rgba(22, 22, 26, 0.40)',
    marginRight: '-92px !important',
    marginTop: '-1px !important'
}));

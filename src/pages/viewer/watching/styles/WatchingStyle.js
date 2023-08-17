import {styled} from "@mui/material/styles";
import {IconButton, Tooltip} from "@mui/material";
import {asideWidth, headerHeight, smallAsideWidth} from "../Watching";

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
    height: `calc(100% - ${headerHeight}px)`,
    paddingTop: headerHeight
}));

export const ContentsTop = styled('div')(({ theme }) => ({
    display:'flex',
    width: '100%',
}));

export const openedMixin = (theme) => ({
    width: `calc(100% - ${asideWidth}px)`,
    height: 'auto',
    '@media all and (max-width: 1400px)': {
        width: `calc(100% - ${smallAsideWidth}px)`,
    },
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

export const closedMixin = (theme) => ({
    width: 'calc(100% - 43px)',
    height: 'auto',
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
    width: asideWidth,
    height: `calc(100% - ${headerHeight}px)`,
    boxSizing: 'border-box',
    borderLeft:'1px solid #6f6f6f',
    position:'fixed',
    top:headerHeight,
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

export const ChatCloseBox = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems:'flex-start',
    paddingRight: 24,
    paddingTop: 12
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
    },
}));

// 공통 툴팁
export const TooltipStyle = styled(({ className, ...props }) => (
    <Tooltip {...props} componentsProps={{ tooltip: { className: className } }} />
))(`
    background: #f4d219;
    border: 1px solid #F3A50E;
    border-radius: 0;
    font-size: 0.813rem;
    padding: 1px 6px;
    color: #000;
`);
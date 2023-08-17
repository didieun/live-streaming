import {styled} from "@mui/material/styles";
import {asideWidth, smallAsideWidth} from "../../Watching";
import {Box, Button, Typography} from "@mui/material";

export const openedMixin = (theme) => ({
    width: `calc(100% - ${asideWidth}px)`,
    padding: '25px 12px',
    boxSizing: 'border-box',
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
    padding: '25px 12px',
    boxSizing: 'border-box',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
});

export const Container = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        ...(open && {
            ...openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
        }),
    }),
);

export const Flex = styled('div')(({ theme }) => ({
    display: 'flex',
    marginBottom: 34
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
    width: 66,
    height: 66,
    borderRadius: "50%",
    background: "#eeeeee",
    marginRight: 14,
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
        width: 35,
        height: 35
    },
    '@media all and (max-width: 1500px)': {
        width: 50,
        height: 50,
        '& svg':{
            width: 28,
            height: 28
        },
    },
}));

export const UserName = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: 'calc(100% - 66px - 14px)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: '1.375rem',
        color: '#fff',
        fontWeight: 700,
        '@media all and (max-width: 1500px)': {
            fontSize: '1.25rem',
        },
    }
}));

export const BoxStyle = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: 114,
    borderRadius: 3,
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '12px 11px',
    boxSizing: 'border-box'
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 400,
        lineHeight: 1.5,
        '@media all and (max-width: 1500px)': {
            fontSize: '0.875rem',
        },
    }
}));

export const ShowMoreButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background: 'transparent',
        fontSize: '0.875rem',
        color: '#848589',
        textTransform: 'none',
        marginTop: 16,
        "&:hover": {
            background: "transparent",
        },
        '@media all and (max-width: 1500px)': {
            fontSize: '0.75rem',
        },
    },
}));
import {drawerCloseWidth, drawerOpenWidth, topBarHeight} from "../../../../App";
import {styled} from "@mui/material/styles";
import {
    Box,
    FormControl,
    IconButton,
    MenuItem,
} from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';

export const openedMixin = (theme) => ({
    '& .MuiPaper-root':{
        width: drawerOpenWidth,
        height: `calc(100vh - ${topBarHeight}px)`,
        marginTop: topBarHeight,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        background: '#fff !important',
        borderRight: '0px !important',
        boxShadow:'none',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        boxSizing: 'border-box',
        '& ul':{
            paddingTop: 30,
            paddingBottom: 0,
            '& .MuiButtonBase-root':{
                height: 44,
                padding: '11px 0 11px 13px',
                boxSizing:'border-box',
                '&:hover':{
                    background:'transparent'
                }
            }
        },
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }
});

export const closedMixin = (theme) => ({
    '& .MuiPaper-root': {
        width: drawerCloseWidth,
        height: `calc(100vh - ${topBarHeight}px)`,
        marginTop: topBarHeight,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        background: '#fff !important',
        borderRight: '0px !important',
        boxShadow:'none',
        overflowX: 'hidden',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        boxSizing: 'border-box',
        '& ul':{
            paddingTop: 30,
            paddingBottom: 0,
            '& .MuiButtonBase-root':{
                height: 44,
                padding: '11px 0px 11px 24px',
                boxSizing:'border-box',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:hover':{
                    background:'transparent'
                }
            }
        },
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    }
});

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export const LanguageBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    paddingLeft:24,
    paddingBottom: 45,
    boxSizing: 'border-box'
}));

export const FormControlBox = styled(FormControl)(({ theme }) => ({
    '& .MuiSelect-select':{
        minWidth: 74,
        padding: '5px 30px 5px 4px !important',
        fontSize: '1rem',
        height:26,
        boxSizing:'border-box',
        color:'#18181d',
        display:'flex',
        alignItems: 'center',
        background: '#fff',
        fontWeight: 700
    },
    '& input':{
        fontSize: '0.875rem',
        color:'#18181d',
        fontWeight: 700
    },
    '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
        border: 0,
        borderRadius: 0
    },
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const Menu = styled(MenuItem)(({ theme }) => ({
    '&.MuiMenuItem-root':{
        width: '100%',
        fontSize: '1rem',
        color:'#323232',
        boxSizing: 'border-box',
        height: 28,
        '&:hover':{
            background: '#eee'
        },
        '&.Mui-selected':{
            background: '#eee'
        },
    }
}));

export const FormControlBoxClose = styled(FormControlBox)(({ theme }) => ({
    '& .MuiSelect-select, svg':{
        display:'none'
    },
}));

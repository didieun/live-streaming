import {drawerCloseWidth, drawerOpenWidth, topBarHeight} from "../../Admin";
import {styled} from "@mui/material/styles";
import {
    Box,
    FormControl,
    IconButton, ListItemButton, ListItemIcon, ListItemText,
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

export const listItemOff = (theme) => ({
    '& g':{
        opacity: 0.7
    },
    '&:after':{
        content: "''",
        width: 6,
        height: 44,
        background: 'transparent',
        borderRadius:99
    }
});

export const listItemOn = (theme) => ({
    background:'rgba(46, 140, 106, 0.10)',
    '& .MuiListItemText-root .MuiTypography-root':{
        fontWeight: 700,
        color: '#2E8C6A'
    },
    '& .user, .channel, .point, .exchange, .content, .help-center':{
        stroke: '#2E8C6A !important',
    },
    '& g':{
        opacity: 1
    },
    '&:hover':{
        background:'rgba(46, 140, 106, 0.10) !important',
    },
    '&:after':{
        content: "''",
        width: 6,
        height: 44,
        background: '#2E8C6A',
        borderRadius:99
    }
});

export const ListItem = styled(ListItemButton, { shouldForwardProp: (prop) => prop !== 'select' })(
    ({ theme, select }) => ({
        ...(select && {
            ...listItemOn(theme),
            '&.MuiBox-root': listItemOn(theme),
        }),
        ...(!select && {
            ...listItemOff(theme),
            '&.MuiBox-root': listItemOff(theme),
        }),
    }),
);

export const ListIcon = styled(ListItemIcon)(({ theme }) => ({
    '&.MuiListItemIcon-root':{
        minWidth: 0,
        '& .heart':{
            stroke: 'rgba(24, 24, 29, 0.7)'
        }
    }
}));

export const ListText = styled(ListItemText)(({ theme }) => ({
    '& .MuiTypography-root':{
        marginLeft: 10,
        fontSize: '0.875rem',
        fontWeight: 500,
        color:'rgba(24, 24, 29, 0.7)'
    }
}));

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

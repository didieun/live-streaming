import {styled} from "@mui/material/styles";
import {Box, Drawer, IconButton, Popover, Typography} from "@mui/material";
import {asideWidth, headerHeight} from "../../Streaming";

export const DrawerBox = styled(Drawer)(({ theme, open }) => ({
    '& .MuiBackdrop-root':{
        background: 'transparent',
    },
    '& .MuiPaper-root':{
        width: open ? 240 : 0,
        borderLeft: open? '1px solid #6f6f6f' : 0,
        right: asideWidth,
        height: `calc(100vh - ${headerHeight}px)`,
        marginTop: headerHeight,
        boxShadow: '0px 4px 10px 0px rgba(22, 22, 26, 0.25)',
        background: '#2a2a2a',
        boxSizing: 'border-box',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        '& *, .MuiTypography-root':{
            fontFamily:'Inter',
            letterSpacing: '-0.2px'
        }
    }
}));

export const TopBox = styled('div')(({ theme }) => ({
    borderBottom: '1px solid #DADADA',
    padding: '15px 12px 6px 13px',
    boxSizing: 'border-box',
    background: '#3c3c3c',
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const JustifyEnd = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 13
}));

export const TopTitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        fontWeight: 700,
        color: '#fff'
    }
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const CloseButton = styled(ButtonIcon)(({ theme }) => ({
    "&.MuiButtonBase-root": {

    },
}));

export const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root':{
        background: '#212121',
        boxShadow: 'none',
        border: '1px solid #6f6f6f',
        boxSizing:'border-box',
        '& *': {
            fontFamily: 'Inter !important',
            letterSpacing: '-0.2px'
        },
        '& ul': {
            padding: '5px 0',
            '& li':{
                width: '100%',
                fontSize: '0.875rem',
                color:'#fff',
                boxSizing: 'border-box',
                height: 22,
                borderRadius: 0,
                cursor:'pointer',
                '&:hover':{
                    background: 'rgba(35, 184, 130, 0.3)'
                },
                '&.Mui-selected':{
                    background: 'rgba(35, 184, 130, 0.3)'
                },
            }
        }
    },
}));

export const selectBox = (theme) => ({
    padding: '20px 27px',
    borderBottom: '1px solid #DADADA',
    boxSizing: 'border-box',
    position: 'relative',
    background: 'rgba(238, 238, 238, 0.1)',
    cursor:'pointer'
});

export const basicBox = (theme) => ({
    padding: '20px 27px',
    borderBottom: '1px solid #DADADA',
    boxSizing: 'border-box',
    position: 'relative',
    background: 'transparent',
    cursor:'pointer'
});

export const BoxStyle = styled(Box, { shouldForwardProp: (prop) => prop !== 'select' })(
    ({ theme, select }) => ({
        ...(select && {
            ...selectBox(theme),
            '&.MuiBox-root': selectBox(theme),
        }),
        ...(!select && {
            ...basicBox(theme),
            '&.MuiBox-root': basicBox(theme),
        }),
    }),
);

export const NoticeBox = styled('div')(({ theme }) => ({
    width: 50,
    height: 19,
    border: '1px solid #23b882',
    borderRadius: 4,
    background: '#fff',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    '& p':{
        fontSize: '0.75rem',
        color: '#23b882',
        fontWeight: 'bold'
    }
}));

export const selectTitle = (theme) => ({
    fontSize: '0.875rem',
    color: '#fff',
    marginBottom: 12,
    fontWeight: 'bold'
});

export const title = (theme) => ({
    fontSize: '0.875rem',
    color: '#fff',
    marginBottom: 12,
    fontWeight: 400
});

export const TitleText = styled(Typography, { shouldForwardProp: (prop) => prop !== 'select' })(
    ({ theme, select }) => ({
        ...(select && {
            ...selectTitle(theme),
            '&.MuiTypography-root': selectTitle(theme),
        }),
        ...(!select && {
            ...title(theme),
            '&.MuiTypography-root': title(theme),
        }),
    }),
);

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 400,
        opacity: 0.7,
        '& span':{
            color: '#23B882',
            cursor: 'pointer'
        }
    }
}));

export const DateText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 400,
        marginTop: 10
    }
}));

export const BadgeBox = styled('div')(({ theme }) => ({
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: '#EF222E',
    position: 'absolute',
    top: 25,
    left: 13
}));

export const EmptyBox = styled('div')(({ theme }) => ({
    width: '100%',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px 18px',
    boxSizing: 'border-box'
}));

export const EmptyTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 700,
        color: '#18181d',
        margin: '14px 0'
    }
}));

export const EmptyText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        color: '#18181d',
        opacity: 0.7,
        textAlign: 'center'
    }
}));
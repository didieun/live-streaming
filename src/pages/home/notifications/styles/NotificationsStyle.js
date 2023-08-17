import {styled} from "@mui/material/styles";
import {Box, Drawer, IconButton, Popover, Typography} from "@mui/material";
import {drawerCloseWidth, drawerOpenWidth, topBarHeight} from "../../../../App";

export const DrawerBox = styled(Drawer)(({ theme }) => ({
    '& .MuiBackdrop-root':{
        background: 'transparent'
    },
    '& .MuiPaper-root':{
        width: 240,
        height: `calc(100vh - ${topBarHeight}px)`,
        marginTop: topBarHeight,
        boxShadow: '0px 4px 10px 0px rgba(22, 22, 26, 0.25)',
        background: '#fff',
        boxSizing: 'border-box',
        '& *, .MuiTypography-root':{
            fontFamily:'Inter',
            letterSpacing: '-0.2px'
        }
    }
}));

export const TopBox = styled('div')(({ theme }) => ({
    borderBottom: '1px solid #DADADA',
    padding: '15px 12px 6px 13px',
    boxSizing: 'border-box'
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
        color: '#18181d'
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
        '& .close':{
            stroke: '#18181d'
        }
    },
}));

export const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root':{
        boxShadow: '0 3.6px 6.4px 0 rgba(0, 0, 0, 0.25)',
        border: '1px solid #dadada',
        boxSizing:'border-box',
        '& *': {
            fontFamily: 'Inter !important',
            letterSpacing: '-0.2px'
        },
        '& ul': {
            padding: '5px 2px',
            '& li':{
                width: '100%',
                fontSize: '0.875rem',
                color:'#18181d',
                boxSizing: 'border-box',
                height: 30,
                borderRadius: 3,
                cursor:'pointer',
                '&:hover':{
                    background: '#dadada'
                },
                '&.Mui-selected':{
                    background: '#dadada'
                },
            }
        }
    },
}));

export const BoxRoot = (theme) => ({
    padding: '20px 27px',
    borderBottom: '1px solid #DADADA',
    boxSizing: 'border-box',
    position: 'relative',
    background: '#fff'
});

export const BoxBackgroundRoot = (theme) => ({
    padding: '20px 27px',
    borderBottom: '1px solid #DADADA',
    boxSizing: 'border-box',
    position: 'relative',
    background: 'rgba(238, 238, 238, 0.5)',
    cursor:'pointer'
});

export const BoxStyle = styled(Box, { shouldForwardProp: (prop) => prop !== 'newBadge' })(
    ({ theme, newBadge }) => ({
        ...(newBadge && {
            ...BoxBackgroundRoot(theme),
            '&.MuiBox-root': BoxBackgroundRoot(theme),
        }),
        ...(!newBadge && {
            ...BoxRoot(theme),
            '&.MuiBox-root': BoxRoot(theme),
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


export const titleRoot = (theme) => ({
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '#18181d',
    marginBottom: 12
});

export const boldTitleRoot = (theme) => ({
    fontSize: '0.875rem',
    color: '#18181d',
    marginBottom: 12,
    fontWeight: 'bold'
});

export const TitleText = styled(Typography, { shouldForwardProp: (prop) => prop !== 'newBadge' })(
    ({ theme, newBadge }) => ({
        ...(newBadge && {
            ...boldTitleRoot(theme),
            '&.MuiTypography-root': boldTitleRoot(theme),
        }),
        ...(!newBadge && {
            ...titleRoot(theme),
            '&.MuiTypography-root': titleRoot(theme),
        }),
    }),
);

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        color: '#18181d',
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
        color: '#18181d',
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
import {styled} from "@mui/material/styles";
import {
    Box, Button, IconButton,
    ListItemButton,
    ListItemIcon,
    ListItemText, Typography
} from "@mui/material";

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
    '& .following1, .dashboard, .earn, .followers':{
        fill: '#2E8C6A',
    },
    '& .following2, .for-you, .start-stream, .setting, .heart':{
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

export const SubListItem = styled(ListItem)(({ theme }) => ({
    '& .MuiListItemText-root .MuiTypography-root':{
        marginLeft: 33
    },
}));

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

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 'bold',
        color:'#18181d',
        paddingTop: 40,
        paddingLeft: 13,
        marginBottom: 8
    }
}));

export const TagBox = styled(Box)(({ theme }) => ({
    display:'flex',
    flexWrap: 'wrap',
    alignItems:'center',
    padding: '0 15px',
    boxSizing: 'border-box'
}));

export const TagBoxIn = styled(Button)(({ theme }) => ({
    background:'#D2D2D2',
    height: 25,
    maxWidth: 190,
    padding: '0 8px',
    borderRadius: 77,
    marginRight: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 5,
    marginBottom: 5,
    boxSizing:'border-box',
    '& p':{
        width: '100%',
        fontSize: '0.875rem',
        color:'#18181d',
        fontWeight: 400,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        paddingBottom: 2,
        textTransform: 'none'
    },
    '&:hover':{
        background: '#D2D2D2'
    },
    '&:last-child':{
        marginRight:0
    }
}));


//studio menu

export const Line = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 1,
    background:'#dadada',
    // margin: '4px 0'
}));

export const AlignBox = styled(Box)(({ theme }) => ({
    // width: 168,
    display:'flex',
    alignItems:'center',
    flex: 1
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '0 !important',
        "&:hover": {
            background: "transparent",
        },
    },
}));
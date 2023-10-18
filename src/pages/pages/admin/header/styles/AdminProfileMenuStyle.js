import { styled } from "@mui/material/styles";
import {Box, ListItemIcon, ListItemText, Popover} from "@mui/material";
import {Link} from "react-router-dom";

export const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root':{
        minWidth: 230,
        marginTop: 7,
        boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.25)',
        background:'#fff',
        border: '1px solid #dadada',
        borderRadius: 8,
        padding: '16px 3px',
        '& ul':{
            padding: 0,
            '& li':{
                padding: '10px 12px',
                height: 42,
                borderRadius: 0,
                boxSizing: 'border-box',
                cursor:'pointer',
                '&:hover':{
                    borderRadius: 3,
                    background:'rgba(46, 140, 106, 0.1)',
                }
            }
        },
        '& *':{
            fontFamily:'Inter',
            letterSpacing: '-0.2px'
        }
    }
}));

export const InfoBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 12,
    paddingBottom: 14,
    paddingRight: 10,
    '& p':{
        width: 142,
        fontSize: '0.875rem',
        fontWeight: 700,
        color:'#18181d',
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
    }
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
    width: 50,
    height: 50,
    borderRadius: '50%',
    background: '#eee',
    marginRight: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #DADADA',
    boxSizing: 'border-box',
    overflow:'hidden',
    '& img':{
        width: '100%'
    },
    '& svg':{
        width: 30,
        height: 30
    }
}));

export const ListIcon = styled(ListItemIcon)(({ theme }) => ({
    '&.MuiListItemIcon-root':{
        minWidth: 5,
        marginRight: 14
    }
}));

export const ListText = styled(ListItemText)(({ theme }) => ({
    '& .MuiTypography-root':{
        color: '#18181d',
        fontSize: '0.875rem',
        fontWeight: 500
    }
}));

export const Line = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 1,
    background:'#dadada',
    margin: '4px 0'
}));

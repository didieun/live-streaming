import {styled} from "@mui/material/styles";
import {Button, IconButton, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box',
    padding: '15px 12px 24px',
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center'
}));

export const ChannelImageBox = styled('div')(({ theme }) => ({
    width: 38,
    height: 21,
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    overflow: 'hidden',
    border: '1px solid rgba(0, 0, 0, 0.10)',
    boxSizing: 'border-box',
    background:'#848589',
    '& img':{
        width: '100%'
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color:'#fff',
        fontWeight: 'bold',
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        margin: '0 7px 0px 8px',
    }
}));

export const FavoriteButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 120,
        minHeight: 20,
        borderRadius: 99,
        border: '1px solid #6f6f6f',
        background: '#3b3b3b',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        marginRight: 11,
        '& p':{
            fontSize: '0.75rem',
            color: '#fff',
            fontWeight: 400,
            textTransform: 'none',
            '& span':{
                fontWeight: 700
            }
        },
        '& svg':{
            width: 14,
            height: 14,
            marginRight: 6,
        },
        "&:hover": {
            background: "rgba(59, 59, 59, 0.8)",
        },
    },
}));

export const ButtonLineStyle = styled('div')(({ theme }) => ({
    width: 1,
    height: 10,
    background: '#848589',
    margin: '0 4px'
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const TagBox = styled(AlignCenter)(({ theme }) => ({
    marginBottom: 8,
    marginTop: 10
}));

export const TagBoxIn = styled('div')(({ theme }) => ({
    height: 21,
    padding: '0 9px',
    background: '#d2d2d2',
    borderRadius: 90,
    marginRight: 8,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& p':{
        fontSize: '0.688rem',
        color: 'rgba(24, 24, 29, 0.7)',
        fontWeight: 500
    },
    '&:last-child':{
        marginRight: 0
    },
}));
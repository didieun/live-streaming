import {styled} from "@mui/material/styles";
import {Box, Button, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'calc(100% - 102px - 36px)',
    boxSizing: 'border-box',
    padding: '16px 12px 19px',
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: '100%',
        fontSize: '0.938rem',
        color:'#fff',
        fontWeight: 700,
        marginBottom: 10,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
    width: 33,
    height: 33,
    borderRadius: "50%",
    background: "#eeeeee",
    marginRight: 7,
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
        width: 20,
        height: 20
    },
}));

export const WidthBox = styled('div')(({ theme }) => ({
    width: 'calc(100% - 33px - 7px)',
}));


export const UserName = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: '0.813rem',
        color: '#fff',
        fontWeight: 700,
        lineHeight: 1.2
    }
}));

export const UserNumberBox = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    '& svg':{
        width: 16,
        height: 16,
        marginRight: 4,
        '& path':{
            stroke: '#848589'
        }
    },
    '& p':{
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 400,
        opacity: 0.7
    }
}));

export const BoxStyle = styled('div')(({ theme }) => ({
    width: '100%',
    maxHeight: 'calc(100% - 23px - 10px - 34px - 14px)',
    borderRadius: 4,
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '11px 7px 8px',
    boxSizing: 'border-box',
    marginTop: 14,
    overflow: 'scroll'
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        display:'-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient:'vertical',
        overflow: 'hidden',
        width: '100%',
        maxHeight: 'calc(100% - 24px)',
        fontSize: '0.813rem',
        color: '#fff',
        fontWeight: 400,
        lineHeight: '128%',

    }
}));

export const ShowMoreButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background: 'transparent',
        fontSize: '0.688rem',
        color: '#848589',
        textTransform: 'none',
        marginTop: 14,
        "&:hover": {
            background: "transparent",
        },
    },
}));

import {styled} from "@mui/material/styles";
import {Button, IconButton, Typography} from "@mui/material";

export const TopBox = styled('div')(({ theme }) => ({
    height: 54,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 16px 15px',
    boxSizing: 'border-box',
    // boxShadow:'0px 2px 4px 0px rgba(120, 120, 120, 0.25)',
    background: '#2A2A2A',
    borderBottom: '1px solid #6f6f6f',
    '& p':{
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 700,
    },
    '&:after':{
        content: "''",
        width: 24,
        height: 24,
        display:'block'
    },
    '& path':{
        stroke: '#fff'
    }
}));

export const FlexColumn = styled('div')(({ theme }) => ({
    height: 'calc(100% - 54px)',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px 16px 19px',
    boxSizing: 'border-box',
    background:'#2A2A2A'
}));


export const ContentsBox = styled('div')(({ theme }) => ({
    overflowY:'auto',
    height: 'calc(100% - 43px)',
    display: 'flex',
    flexDirection:'column',
    alignItems:'center'
}));

export const ImageBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 210,
    background: '#3B3B3B',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    boxSizing: 'border-box',
    overflow: 'hidden',
    marginBottom: 7,
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    '& svg':{
        '& g':{
            opacity:1
        },
        '& path':{
            fill: '#fff',
        }
    },
    '@media all and (min-width: 768px)': {
        aspectRatio: 16 / 9,
        height: 'unset'
    },
}));

export const NoImageBox = styled(ImageBox)(({ theme }) => ({
    border: '1px dashed #6F6F6F',
}));

export const ImageText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.938rem',
        color: '#fff',
        // opacity: 0.6,
        fontWeight: 500,
        marginTop: 5,
        textAlign: 'center'
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        fontWeight: 400,
        color: '#fff',
        textAlign: 'center',
    }
}));

export const IdText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.625rem',
        color: '#fff',
        fontWeight: 700,
        margin: '42px 0 43px',
        textAlign: 'center'
    }
}));


export const TextStyle2 = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        '& span':{
            fontWeight: 700
        }
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

export const ButtonBox = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 'calc((100% /2) - 12px)',
        height: 43,
        borderRadius: 5,
        background: '#23b882',
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 700,
        boxSizing: 'border-box',
        textTransform:'none',
        "&:hover": {
            background: "#23b882",
        },
    },
}));

export const DeclineButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        border:'1px solid #969696',
        background: 'rgba(255, 255, 255, 0.1)',
        color: '#fff',
        "&:hover": {
            background: 'rgba(255, 255, 255, 0.1)',
        },
    },
}));
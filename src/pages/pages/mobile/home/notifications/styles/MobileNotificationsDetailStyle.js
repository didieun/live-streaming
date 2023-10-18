import {styled} from "@mui/material/styles";
import {Button, IconButton, Typography} from "@mui/material";

export const TopBox = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 16px 15px',
    boxSizing: 'border-box',
    boxShadow:'0px 2px 4px 0px rgba(120, 120, 120, 0.25)',
    '& p':{
        fontSize: '1.125rem',
        color: '#18181d',
        fontWeight: 700,
    },
    '&:after':{
        content: "''",
        width: 24,
        height: 24,
        display:'block'
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

export const FlexColumn = styled('div')(({ theme }) => ({
    height: 'calc(100% - 54px)',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '28px 16px 19px',
    boxSizing: 'border-box'
}));


export const ContentsBox = styled('div')(({ theme }) => ({
    overflowY:'auto',
    height: 'calc(100% - 60px)',
}));

export const NoticeBox = styled('div')(({ theme }) => ({
    width: 50,
    height: 19,
    border: '1px solid #23b882',
    borderRadius: 4,
    background: '#fff',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    '& p':{
        fontSize: '0.75rem',
        color: '#23b882',
        fontWeight: 'bold'
    }
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color:'#18181D',
        fontWeight: 500,
        marginBottom: 24,
    }
}));

export const DateText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color:'#18181D',
        fontWeight: 400,
        padding: '0 4px 7px',
        borderBottom: '1px solid #DADADA',
        marginBottom: 16
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        color:'#18181D',
        fontWeight: 400,
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: '100%',
        height: 43,
        borderRadius: 5,
        background: '#23b882',
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 700,
        "&:hover": {
            background: "#23b882",
        },
    },
}));
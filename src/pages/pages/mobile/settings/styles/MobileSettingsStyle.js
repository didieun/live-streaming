import {styled} from "@mui/material/styles";
import {Button, Snackbar, Tabs, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    background: '#F5F5F5',
    '& *, .MuiTypography-root, button':{
        fontFamily:'Inter',
        letterSpacing: '-0.2px'
    }
}));

export const Contents = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box',
    padding: '70px 26px 40px',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#6f6f6f',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
}));

export const ContentsEmpty = styled(Contents)(({ theme }) => ({
    padding: '70px 26px 20px',
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.375rem',
        color:'#18181d',
        fontWeight: 700,
        marginBottom: 10,
        '@media all and (min-width: 768px)': {
            marginBottom: 20,
        },
    }
}));

export const TabBox = styled(Tabs)(({ theme }) => ({
    '&.MuiTabs-root':{
        width: '100%',
        borderBottom: '1px solid #dadada',
        marginBottom: 24,
        minHeight: 30,
        '& .MuiButtonBase-root':{
            minWidth: 65,
            minHeight: 30,
            padding: '0 13px',
            fontSize: '0.813rem',
            color: '#848589',
            textTransform: 'none',
            '&.Mui-selected':{
                fontWeight: 'bold',
                color: '#18181d'
            },
            '@media all and (min-width: 768px)': {
                fontSize: '1rem',
            },
        },
        '& .MuiTabs-indicator':{
            height: 2,
            background: '#2e8c6a',
            borderRadius: 99
        }
    }
}));

export const ContentsIn = styled('div')(({ theme }) => ({
    minHeight: 'calc(100vh - 70px - 33px - 25px - 31px - 24px - 40px)',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    width: 'calc(100% - 26px - 26px)',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#F5F5F5',
    position: 'fixed',
    bottom: 0,
    paddingBottom: 20,
    boxSizing: 'border-box'
}));

export const PositionFixed = styled('div')(({ theme }) => ({
    width: 'calc(100% - 26px - 26px)',
    background: '#F5F5F5',
    position: 'fixed',
    bottom: 0,
    paddingBottom: 20,
    boxSizing: 'border-box'
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: '100%',
        padding: '0 10px',
        fontSize: '1rem',
        height: 40,
        background: '#18181d',
        borderRadius: 8,
        fontWeight: 800,
        color: '#fff',
        textTransform:'none',
        fontFamily: 'Inter !important',
        letterSpacing: '-0.2px',
        '&:hover':{
            background: '#18181d'
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    }
}));

export const CancelButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 'calc((100% / 2) - 5px)',
        background: '#fff',
        border: '1px solid #18181d',
        color: '#18181d',
        borderRadius: 4,
        '&:hover':{
            background: '#fff'
        },
    }
}));

export const SaveButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 'calc((100% / 2) - 5px)',
        borderRadius: 4,
    }
}));

export const DeleteButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background: '#EF222E',
        '&:hover':{
            background: '#EF222E'
        },
    }
}));
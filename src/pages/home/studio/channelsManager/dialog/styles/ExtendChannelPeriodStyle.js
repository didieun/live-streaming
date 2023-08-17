import {styled} from "@mui/material/styles";
import {Radio, Typography} from "@mui/material";

export const EditContainer = styled('div')(({ theme }) => ({
    width: 658,
    maxHeight: 'calc(100vh - 300px)',
    padding: '30px 21px',
    boxSizing: 'border-box',
    overflowY:'auto',
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

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center',
}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'flex-start'
}));

export const FlexMarginBottom = styled(Flex)(({ theme }) => ({
    marginBottom: 30
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 156,
        fontSize: '1rem',
        fontWeight: 700,
        color: 'rgba(24, 24, 29, 0.7)',
        lineHeight: 1
    }
}));

export const NotesTitle = styled(TitleText)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 97,
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        fontWeight: 700,
        color: '#18181d',
        lineHeight: 1
    }
}));

export const ToChangeBox = styled('div')(({ theme }) => ({
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    background: '#eee',
    padding: '18px 20px'
}));

export const ToChangeTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        fontWeight: 700,
        color: '#18181d',
        paddingBottom: 14,
        borderBottom: '1px solid rgba(24, 24, 29, 0.7)',
        marginBottom: 20
    }
}));

export const ToChangeText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 146,
        fontSize: '0.938rem',
        fontWeight: 500,
        color: '#18181d',
    }
}));

export const ToChangeText2 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 404,
        fontSize: '1rem',
        fontWeight: 400,
        color: '#18181d',
    }
}));

export const ToChangeButton = styled('div')(({ theme }) => ({
    width: 430,
    display:'flex',
    justifyContent: 'space-between',
    borderRadius: 10,
    background: '#fff',
    border: '1px solid #dadada',
    boxShadow:'0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    marginBottom: 10,
    cursor: 'pointer',
    padding: '9px 13px',
    boxSizing: 'border-box',
    '&:last-child':{
        marginBottom: 0,
    }
}));

export const ButtonBoldText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.063rem',
        color: '#18181d',
        fontWeight: 700
    }
}));

export const ButtonText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        fontWeight: 500,
        opacity: 0.7,
        marginTop: 4
    }
}));

export const RadioBox = styled(Radio)(({ theme }) => ({
    '&.MuiButtonBase-root':{
        padding: 0,
        marginRight: 20,
        '& svg':{
            width: 21,
            height: 21
        }
    }
}));

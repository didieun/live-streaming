import {styled} from "@mui/material/styles";
import {Button, Checkbox, Typography} from "@mui/material";

export const UnderlineTBoldText = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        maxWidth: '100%',
        minWidth: 5,
        padding: 0,
        boxSizing: 'border-box',
        background: 'transparent',
        '&:hover':{
            background: 'transparent'
        },
        '& p':{
            width: '100%',
            textTransform: 'none',
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
            fontSize: '1rem',
            color: '#2e8c6a',
            fontWeight: 700,
            textDecoration: 'underline',
            textAlign:'left'
        }
    }
}));

export const BoldText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 700,
    }
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent:'center'
}));

export const RedText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1,
        color: '#EF222E'
    }
}));

export const BlueText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1,
        color: '#2673E5'
    }
}));

export const CheckBox = styled(Checkbox)(({ theme }) => ({
    '&.MuiButtonBase-root':{
        padding: '0'
    }
}));
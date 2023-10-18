import {styled} from "@mui/material/styles";
import {FormControlLabel, IconButton, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    display:'flex',
}));

export const LeftBox = styled('div')(({ theme }) => ({
    width: '50%',
    minHeight: '100vh',
    height: '100%',
    boxSizing: 'border-box',
    padding: '37px 55px 20px 0'
}));

export const RightBox = styled(LeftBox)(({ theme }) => ({
    borderLeft: '1px solid rgba(35, 184, 130, 0.7)',
    padding: '37px 0 20px 55px'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const JustifySpace = styled(AlignCenter)(({ theme }) => ({
    justifyContent: 'space-between'
}));

export const MarginTop = styled(JustifySpace)(({ theme }) => ({
    marginTop: 63
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.938rem',
        color:'#18181d',
        fontWeight: 400,
        marginLeft: 5,
        marginRight: 5,
        '& span':{
            fontWeight: 700
        }
    }
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.563rem',
        color:'#18181d',
        fontWeight: 400,
    }
}));

export const DateText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        fontWeight: 400,
        marginLeft: 5
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

export const FormControlLabelBox = styled(FormControlLabel)(({ theme }) => ({
    '&.MuiFormControlLabel-root':{
        margin: '0 24px 0 ',
        '& .MuiButtonBase-root':{
            padding: 0
        },
        '& .MuiFormControlLabel-label':{
            marginLeft: 8,
            fontSize: '0.875rem',
            color: '#070a13',
            fontWeight: 400
        }
    }
}));

import {styled} from "@mui/material/styles";
import {FormControl, Tabs, TextareaAutosize, Typography} from "@mui/material";

export const ChangeStreamerContainer = styled('div')(({ theme }) => ({
    width: 520,
    padding: '30px 21px',
    boxSizing: 'border-box'
}));

export const TabBox = styled(Tabs)(({ theme }) => ({
    '&.MuiTabs-root':{
        width: '100%',
        marginBottom: 24,
        minHeight: 25,
        height: 43,
        '& .MuiButtonBase-root':{
            minWidth: 120,
            padding: '0 13px',
            fontSize: '0.938rem',
            color: '#848589',
            textTransform: 'none',
            '&.Mui-selected':{
                fontWeight: 700,
                color: '#18181d'
            }
        },
        '& .MuiTabs-indicator':{
            height: 3,
            background: '#2e8c6a',
            borderRadius: 99
        }
    }
}));

export const NickNameListBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 368,
    border: '1px solid #dadada',
    borderRadius:4,
    padding: '10px 12px',
    boxSizing: 'border-box',
    marginTop: 9,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#D9D9D9',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
}));

export const NickNameListBoxWidth = styled(NickNameListBox)(({ theme }) => ({
    height: 140,
}));

export const FormControlBox = styled(FormControl)(({ theme }) => ({
    '&.MuiFormControl-root':{
        '& .MuiFormControlLabel-root':{
            margin: '0 0 13px 0',
            '&:last-child':{
                marginBottom: 0
            }
        },
        '& .MuiButtonBase-root':{
            padding: 0
        },
        '& .MuiFormControlLabel-label':{
            fontSize: '0.938rem',
            color: '#18181d',
            marginLeft: 8
        }
    }
}));

export const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        opacity: 0.6,
        fontWeight: 400,
        lineHeight: 1.3,
        marginTop: 12,
    }
}));
export const SubTextColor = styled(SubText)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: '#2E8C6A',
        opacity: 1,
        marginTop: 0
    }
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#18181d',
        opacity: 0.7,
        fontWeight: 700,
        marginTop: 24
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#18181d',
        fontWeight: 400
    }
}));
import {styled} from "@mui/material/styles";
import {
    FormControl,
    FormControlLabel,
    MenuItem,
} from "@mui/material";


export const SelectFormControlBox = styled(FormControl)(({ theme }) => ({
    marginRight: 14,
    '& .MuiSelect-select':{
        minWidth: 97,
        maxWidth: 234,
        padding: '5px 30px 5px 8px !important',
        height:34,
        boxSizing:'border-box',
        fontSize: '0.875rem',
        color:'rgba(24, 24, 29, 0.7)',
        background: '#fff',
    },
    '& input':{
        fontSize: '0.813rem',
        color:'rgba(24, 24, 29, 0.7)',
    },
    '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
        border: '1px solid #DADADA',
        borderRadius: 4
    },
    '& *': {
        fontFamily: 'Inter !important',
        letterSpacing: '-0.2px'
    },
}));

export const Menu = styled(MenuItem)(({ theme }) => ({
    '&.MuiMenuItem-root':{
        width: '100%',
        fontSize: '0.813rem',
        color:'#18181d',
        boxSizing: 'border-box',
        height: 30,
        borderRadius: 3,
        '&:hover':{
            background: '#dadada'
        },
        '&.Mui-selected':{
            background: '#dadada'
        },
    }
}));

export const FormControlLabelBox = styled(FormControlLabel)(({ theme }) => ({
    '&.MuiFormControlLabel-root':{
        margin: '0 0 0 24px',
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

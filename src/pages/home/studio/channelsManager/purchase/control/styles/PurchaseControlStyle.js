import {styled} from "@mui/material/styles";
import {FormControlLabel} from "@mui/material";

export const PurchaseControlBox = styled('div')(({ theme }) => ({
    width: '100%',
    display:'flex'
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

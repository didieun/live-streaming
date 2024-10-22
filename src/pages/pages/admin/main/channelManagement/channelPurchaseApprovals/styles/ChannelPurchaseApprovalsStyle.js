import {styled} from "@mui/material/styles";
import {FormControlLabel, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({

}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    '& .MuiStack-root':{
        paddingTop: 0,
        marginLeft: 15
    }
}));

export const JustifySpace = styled(AlignCenter)(({ theme }) => ({
    justifyContent: 'space-between',
    marginTop: 27
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.938rem',
        color:'#18181d',
        fontWeight: 400,
        marginLeft: 9,
        '& span':{
            fontWeight: 700
        }
    }
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

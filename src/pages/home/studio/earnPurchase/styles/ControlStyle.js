import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

export const ControlBox = styled('div')(({ theme }) => ({
    width: '100%',
    display:'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop: 36
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

//settlement
export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color:'#18181d',
        fontWeight: 400,
        '& span':{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginLeft: 14,
            color: '#2673E5'
        }
    }
}));
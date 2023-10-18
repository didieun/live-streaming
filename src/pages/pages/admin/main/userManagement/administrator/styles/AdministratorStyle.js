import {styled} from "@mui/material/styles";
import {FormControl, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({

}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
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

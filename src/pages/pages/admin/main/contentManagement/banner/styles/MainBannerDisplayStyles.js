import {styled} from "@mui/material/styles";
import {FormControlLabel, Typography} from "@mui/material";

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

export const LiveBox = styled('div')(({ theme }) => ({
    width: 60,
    height: 23,
    borderRadius: 5,
    background:'#ef222e',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    '& p':{
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 3
    },
    '& svg':{
        width: 19,
        height: 19
    },
}));

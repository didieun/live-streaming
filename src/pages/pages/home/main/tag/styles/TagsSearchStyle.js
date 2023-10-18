import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%'
}));

export const SelectBox = styled('div')(({ theme }) => ({
    position: 'absolute',
    right: 0,
    bottom: 9,
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.875rem',
        color: '#A1A1A1',
        fontWeight: 700,
        marginBottom: 0,
        '& span':{
            color: '#000',
        }
    }
}));
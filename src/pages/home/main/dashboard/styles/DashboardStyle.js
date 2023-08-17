import {styled} from "@mui/material/styles";
import DashboardBk from "../../../../common/images/DashboardBk.png";
import {Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.875rem',
        color: '#000',
        fontWeight: 700,
        marginBottom: 0
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.938rem',
        color: '#000',
        fontWeight: 400,
        marginBottom: 19,
        '& span':{
            fontWeight: 700
        }
    }
}));

export const ContentsBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'calc(100% - 100px)',
    backgroundImage: `url(${DashboardBk})`,
    backgroundSize: '100%',
    backgroundRepeat:'no-repeat',
    position: 'relative'
}));

export const BlurBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background:'rgba(247, 247, 248, 0.90)',
    backdropFilter: 'blur(2.5px)'
}));

export const BlurText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '2rem',
        color: '#6F6F6F',
        fontWeight: 700,
    }
}));
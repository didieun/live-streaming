import {styled} from "@mui/material/styles";
import HelpCenterContactBK from "../../../common/images/HelpCenterContactBK.png";
import {Button, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: 280,
    boxSizing: 'border-box',
}));

export const ContainerImage = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundImage: `url(${HelpCenterContactBK})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',

}));

export const ContainerIn = styled('div')(({ theme }) => ({
    width: 1200,
    height: '100%',
    margin: '0 auto',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '2.25rem',
        color:'#fff',
        fontWeight: 500,
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color:'#fff',
        fontWeight: 400,
        marginBottom: 30
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 220,
        height: 54,
        background: '#23B882',
        borderRadius: 4,
        boxShadow:'0px 4px 10px 0px rgba(46, 140, 106, 0.45)',
        textTransform: 'none',
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 700,
        "&:hover": {
            background: "#23B882",
        },
    },
}));
import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({

}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'flex-start'
}));

export const FlexMarginBottom = styled(Flex)(({ theme }) => ({
    marginBottom: 30
}));

export const BoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 130,
        fontSize: '0.938rem',
        fontWeight: 500,
        color: '#18181d',
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 216,
        padding: '0 10px',
        height: 36,
        background: '#fff',
        border: '1px solid #18181d',
        color: '#18181d',
        borderRadius: 4,
        fontSize: '0.938rem',
        fontWeight: 800,
        textTransform:'none',
        '&:hover':{
            background: '#fff'
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    }
}));

export const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        opacity: 0.6,
        fontWeight: 400,
        lineHeight: 1.3,
        marginTop: 8,
        '& span':{
            color: '#EF222E',
        }
    }
}));

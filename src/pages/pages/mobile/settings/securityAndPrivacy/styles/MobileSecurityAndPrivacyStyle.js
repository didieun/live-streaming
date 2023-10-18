import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({

}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'flex-start'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center'
}));

export const FlexMargin = styled(Flex)(({ theme }) => ({
    width: '100%',
    marginBottom: 20,
    alignItems: 'center'
}));

export const BoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 110,
        fontSize: '0.875rem',
        fontWeight: 500,
        color: '#18181d',
        '@media all and (min-width: 768px)': {
            width: 130,
            fontSize: '1rem',
        },
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 130,
        padding: '0',
        height: 30,
        background: '#fff',
        border: '1px solid #18181d',
        color: '#18181d',
        borderRadius: 4,
        fontSize: '0.688rem',
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
        fontSize: '0.75rem',
        color: '#18181d',
        opacity: 0.6,
        fontWeight: 400,
        lineHeight: 1.3,
        marginTop: 10,
        '& span':{
            color: '#EF222E',
        },
        '@media all and (min-width: 768px)': {
            fontSize: '0.875rem',
        },
    }
}));
import {styled} from "@mui/material/styles";
import {Button, IconButton, Typography} from "@mui/material";
import {AlignCenter} from "../../../../../../home/studio/channelsManager/dialog/styles/EditChannelInfoStyle";

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.875rem',
        color: '#000',
        fontWeight: 700,
        marginBottom: 20
    }
}));

export const BackButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 30,
        "&:hover": {
            background: "transparent",
        },
        '& p':{
            textTransform: 'none',
            fontSize: '0.875rem',
            color: '#848589',
            fontWeight: 'bold',
            marginLeft: 4
        }
    },
}));

export const JustifyEnd = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '0 10px',
        height: 36,
        background: '#18181d',
        borderRadius: 4,
        fontSize: '0.938rem',
        fontWeight: 800,
        color: '#fff',
        textTransform:'none',
        marginBottom: 27,
        '&:hover':{
            background: '#18181d'
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    }
}));


export const Flex = styled('div')(({ theme }) => ({
    width: '100%',
    display:'flex',
}));

export const LeftBox = styled('div')(({ theme }) => ({
    width: '50%',
    minHeight: 'calc(100vh - 54px - 24px - 45px - 20px - 21px - 30px - 36px - 27px)',
    height: '100%',
    boxSizing: 'border-box',
    padding: '0 55px 20px 0'
}));

export const RightBox = styled(LeftBox)(({ theme }) => ({
    borderLeft: '1px solid rgba(35, 184, 130, 0.7)',
    padding: '0 0 20px 55px'
}));

export const TitleText2 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.563rem',
        color:'#18181d',
        fontWeight: 400,
    }
}));

export const BoxStyle = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: 70,
    maxHeight: 139,
    background: '#fff',
    borderRadius: 10,
    display:'flex',
    flexWrap:'wrap',
    alignItems: 'center',
    marginTop: 9,
    marginBottom: 90,
    padding: '25px 15px 15px 30px',
    boxSizing: 'border-box',
    overflowY:'scroll',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#6f6f6f',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
}));

export const EmptyText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color:'#18181d',
        opacity: 0.4,
        fontWeight: 400,
        marginBottom: 9,
    }
}));

export const TagBox = styled('div')(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    height: 23,
    padding: '0 8px',
    background: '#d2d2d2',
    borderRadius: 99,
    marginRight: 10,
    marginBottom: 10,
    '& p':{
        fontSize: '0.875rem',
        color: '#18181d',
        fontWeight: 500,
        opacity: 0.7,
        marginRight: 6,
        paddingBottom: 2
    },
    '&:last-child':{
        marginRight: 0
    }
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const JustifyCenter = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'center'
}));

export const ExcludeButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 180,
        height: 36,
        borderRadius: 4,
        padding: 0,
        background: '#2E8C6A',
        textTransform:'none',
        fontSize: '0.938rem',
        color: '#fff',
        fontWeight: 700,
        marginTop: 27,
        "&:hover": {
            background: "#2E8C6A",
        },
    },
}));
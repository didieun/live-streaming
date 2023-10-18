import {styled} from "@mui/material/styles";
import {IconButton, Typography} from "@mui/material";

export const Container = styled('div')(({ theme}) => ({
    width: '100%',
    aspectRatio: 16 / 9,
    background: '#C4C4C4',
    boxSizing: 'border-box',
    position: 'relative'
}));

export const PlayBox = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& svg':{
        width: 36,
        height: 36
    }
}));

export const ControlBox = styled('div')(({ theme }) => ({
    width: '100%',
    position: 'absolute',
    bottom: 14,
    left: 0,
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    padding: '0 10px'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));


export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const ButtonIconMargin = styled(ButtonIcon)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        marginRight: 18
    },
}));

export const TimeText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize:'0.75rem',
        color: '#fff',
        fontWeight: 400,
        marginLeft: 4
    }
}));
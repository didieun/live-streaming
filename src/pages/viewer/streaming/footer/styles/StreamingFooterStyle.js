import {styled} from "@mui/material/styles";
import {footerHeight, smallFooterHeight} from "../../Streaming";
import {Button, IconButton, Slider, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: footerHeight,
    background:'#2A2A2A',
    borderTop: '1px solid #6f6f6f',
    boxSizing:'border-box',
    padding: '0 24px 0 20px',
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media all and (max-width: 1800px)': {
        height: smallFooterHeight,
    },
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
            opacity: 0.8,
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
        '@media all and (max-width: 1800px)': {
            '& svg':{
                width: 30,
                height: 30
            }
        },
    },
}));

export const ScreenButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background:'transparent',
        marginLeft: 36,
        "&:hover": {
            background: "transparent",
            opacity: 0.8
        },
        '& p':{
            fontSize: '1.25rem',
            color: '#848589',
            fontWeight: 400,
            marginLeft: 8,
            textTransform: "none",
        },
        '@media all and (max-width: 1800px)': {
            marginLeft: 20,
            '& p':{
                fontSize: '0.875rem'
            },
            '& svg':{
                width: 30,
                height: 30
            }
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const MarginLeft = styled(AlignCenter)(({ theme }) => ({
    marginLeft: 36,
    '@media all and (max-width: 1800px)': {
        marginLeft: 20,
    },
}));

export const SliderBox = styled(Slider)(({ theme }) => ({
    '&.MuiSlider-root':{
        marginLeft: 8,
        width: 189,
        height: 10,
        padding: '10px 0',
        '& .MuiSlider-track':{
            border: 0
        },
        '& .MuiSlider-rail':{
            color: 'rgba(255, 255, 255, 0.3)'
        },
        '& .MuiSlider-thumb':{
            background:'transparent',
            transition: 'none',
            '&::after':{
                width: 20,
                height: 20,
            },
            '&:before':{
                boxShadow: 'none',
            },
            '&:hover':{
                boxShadow: 'none'
            },
            '&.Mui-focusVisible':{
                boxShadow: 'none'
            }
        },
        '@media all and (max-width: 1800px)': {
            width: 130,
        },
        '@media all and (max-width: 1400px)': {
            width: 100,
        },
    },


}));

export const MicSliderBox = styled(SliderBox)(({ theme }) => ({
    '&.MuiSlider-root':{
        color: '#23b882',
    },
}));

export const SoundSliderBox = styled(SliderBox)(({ theme }) => ({
    '&.MuiSlider-root':{
        color: '#F1D22F',
    },
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color:'#fff',
        fontWeight: 400,
        marginRight: 22,
        '@media all and (max-width: 1800px)': {
            fontSize: '0.875rem',
            marginRight: 10,
        },
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 264,
        height: 50,
        padding: 0,
        borderRadius: 5,
        background:'#2e8c6a',
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: "none",
        "&:hover": {
            background: "rgba(35, 184, 130, 0.8)",
        },
        '@media all and (max-width: 1800px)': {
            width: 150,
            height: 45,
            fontSize: '1rem'
        },
        '@media all and (max-width: 1400px)': {
            width: 110,
            height: 40,
            fontSize: '0.875rem'
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));




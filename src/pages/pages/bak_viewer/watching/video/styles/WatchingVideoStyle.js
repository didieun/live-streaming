import {styled} from "@mui/material/styles";
import {IconButton, Slider, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    padding: '12px 12px 0',
    boxSizing: 'border-box',
    background: '#0d0d0d',
}));

export const VideoBox = styled('div')(({ theme }) => ({
    width: '100%',
    aspectRatio: 16 / 9,
    background: '#848589',
    position: 'relative'
}));

export const VideoBoxIn = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
}));

export const SubVideoBox = styled('div')(({ theme }) => ({
    width: 215,
    aspectRatio: 16 / 9,
    position: 'absolute',
    background:'#3f4147',
    left: 24,
    bottom: 55
}));

export const VideoControlBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 55,
    position: 'absolute',
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 7%, rgba(0, 0, 0, 0.7) 100%)',
    display:'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    padding: '23px 11px 14px'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '0 !important',
        "&:hover": {
            background: "transparent",
            opacity: 0.8
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const TimeText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#fff',
        marginLeft: 14
    }
}));

export const MarginLeft = styled(AlignCenter)(({ theme }) => ({
    marginLeft: 14,
    '& svg':{
        width: 30,
        height: 30,
        '& path':{
            stroke: '#fff'
        }
    }
}));

export const SliderBox = styled(Slider)(({ theme }) => ({
    '&.MuiSlider-root':{
        marginLeft: 8,
        width: 140,
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
    },
}));

export const SoundSliderBox = styled(SliderBox)(({ theme }) => ({
    '&.MuiSlider-root':{
        color: '#fff',
    },
}));
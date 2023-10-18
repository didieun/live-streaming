import {styled} from "@mui/material/styles";
import {Box, Button, IconButton, Slider, Typography} from "@mui/material";
import {smallAsideWidth, watchingAsideWidth} from "../../Watching";

export const fullScreenBox = (theme) => ({
    width: '100%',
    padding: '0',
    boxSizing: 'border-box',
    background: '#0d0d0d',
});

export const exitFullScreenBox = (theme) => ({
    width: '100%',
    padding: '12px 12px 0',
    boxSizing: 'border-box',
    background: '#0d0d0d',
});

export const Container = styled('div', { shouldForwardProp: (prop) => prop !== 'fullScreen' })(
    ({ theme, fullScreen }) => ({
        ...(fullScreen && {
            ...fullScreenBox(theme),
        }),
        ...(!fullScreen && {
            ...exitFullScreenBox(theme),
        }),
    }),
);

export const OfflineContainer = styled('div')(({ theme }) => ({
    width: '100%',
    aspectRatio: 16 / 9,
    padding: '0',
    boxSizing: 'border-box',
    background: '#404247',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const Offline = styled('div')(({ theme }) => ({
    width: 150,
    height: 54,
    borderRadius: 12,
    background: '#969696',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    marginBottom: 30,
    '& p':{
        fontSize: '1.75rem',
        color: '#fff',
        fontWeight: 'bold'
    }
}));

export const OfflineText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: 700,
        marginBottom: 24
    }
}));

export const OfflineButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background: 'transparent',
        "&:hover": {
            background: "transparent",
        },
        '& p':{
            fontSize: '1.25rem',
            fontWeight: 500,
            color: '#23B882',
            marginLeft: 6,
            textTransform: 'none'
        }
    },
}));

export const VideoBox = styled('div')(({ theme }) => ({
    width: '100%',
    aspectRatio: 16 / 9,
    background: '#848589',
    position: 'relative'
}));

export const VideoBoxTop = styled('div')(({ theme }) => ({
    position: 'absolute',
    top:0,
    left: 0,
    width: '100%',
    height: 90,
    background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)'
}));

export const ChatCloseBox = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 5,
    right: 6,
    width: 28,
    height: 28,
    borderRadius: 8,
    background: 'rgba(24, 24, 29, 0.4)',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 400,
        marginLeft: 14,
        marginRight: 14
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

export const FullScreenInfoBox = styled('div')(({ theme }) => ({
    width: 'calc(100% - 230px)',
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: 13,
    paddingLeft: 19,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center'
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
    width: 66,
    height: 66,
    borderRadius: "50%",
    background: "#eeeeee",
    marginRight: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #848589",
    boxSizing: "border-box",
    overflow:'hidden',
    '& img':{
        width: '100%'
    },
    '& svg':{
        width: 35,
        height: 35
    },
    '@media all and (max-width: 1500px)': {
        width: 50,
        height: 50,
        '& svg':{
            width: 28,
            height: 28
        },
    },
}));

export const TextBox = styled('div')(({ theme }) => ({
    width: 'calc(100% - 66px - 14px)',
    '@media all and (max-width: 1500px)': {
        width: 'calc(100% - 50px - 14px)',
    },
}));

export const AlignStart = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'flex-start',
    width: '100%',
    marginBottom: 3,
}));

export const UserName = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.375rem',
        color: '#fff',
        fontWeight: 700,
        marginRight: 14,
        lineHeight: 1,
        '@media all and (max-width: 1500px)': {
            fontSize: '1.25rem',
        },
    }
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 700,
        maxWidth: 'calc(100% - 100px)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        '@media all and (max-width: 1500px)': {
            fontSize: '1rem',
        },
    }
}));

export const LiveBox = styled('div')(({ theme }) => ({
    width: 62,
    height: 24,
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
    '@media all and (max-width: 1500px)': {
        width: 50,
        height: 20,
        borderRadius: 3,
        '& p':{
            fontSize: '0.625rem',
        },
        '& svg':{
            width: 15,
            height: 15
        },
    },
}));


export const IconColorSize = styled('div')(({ theme }) => ({
    width: 20,
    height: 20,
    marginRight: 6,
    '& svg':{
        width: 20,
        height: 20,
        '& path':{
            stroke: '#fff'
        }
    },
}));

export const ViewersText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color:'#fff',
        fontWeight: 400,
        '& span':{
            color: '#23b882',
            fontWeight: 700
        },
        '@media all and (max-width: 1500px)': {
            fontSize: '1rem',
        },
    }
}));

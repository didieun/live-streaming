import {styled} from "@mui/material/styles";
import {Box, Button, IconButton, Popover, Slider, Typography} from "@mui/material";

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
    },
}));

export const hiddenEyeBtn = (theme) => ({
    opacity: 0.3,
    "&:hover": {
        opacity: 0.3,
    },
});

export const EyeButtonIcon = styled(ButtonIcon, { shouldForwardProp: (prop) => prop !== 'show' })(
    ({ theme, show }) => ({
        ...(!show && {
            ...hiddenEyeBtn(theme),
            '&.MuiButtonBase-root': hiddenEyeBtn(theme),
        }),
    }),
);

export const showText = (theme) => ({
    fontSize: '0.875rem',
    color:'#fff',
    fontWeight: 400,
});

export const hiddenText = (theme) => ({
    fontSize: '0.875rem',
    color:'#fff',
    fontWeight: 400,
    opacity: 0.3
});

export const TextStyle = styled(Typography, { shouldForwardProp: (prop) => prop !== 'show' })(
    ({ theme, show }) => ({
        ...(show && {
            ...showText(theme),
            '&.MuiTypography-root': showText(theme),
        }),
        ...(!show && {
            ...hiddenText(theme),
            '&.MuiTypography-root': hiddenText(theme),
        }),
    }),
);

export const JustifySpace = styled('div')(({ theme, select }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4
}));

export const ButtonIconMarginLeft = styled(ButtonIcon)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        marginLeft: 8
    },
}));

export const SliderBox = styled(Slider)(({ theme }) => ({
    '&.MuiSlider-root':{
        marginLeft: 7,
        width: 168,
        height: 6,
        padding: '10px 0',
        color: '#23b882',
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


export const basicBox = (theme) => ({
    width: 197,
    marginRight: 27,
    '&:last-child':{
        marginRight: 0
    },
});

export const beforeBox = (theme) => ({
    width: 197,
    marginRight: 27,
    '&:last-child':{
        marginRight: 0
    },
    '&:before':{
        content: "''",
        display:'block',
        width: '100%',
        height: 26,
        marginBottom: 4
    }
});

export const ScenesBoxIn = styled(Box, { shouldForwardProp: (prop) => prop !== 'basic' })(
    ({ theme, basic }) => ({
        ...(basic && {
            ...basicBox(theme),
            '&.MuiBox-root': basicBox(theme),
        }),
        ...(!basic && {
            ...beforeBox(theme),
            '&.MuiBox-root': beforeBox(theme),
        }),
    }),
);

export const selectScenesVideo = (theme) => ({
    width: 197,
    aspectRatio: 16 / 9,
    boxSizing: 'border-box',
    background: '#dadada',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid #23B882',
    cursor: 'pointer',
    marginBottom: 3,
    position: 'relative',
    top: 0,
    left: 0,
    padding: 0,
    borderRadius: 0,
    color: 'transparent',
    '&:hover':{
        background: '#dadada',
    },
    '&.Mui-disabled':{
        border: '0',
        opacity: 0.3,
        '& svg':{
            opacity: 0.6
        }
    },
});

export const basicScenesVideo = (theme) => ({
    width: 197,
    aspectRatio: 16 / 9,
    boxSizing: 'border-box',
    background: '#dadada',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '0',
    cursor: 'pointer',
    marginBottom: 3,
    position: 'relative',
    top: 0,
    left: 0,
    padding: 0,
    borderRadius: 0,
    color: 'transparent',
    '&:hover':{
        background: '#dadada',
    },
    '&.Mui-disabled':{
        opacity: 0.3,
        '& svg':{
            opacity: 0.6
        }
    },
});

export const ScenesVideo = styled(Button, { shouldForwardProp: (prop) => prop !== 'select' })(
    ({ theme, select }) => ({
        ...(select && {
            ...selectScenesVideo(theme),
            '&.MuiButtonBase-root': selectScenesVideo(theme),
        }),
        ...(!select && {
            ...basicScenesVideo(theme),
            '&.MuiButtonBase-root': basicScenesVideo(theme),
        }),
    }),
);


export const ScreenButton = styled('div')(({ theme, select }) => ({
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 4,
    right: 4,
}));

export const ScenesControlBox = styled('div')(({ theme, select }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root':{
        background: '#212121',
        boxShadow: 'none',
        border: '1px solid #6f6f6f',
        boxSizing:'border-box',
        '& *': {
            fontFamily: 'Inter !important',
            letterSpacing: '-0.2px'
        },
        '& ul': {
            padding: '5px 0',
            '& li':{
                width: '100%',
                fontSize: '0.875rem',
                color:'#fff',
                boxSizing: 'border-box',
                height: 22,
                borderRadius: 0,
                cursor:'pointer',
                '&:hover':{
                    background: 'rgba(35, 184, 130, 0.3)'
                },
                '&.Mui-selected':{
                    background: 'rgba(35, 184, 130, 0.3)'
                },
            }
        }
    },
}));
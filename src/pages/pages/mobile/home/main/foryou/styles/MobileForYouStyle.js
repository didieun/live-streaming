import {styled} from "@mui/material/styles";
import {Box, Button, Typography} from "@mui/material";
import Slider from "react-slick";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%'
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        padding: '0 26px',
        boxSizing: 'border-box',
        fontSize: '1.5rem',
        color:'#18181D',
        fontWeight: 'bold',
        marginTop: 60,
        '@media all and (max-width: 480px)': {
            fontSize: '1.375rem',
            marginTop: 40,
        },
    }
}));

export const TagListBox = styled(Slider)(({ theme }) => ({
    marginTop: 10,
    marginBottom: 14,
    paddingLeft: 26,
    boxSizing: 'border-box',
    '& .slick-track':{
        display:'inline-flex',
        alignItems:'center',
    },
    '& .slick-slide':{
        marginRight: 7,
        '&:last-child':{
            marginRight: 0
        }
    },
    '@media all and (max-width: 480px)': {
        marginTop: 13,
        marginBottom: 22,
    },
}));

export const tagOff = (theme) => ({
    background:'#D2D2D2',
    minWidth: 39,
    minHeight: 24,
    padding: '0 7px',
    borderRadius: 76,
    cursor:'pointer',
    boxSizing:'border-box',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    '& p':{
        fontSize: '0.75rem',
        color:'rgba(24, 24, 29, 0.7)',
        fontWeight: 'normal',
        textTransform: "none",
    },
    '&:hover':{
        background:'#D2D2D2'
    },
    '@media all and (max-width: 480px)': {
        marginRight: 4,
    },
});

export const tagOn = (theme) => ({
    background:'#2E8C6A',
    minWidth: 39,
    minHeight: 24,
    padding: '0 7px',
    borderRadius: 76,

    cursor:'pointer',
    boxSizing:'border-box',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    '& p':{
        fontSize: '0.75rem',
        color:'#fff',
        fontWeight: 'bold',
        textTransform: "none",
    },
    '&:hover':{
        background:'#2e8c6a'
    },
    '@media all and (max-width: 480px)': {
        marginRight: 4,
    },
});

export const TagBox = styled(Button, { shouldForwardProp: (prop) => prop !== 'select' })(
    ({ theme, select }) => ({
        ...(select && {
            ...tagOn(theme),
            '&.MuiBox-root': tagOn(theme),
        }),
        ...(!select && {
            ...tagOff(theme),
            '&.MuiBox-root': tagOff(theme),
        }),
    }),
);
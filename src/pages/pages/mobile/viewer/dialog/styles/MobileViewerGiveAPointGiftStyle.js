import {styled} from "@mui/material/styles";
import Slider from "react-slick";
import {Button, IconButton, Input, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    padding: '10px 0 10px 16px',
    maxWidth: 450,
    boxSizing: 'border-box'
}));

export const PointsList = styled(Slider)(({ theme }) => ({
    boxSizing: 'border-box',
    marginBottom: 10,
    '& .slick-track':{
        display:'inline-flex',
        alignItems:'center',
    },
    '& .slick-list':{
        padding: '0 !important',
        '& > div':{

        }
    },
    '& .slick-slide':{
        marginRight: 8,
        '&:last-child':{
            marginRight: 0
        }
    },
    '& *, .MuiTypography-root, button':{
        fontFamily:'Inter',
        letterSpacing: '-0.2px'
    }
}));

export const PointsBoxIn = styled('div')(({ theme, select }) => ({
    display:'inline-flex !important',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 1.7291090488433838px 3.4582180976867676px 0px rgba(0, 0, 0, 0.25)',
    boxSizing: 'border-box',
    borderRadius: 8,
    border: select ? '3px solid #23B882' : '1px solid #6F6F6F',
    background: '#2A2A2A',
    padding: '4px 10px 13px',
    cursor:'pointer',
    marginBottom: 5,
    '&:nth-of-type(3)':{
        marginRight: 0
    },
    '& img':{
        width: 72,
        height: 72
    }
}));

export const PointsBoxTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 700,
    }
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const CountBoxIn = styled('div')(({ theme }) => ({
    width: 90,
    background: '#3C3C3C',
    height: 26,
    borderRadius: 85,
    boxSizing: 'border-box',
    padding: '3px 6px',
    display:'inline-flex',
    alignItems: 'center',
    justifyContent:'space-between',
    border: '1px solid #6f6f6f',
    marginTop: 6,
    '& .Mui-disabled':{
        '& path':{
            opacity: 0.3,
        }
    },
    '& path':{
        stroke: '#fff'
    }
}));

export const InputBox = styled(Input)(({ theme }) => ({
    '&.MuiInputBase-root':{
        width: 35,
        margin: '0 2px',
        fontSize: '1rem',
        fontWeight: 400,
        color: '#fff',
        '& input':{
            textAlign: 'center'
        },
        '&:after, &:before':{
            borderBottom: 0
        }
    },
    '&.MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error):before':{
        borderBottom: 0
    },
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        color: '#fff',
        fontWeight: 400,
        opacity: 0.6
    }
}));

export const PointsText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: 700,
        '& span':{
            color:'#F1D22F'
        }
    }
}));

export const ButtonBox = styled('div')(({ theme }) => ({
    width: 'calc(100% - 16px)',
    paddingTop: 8,
    paddingRight: 16,
    boxSizing: 'border-box',
    display:'flex',
    justifyContent: 'center'
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '0',
        width: '100%',
        maxWidth: 300,
        height: 36,
        fontSize: "1rem",
        fontWeight: 400,
        textTransform: "none",
        boxSizing: 'border-box',
        borderRadius: 99,
        lineHeight: 0,
        background:'#23B882',
        color:'#fff',

        "&:hover": {
            background: "#23B882",
        },
        '& span':{
            fontWeight: 700,
            marginLeft: 5,
            marginRight: 5
        }
    },
}));
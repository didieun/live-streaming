import {styled} from "@mui/material/styles";
import {Box, Typography} from "@mui/material";
import Slider from "react-slick";

export const Container = styled("div")(({ theme }) => ({
    padding: '0 7px 0 17px',
    boxSizing: 'border-box'
}));

export const SliderBox = styled(Slider)(({ theme }) => ({
    '& .slick-arrow':{
        zIndex: 100,
        top: '38%',
        filter: 'drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.25))',
        width: 40,
        height: 40,
        borderRadius: '50%',
        background:'#fff',
        display:'flex !important',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover':{
            background: '#fff'
        },
        '&:before':{
            content:"''"
        },
        '&.slick-disabled':{
            '& path':{
                stroke: 'rgba(24, 24, 29, 0.4)'
            }
        }
    },
    '& .slick-prev':{
        left: -20,
    },
    '& .slick-next':{
        right: -10,
    },
}));

export const SliderBoxIn = styled("div")(({ theme }) => ({
    paddingRight: 10,
    overflow:'hidden',
}));

export const VideoBox = styled("div")(({ theme }) => ({
    width: '100%',
    aspectRatio: 16 / 9,
    background: '#C4C4C4',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    overflow:'hidden',
    position:'relative',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    cursor: 'pointer',
    '& img':{
        width: '100%'
    }
}));

export const LiveBox = styled("div")(({ theme }) => ({
    position:'absolute',
    top: 10,
    left: 12,
    display:'inline-flex',
    alignItems:'center',
    justifyContent: 'center',
    background:'#ef222e',
    padding: '0 7px ',
    borderRadius: 7,
    boxSizing:'border-box',
    '& p':{
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 700,
        marginLeft: 4
    }
}));

export const ViewersBox = styled(LiveBox)(({ theme }) => ({
    background:'rgba(24, 24, 29, 0.9)',
    top: 'unset',
    bottom: 12,
    border: '1px solid #DADADA'
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: '100%',
        fontSize: '1.188rem',
        fontWeight: 'bold',
        color:'#18181d',
        marginBottom: 7,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        lineHeight: 1
    }
}));

export const TextStyle = styled(TitleText)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.063rem',
        fontWeight: 'normal',
        color:'rgba(24, 24, 29, 0.7)',
        marginBottom: 0,
    }
}));

export const InfoBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display:'flex',
    alignItems: 'center',
    marginTop: 13
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
    width: 54,
    height: 54,
    borderRadius: '50%',
    background: '#eee',
    marginRight: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #DADADA',
    boxSizing: 'border-box',
    overflow:'hidden',
    '& img':{
        width: '100%'
    },
    '& svg':{
        width: 30,
        height: 30
    }
}));

export const InfoText = styled(Box)(({ theme }) => ({
    width: 'calc(100% - 54px - 20px) '
}));

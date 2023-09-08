import {styled} from "@mui/material/styles";
import {Box, Typography} from "@mui/material";
import Slider from "react-slick";

export const Container = styled("div")(({ theme }) => ({
    padding: '0',
    boxSizing: 'border-box'
}));

export const SliderBox = styled(Slider)(({ theme }) => ({
    '& .slick-arrow':{
        display:'none !important',
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
    top: 12,
    left: 12,
    display:'inline-flex',
    alignItems:'center',
    justifyContent: 'center',
    background:'#ef222e',
    padding: '0 6px ',
    borderRadius: 6,
    boxSizing:'border-box',
    '& p':{
        fontSize: '0.938rem',
        color: '#fff',
        fontWeight: 700,
        marginLeft: 5
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
        fontSize: '1rem',
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
        fontSize: '0.875rem',
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
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: '#eee',
    marginRight: 14,
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
    width: 'calc(100% - 40px - 14px) '
}));

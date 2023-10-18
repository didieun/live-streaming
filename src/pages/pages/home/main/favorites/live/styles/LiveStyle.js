import {styled} from "@mui/material/styles";
import {Box, Button, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    marginBottom: 39
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'
}));

export const AvatarCenter  = styled(AlignCenter)(({ theme }) => ({
    width: '100%',
    marginBottom: 21
}));

export const ChannelBox = styled('div')(({ theme }) => ({
    width: 267,
    height: 293,
    background:'#fff',
    marginRight: 28
}));

export const VideoBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 175,
    // aspectRatio: 16 / 9,
    background: '#C4C4C4',
    border: '1px solid #dadada',
    boxSizing: 'border-box',
    borderRadius: 0,
    overflow:'hidden',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'

    }
}));

export const ViewersBox = styled(AlignCenter)(({ theme }) => ({
    marginTop: 18,
    marginBottom: 21,
    '& svg':{
        width: 18,
        height: 18,
        '& path':{
            stroke: 'rgba(24, 24, 29, 0.7)'
        }
    }
}));

export const InfoBox = styled('div')(({ theme }) => ({
    width: '100%',
    padding: '15px 16px',
    boxSizing: 'border-box'
}));

export const InfoBox2 = styled('div')(({ theme }) => ({
    width: 'calc(100% - 267px - 28px)',
}));

export const TagBox = styled(Button)(({ theme }) => ({
    background:'#d2d2d2',
    height: 24,
    padding: '0 8px',
    borderRadius: 77,
    marginRight: 6,
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    '& p':{
        fontSize: '0.75rem',
        color:'rgba(24, 24, 29, 0.7)',
        fontWeight: 500,
        textTransform: "none",
    },
    '&:last-child':{
        marginRight:0
    },
    '&:hover':{
        background:'#d2d2d2'
    }
}));

export const ChannelText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: '100%',
        fontSize: '1.125rem',
        fontWeight: 600,
        color:'#18181d',
        marginBottom: 26,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
    }
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: '100%',
        fontSize: '1.25rem',
        fontWeight: 400,
        color:'#18181d',
    }
}));

export const DotStyle = styled('div')(({ theme }) => ({
    width: 4,
    height: 4,
    background: '#18181D',
    opacity: 0.7,
    borderRadius: '50%',
    marginLeft: 7,
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 'normal',
        color:'rgba(24, 24, 29, 0.7)',
        marginLeft: 7,
        marginBottom: 0,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        '& span':{
            fontWeight: 500
        }
    }
}));

export const TextStyle2 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 'calc(100% - 34px - 13px)',
        fontSize: '1rem',
        fontWeight: 400,
        color:'#18181d',
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
    }
}));

export const TextStyle3 = styled(TextStyle2)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: '100%',
        fontSize: '0.875rem',
        opacity: 0.7,
        marginBottom: 21
    }
}));

export const LiveBox = styled("div")(({ theme }) => ({
    height: 23,
    display:'inline-flex',
    alignItems:'center',
    justifyContent: 'center',
    background:'#ef222e',
    padding: '0 6px 0 5px ',
    borderRadius: 5,
    boxSizing:'border-box',
    '& p':{
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 700,
        marginLeft: 3
    },
    '& svg':{
        width: 18,
        height: 18
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: '100%',
        height: 35,
        background:'#969696',
        padding: 0,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "&:hover": {
            background: "#969696",
        },
        '& p':{
            fontSize: '0.938rem',
            color: '#fff',
            fontWeight: 'bold',
            marginLeft: 8,
            textTransform: "none",
        }
    },
}));

export const ButtonOnStyle = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background:'#3A974C',
        "&:hover": {
            background: "#3A974C",
        },
        '& p':{
            color: '#fff',
        }
    },
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
    width: 34,
    height: 34,
    borderRadius: '50%',
    background: '#eee',
    marginRight: 13,
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
        width: 20,
        height: 20
    }
}));

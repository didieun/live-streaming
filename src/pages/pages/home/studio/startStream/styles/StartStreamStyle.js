import {styled} from "@mui/material/styles";
import {Box, Button, IconButton, Popover, Typography} from "@mui/material";

export const StartStreamContainer = styled('div')(({ theme }) => ({
    boxSizing: 'border-box',
    display:'grid',
    gap: 18,
    gridTemplateColumns: 'repeat(7, 1fr)',
    '@media all and (max-width: 2200px)': {
        gridTemplateColumns: 'repeat(6, 1fr)',
    },
    '@media all and (max-width: 1800px)': {
        gridTemplateColumns: 'repeat(5, 1fr)',
    },
    '@media all and (max-width: 1470px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
    },
    '@media all and (max-width: 1240px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },
}));

export const ChannelBox = styled(Box)(({ theme }) => ({
    background:'#fff',
}));

export const VideoBox = styled(Box)(({ theme }) => ({
    width: '100%',
    aspectRatio: 16 / 9,
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
    position: 'relative',
    cursor:'pointer',
    '& img':{
        width: '100%'
    }
}));

export const LiveBox = styled("div")(({ theme }) => ({
    position:'absolute',
    height: 23,
    top: 10,
    left: 12,
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

export const InfoBox = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '15px 16px',
    boxSizing: 'border-box'
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: '100%',
        fontSize: '1.125rem',
        fontWeight: 600,
        color:'#18181d',
        marginBottom: 15,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
    }
}));

export const TextStyle = styled(TitleText)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 'calc(100% - 18px - 7px)',
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

export const AlignCenter = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'
}));

export const ViewersBox = styled(AlignCenter)(({ theme }) => ({
    '& svg':{
        width: 18,
        height: 18,
        '& path':{
            stroke: 'rgba(24, 24, 29, 0.7)'
        }
    }
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

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: '100%',
        height: 35,
        background:'#23B882',
        padding: 0,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "&:hover": {
            background: "#23B882",
        },
        '& p':{
            fontSize: '0.938rem',
            color: '#fff',
            fontWeight: 'bold',
            marginLeft: 8,
            textTransform: "none",
        },
        '&.Mui-disabled':{
            background: "#969696",
            opacity: 1
        },
    },
}));

export const RedButtonStyle = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background:'#EF222E',
        "&:hover": {
            background: "#EF222E",
        },
    },
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 20,
    '& path':{
        stroke: '#18181d',
        opacity: 0.7
    }
}));

export const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root':{
        boxShadow: '0 3.6px 6.4px 0 rgba(0, 0, 0, 0.25)',
        border: '1px solid #dadada',
        boxSizing:'border-box',
        '& *': {
            fontFamily: 'Inter !important',
            letterSpacing: '-0.2px'
        },
        '& ul': {
            padding: '5px 2px',
            '& li':{
                width: '100%',
                fontSize: '0.875rem',
                color:'#18181d',
                boxSizing: 'border-box',
                height: 30,
                borderRadius: 3,
                cursor:'pointer',
                '&:hover':{
                    background: '#dadada'
                },
                '&.Mui-selected':{
                    background: '#dadada'
                },
            }
        }
    },
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));
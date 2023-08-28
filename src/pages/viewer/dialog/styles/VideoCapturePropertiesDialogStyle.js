import {styled} from "@mui/material/styles";
import {Button, Checkbox, FormControl, IconButton, LinearProgress, MenuItem, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    padding: '40px 21px 20px',
    boxSizing: 'border-box'
}));

export const ImageBox = styled('div')(({ theme }) => ({
    width: 630,
    aspectRatio: 16 / 9,
    background: '#3B3B3B',
    display:'flex',
    boxShadow:'0px 1.6414103507995605px 1.6414103507995605px 0px rgba(0, 0, 0, 0.25)',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    boxSizing: 'border-box',
    overflow: 'hidden',
    border: '1px solid #6F6F6F',
    marginBottom: 16,
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    '& path':{
        fill: '#fff'
    }
}));

export const NoImageBox = styled(ImageBox)(({ theme }) => ({
    border: '1px dashed #6F6F6F',
}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    paddingTop: 14
}));

export const FlexColumn = styled('div')(({ theme }) => ({
    display:'flex',
    flexDirection: 'column',
}));


export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 133,
        fontSize: '1rem',
        fontWeight: 700,
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: 1,
        marginTop: 8
    }
}));

export const SceneIconUser = styled('div')(({ theme }) => ({
    width: 100,
    height: 100,
    background: '#fff',
    border: '1px solid #dadada',
    borderRadius: '50%',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg':{
        width: 60,
        height: 60
    }
}));

export const FormControlBox = styled(FormControl)(({ theme }) => ({
    marginBottom: 16,
    '& .MuiInputBase-input':{
        width: 497,
        height:'34px !important',
        padding: '4px 30px 5px 8px !important',
        boxSizing:'border-box',
        display:'flex',
        alignItems: 'center',
        background: '#3C3C3C',
        '& p':{
            fontSize: '0.875rem',
            color:'rgba(255, 255, 255, 0.7)',
            fontWeight: 400,
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
        },
    },
    '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
        border: '1px solid #6F6F6F',
        borderRadius: 4
    },
    '& svg':{
        '& path':{
            stroke: '#848589'
        }
    }
}));

export const Menu = styled(MenuItem)(({ theme }) => ({
    '&.MuiMenuItem-root':{
        boxSizing: 'border-box',
        height: 22,
        paddingLeft: 8,
        '& p':{
            fontSize: '0.875rem',
            color:'#fff',
            fontWeight: 400,
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
        },
        '&:hover':{
            background: 'rgba(35, 184, 130, 0.3)'
        },
        '&.Mui-selected':{
            background: 'rgba(35, 184, 130, 0.3)'
        },
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 400,
        marginBottom: 8
    }
}));

export const ProgressBox = styled(LinearProgress)(({ theme }) => ({
    '&.MuiLinearProgress-root':{
        background:'rgba(255, 255, 255, 0.3)',
        height: 8,
        borderRadius: 10,
        '& .MuiLinearProgress-bar':{
            background:'#23B882',
            borderRadius: '0 10px 10px 0',
        }
    }
}));
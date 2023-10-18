import {styled} from "@mui/material/styles";
import {Button, FormControl, IconButton, Typography} from "@mui/material";
import {AlignCenter} from "../../../../../viewer/dialog/styles/ChannelInfoStyle";

export const TopBox = styled('div')(({ theme }) => ({
    height: 54,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 16px 15px',
    boxSizing: 'border-box',
    background: '#2A2A2A',
    borderBottom: '1px solid #6f6f6f',
    '& p':{
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 700,
    },
    '&:after':{
        content: "''",
        width: 24,
        height: 24,
        display:'block'
    },
    '& path':{
        stroke:'#fff'
    }
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const FlexColumn = styled('div')(({ theme }) => ({
    height: 'calc(100% - 54px)',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '28px 16px 19px',
    boxSizing: 'border-box',
    background:'#2A2A2A'
}));


export const ContentsBox = styled('div')(({ theme }) => ({
    overflowY:'auto',
    height: 'calc(100% - 60px)',
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: '100%',
        height: 43,
        borderRadius: 5,
        background: '#23b882',
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 700,
        "&:hover": {
            background: "#23b882",
        },
    },
}));

export const MarginBottom = styled('div')(({ theme }) => ({
    marginBottom: 24
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.938rem',
        fontWeight: 700,
        color:'#fff',
        opacity: 0.7,
        marginBottom: 5
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 400,
        color:'#fff',
    }
}));

export const TagsBox = styled(AlignCenter)(({ theme }) => ({
    display:'flex',
    alignItems:'center'
}));

export const TagBox = styled('div')(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    height: 23,
    padding: '0 8px',
    background: '#d2d2d2',
    borderRadius: 99,
    marginRight: 10,
    '& p':{
        fontSize: '0.875rem',
        color: '#18181d',
        fontWeight: 500,
        opacity: 0.7,
        marginRight: 0,
        paddingBottom: 2
    },
    '&:last-child':{
        marginRight: 0
    }
}));

export const FormControlBox = styled(FormControl)(({ theme }) => ({
    '&.MuiFormControl-root':{
        '& .MuiFormControlLabel-root':{
            margin: 0
        },
        '& .MuiButtonBase-root':{
            padding: 0
        },
        '& .MuiFormControlLabel-label':{
            fontSize: '0.875rem',
            color: '#fff',
            marginRight: 40,
            marginLeft: 8
        }
    }
}));

export const ImageBox = styled('span')(({ theme }) => ({
    width: 267,
    aspectRatio: 16 / 9,
    background: '#3B3B3B',
    display:'flex',
    boxShadow:'0px 1.6414103507995605px 1.6414103507995605px 0px rgba(0, 0, 0, 0.25)',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    boxSizing: 'border-box',
    overflow: 'hidden',
    cursor:'pointer',
    border: '1px solid #6F6F6F',
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    '& path':{
        stroke: '#fff'
    }
}));

export const NoImageBox = styled(ImageBox)(({ theme }) => ({
    border: '1px dashed #6F6F6F',
}));

export const ImageText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#fff',
        opacity: 0.6,
        fontWeight: 500,
        marginTop: 8,
        textAlign: 'center'
    }
}));

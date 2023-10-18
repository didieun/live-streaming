import {styled} from "@mui/material/styles";
import {Button, Checkbox, FormControl, IconButton, Typography} from "@mui/material";

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
    marginBottom: 5,
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

export const ListNoImageBox = styled('div')(({ theme }) => ({
    width: 69,
    height: 45,
    border: '1px dashed #6F6F6F',
    background: '#3B3B3B',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 14
}));

export const ListImageBox = styled(ListNoImageBox)(({ theme }) => ({
    border: '1px solid #6F6F6F',
    overflow: 'hidden',
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
}));

export const ListBoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 160,
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 400,
        marginLeft: 15,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
    }
}));

export const ImageBoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight:400,
        marginTop: 8
    }
}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    marginTop: 25
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    marginBottom: 10,
    '&:last-child':{
        marginBottom: 0
    }
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 132,
        fontSize: '1rem',
        fontWeight: 700,
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: 1
    }
}));

export const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 522,
        fontSize: '0.875rem',
        color: '#fff',
        opacity: 0.6,
        fontWeight: 400,
        lineHeight: 1.3,
        marginTop: 8,
    }
}));

export const ImageFileBox = styled(FormControl)(({ theme}) => ({
    '& .MuiInputBase-root':{
        width: 393,
        height: 34,
        background: '#3C3C3C',
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        paddingRight: 8,
        '& input':{
            padding: "0 0 0 8px",
            fontSize: "0.875rem",
            color: "#fff",
            fontWeight: 'normal',
            opacity: 1,
            "&::placeholder": {
                color: "#fff",
                opacity: 0.7,
                fontWeight: 'normal'
            },
        },
        '&:hover':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "1px solid #6F6F6F",
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border: "1px solid #6F6F6F",
        },
        '&.Mui-focused':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "1px solid #6F6F6F",
            },
        },
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

export const AddTagButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background: '#2E8C6A',
        borderRadius: 4,
        width: 90,
        height: 34,
        boxSizing: 'border-box',
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 700,
        marginLeft: 14,
        textTransform: 'none',
        "&:hover": {
            background: "#2E8C6A",
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    },
}));

export const InputBox = styled('input')(({ theme }) => ({
    display:'none'
}));

export const AddExistingEmpty = styled('div')(({ theme }) => ({
    width: 336,
    height: 189,
    boxSizing: 'border-box',
    border: '1px dashed #6f6f6f',
    boxShadow: '0px 1.6414103507995605px 1.6414103507995605px 0px rgba(0, 0, 0, 0.25)',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    '& p':{
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 400,
        marginTop: 8
    }
}));

export const AddExistingBox = styled('div')(({ theme }) => ({
    width: 336,
    height: 189,
    boxSizing: 'border-box',
    border: '1px solid #6f6f6f',
    boxShadow: '0px 1.6414103507995605px 1.6414103507995605px 0px rgba(0, 0, 0, 0.25)',
    padding: '16px 15px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#6f6f6f',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
}));

export const RadioBox = styled(Checkbox)(({ theme }) => ({
    '&.MuiButtonBase-root':{
        padding: 0,
        '&:hover':{
            background:'transparent'
        },
    },
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
            fontSize: '1rem',
            color: '#fff',
            marginRight: 40,
            marginLeft: 8
        }
    }
}));
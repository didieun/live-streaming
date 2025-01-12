import {styled} from "@mui/material/styles";
import {FormControl, TextareaAutosize, Typography} from "@mui/material";

export const EditContainer = styled('div')(({ theme }) => ({
    width: 709,
    padding: '30px 21px',
    boxSizing: 'border-box'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center',
}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    marginBottom: 14
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

export const JustifyEnd = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'flex-end'
}));

export const ErrorText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 400,
        color: '#EF222E',
        marginLeft: 6
    }
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 145,
        fontSize: '1rem',
        fontWeight: 700,
        color: 'rgba(24, 24, 29, 0.7)',
        lineHeight: 1
    }
}));

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: 522,
    fontSize: '0.875rem',
    fontWeight: 400,
    color:'#18181D',
    padding: '10px 12px',
    border:'1px solid #DADADA',
    borderRadius: 4,
    background:'transparent',
    resize: 'none',
    boxSizing:'border-box',
    '&::placeholder':{
        color:'#18181d',
        opacity: 0.3
    },
    '&:focus':{
        outline: '0',
        border: '2px solid #23B882'
    },
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#D9D9D9',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
}));

export const ErrorStyledTextarea = styled(StyledTextarea)(({ theme }) => ({
    border:'1px solid #EF222E',
    '&:focus':{
        outline: '0',
        border: '1px solid #EF222E'
    },
}));

export const NumberText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        opacity: 0.3,
        fontWeight: 500,
        lineHeight: 1
    }
}));

export const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 522,
        fontSize: '0.875rem',
        color: '#18181d',
        opacity: 0.6,
        fontWeight: 400,
        lineHeight: 1.3,
        marginTop: 8,
        marginLeft: 145,
        marginBottom: 26
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
            fontSize: '1rem',
            color: '#18181d',
            marginRight: 40,
            marginLeft: 8
        }
    }
}));

export const ImageBox = styled('div')(({ theme }) => ({
    width: 267,
    aspectRatio: 16 / 9,
    background: '#eee',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    boxSizing: 'border-box',
    overflow: 'hidden',
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
}));

export const NoImageBox = styled(ImageBox)(({ theme }) => ({
    border: '1px dashed #DADADA',
}));

export const FlexMarginTop = styled(Flex)(({ theme }) => ({
    marginTop: 24
}));

export const ImageText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        opacity: 0.6,
        fontWeight: 500,
        marginTop: 8,
        textAlign: 'center'
    }
}));
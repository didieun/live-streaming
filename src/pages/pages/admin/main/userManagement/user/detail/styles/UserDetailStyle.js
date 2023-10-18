import {styled} from "@mui/material/styles";
import {Button, TextareaAutosize, Typography} from "@mui/material";

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.875rem',
        color: '#000',
        fontWeight: 700,
        marginBottom: 20
    }
}));

export const BackButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 30,
        "&:hover": {
            background: "transparent",
        },
        '& p':{
            textTransform: 'none',
            fontSize: '0.875rem',
            color: '#848589',
            fontWeight: 'bold',
            marginLeft: 4
        }
    },
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    '& .MuiStack-root':{
        paddingTop: 0
    }
}));

export const ButtonPosition = styled(AlignCenter)(({ theme }) => ({
    position: 'absolute',
    bottom: 5,
    right: 0
}));

export const JustifySpace = styled(AlignCenter)(({ theme }) => ({
    justifyContent: 'space-between',
}));

export const JustifySpaceWidth = styled(JustifySpace)(({ theme }) => ({
    width: 522
}));

export const TableTitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.5rem',
        color: '#18181d',
        fontWeight: 500,
    }
}));

export const TabBox = styled('div')(({ theme }) => ({
    marginTop: 50,
    position: 'relative',
    marginBottom: 28
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 230,
        height: 36,
        borderRadius: 4,
        background: '#18181d',
        color: '#fff',
        fontSize: '0.938rem',
        fontWeight: 700,
        textTransform: 'none',
        boxSizing: 'border-box',
        '&:hover':{
            background: '#18181d'
        }
    }
}));

export const ButtonLineStyle = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background: '#fff',
        border: '1px solid #18181d',
        color: '#18181d',
        marginRight: 21,
        '&:hover':{
            background: '#fff'
        },
        '&.Mui-disabled':{
            background: '#969696',
            border:'1px solid #969696',
            color: '#fff',
            opacity: 1
        },
    }
}));

export const ButtonGreenLineStyle = styled(ButtonLineStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        border: '1px solid #2E8C6A',
        color: '#2E8C6A',
        marginLeft: 21,
        marginRight: 0
    }
}));

export const SaveButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 100,
        background: '#2673E5',
        marginLeft: 16,
        '&:hover':{
            background: '#2673E5'
        }
    }
}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    marginTop: 14
}));

export const JustifyEnd = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'flex-end'
}));

export const AlignEnd = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'flex-end'
}));

export const JustifySpace2 = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent:'space-between'
}));

export const NotesText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        fontWeight: 700,
        color: 'rgba(24, 24, 29, 0.7)',
        lineHeight: 1,
        marginRight: 20
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
        fontSize: '0.875rem',
        color: '#18181d',
        opacity: 0.6,
        fontWeight: 400,
        lineHeight: 1.3,
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        color: '#18181d',
        fontWeight: 400,
        textAlign: 'right'
    }
}));

export const RedText = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: '#EF222E',
    }
}));
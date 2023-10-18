import {styled} from "@mui/material/styles";
import {Box, Button, FormControl, MenuItem, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: 'calc(100vh - 54px - 140px - 280px - 80px)',
    boxSizing: 'border-box',
}));

export const MainContainer = styled(Container)(({ theme }) => ({
    minHeight: 'calc(100vh - 54px - 230px - 280px - 80px)',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

export const ContainerIn = styled('div')(({ theme }) => ({
    width: 1200,
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '30px 0'
}));

export const MainContainerIn = styled(ContainerIn)(({ theme }) => ({
    padding: '40px 0'
}));

//main
export const FlexEnd = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent:'flex-end'
}));

export const LanguageBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    marginBottom: 40
}));

export const LanguageBox2 = styled(LanguageBox)(({ theme }) => ({
    marginBottom: 0
}));

export const FormControlBox = styled(FormControl)(({ theme }) => ({
    '& .MuiSelect-select':{
        minWidth: 74,
        padding: '5px 30px 5px 4px !important',
        fontSize: '1rem',
        height:26,
        boxSizing:'border-box',
        color:'#18181d',
        display:'flex',
        alignItems: 'center',
        background: 'transparent',
        fontWeight: 700
    },
    '& input':{
        fontSize: '0.875rem',
        color:'#18181d',
        fontWeight: 700
    },
    '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
        border: 0,
        borderRadius: 0
    },
}));

export const Menu = styled(MenuItem)(({ theme }) => ({
    '&.MuiMenuItem-root':{
        width: '100%',
        fontSize: '1rem',
        color:'#323232',
        boxSizing: 'border-box',
        height: 28,
        '&:hover':{
            background: '#eee'
        },
        '&.Mui-selected':{
            background: '#eee'
        },
    }
}));

export const GridBox = styled('div')(({ theme }) => ({
    width: '100%',
    display:'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: '230px 230px',
    gap:36
}));

export const GridBoxIn = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '35px 0',
        borderRadius: 30,
        background:'#fff',
        boxShadow:'0px 7px 10px 0px rgba(0, 0, 0, 0.25)',
        boxSizing: 'border-box',
        textTransform:'none',
        border: '4px solid #fff',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        fontSize: '1.75rem',
        color: '#18181d',
        fontWeight: 700,
        "&:hover": {
            background: "#fff",
            border: '4px solid #23B882'
        },
        '&:nth-child(7)':{
            gridColumn: 'span 2'
        },
    },
}));

//answer
export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-between'
}));

export const BreadcrumbButton  = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background: 'transparent',
        fontSize: '0.875rem',
        color: '#18181d',
        opacity: 0.7,
        fontWeight: 400,
        textTransform: 'none',
        marginRight: 6,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const BreadcrumbBoldButton  = styled(BreadcrumbButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        opacity: 1,
        fontWeight: 700,
        marginLeft: 6,
        marginRight: 0
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '2.25rem',
        fontWeight: 700,
        color:'#18181d',
        marginTop: 60,
        marginBottom: 20
    }
}));

export const QuestionButton  = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: '100%',
        backgroundColor: '#fff',
        minHeight: 66,
        padding: '10px 15px 10px 27px',
        marginBottom: 4,
        borderRadius: 4,
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        "&:hover": {
            background: "#fff",
        },
        '& p':{
            width: 'calc(100% - 37px)',
            textTransform: 'none',
            fontSize: '1.125rem',
            color: '#18181d',
            fontWeight: 500,
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
            textAlign:'left',
            '& span':{
                color: '#23B882'
            }
        }
    },
}));

export const AnswerBox  = styled('div')(({ theme }) => ({
    width: '100%',
    maxHeight: 1300,
    background: '#fff',
    padding: '16px',
    borderRadius: 4,
    overflowY: 'auto',
    '& p':{
        fontSize: '1.125rem',
        color: '#18181d'
    },
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#d9d9d9',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
}));

//search
export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.5rem',
        fontWeight: 400,
        color: '#18181d',
        opacity: 0.7,
        marginBottom: 20,
        marginTop: 60
    }
}));

export const GreenText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '2.25rem',
        fontWeight: 700,
        color: '#23B882',
        marginLeft: 8,
        marginBottom: 20,
        marginTop: 60
    }
}));

export const FlexColumn = styled('div')(({ theme }) => ({
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center'
}));

export const TextStyle2 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        fontWeight: 400,
        color: '#18181d',
        marginTop: 24,
        '& span':{
            fontWeight: 700,
            textDecoration:'underline',
            cursor:'pointer'
        }
    }
}));
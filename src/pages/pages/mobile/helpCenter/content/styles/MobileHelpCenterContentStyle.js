import {styled} from "@mui/material/styles";
import {Box, Button, FormControl, MenuItem, Typography} from "@mui/material";
import {smallFooterHeight} from "../../../../bak_viewer/streaming/Streaming";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: 'calc(100vh - 54px - 83px - 230px - 100px)',
    boxSizing: 'border-box',
    padding: '44px 12px 28px'
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
    marginBottom: 8,
    marginTop: 20
}));

export const MainLanguageBox = styled(LanguageBox)(({ theme }) => ({
    marginTop: 36
}));

export const FormControlBox = styled(FormControl)(({ theme }) => ({
    '& .MuiSelect-select':{
        minWidth: 74,
        padding: '5px 30px 5px 4px !important',
        fontSize: '0.75rem',
        height:26,
        boxSizing:'border-box',
        color:'#18181d',
        display:'flex',
        alignItems: 'center',
        background: 'transparent',
        fontWeight: 700,
        fontFamily:'Inter',
        letterSpacing: '-0.2px'
    },
    '& input':{
        fontSize: '0.75rem',
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
        fontSize: '0.75rem',
        color:'#323232',
        boxSizing: 'border-box',
        minHeight: 30,
        height: 30,
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
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '107px 107px 107px 107px',
    gap:12,
    padding: '0 12px',
    boxSizing: 'border-box',
    '@media all and (min-width: 768px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: '107px 107px',
    },
}));

export const GridBoxIn = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '12px 0',
        borderRadius: 13,
        background:'#fff',
        boxShadow:'0px 3.25953px 4.65647px 0px rgba(0, 0, 0, 0.25)',
        boxSizing: 'border-box',
        textTransform:'none',
        border: '4px solid #fff',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        fontSize: '0.813rem',
        color: '#18181d',
        fontWeight: 700,
        "&:hover": {
            background: "#fff",
            border: '2px solid #23B882'
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
    '& svg':{
        margin: '0 3px'
    }
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-between'
}));

export const BreadcrumbButton  = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 20,
        padding: 0,
        background: 'transparent',
        fontSize: '0.75rem',
        color: '#18181d',
        opacity: 0.7,
        fontWeight: 400,
        textTransform: 'none',
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
        marginRight: 0,
        '& p':{
            maxWidth: 200,
            fontSize: '0.75rem',
            color: '#18181d',
            opacity: 1,
            fontWeight: 700,
            textAlign: 'left',
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
        }
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        fontWeight: 700,
        color:'#18181d',
        marginTop: 12,
        marginBottom: 8
    }
}));

export const QuestionButton  = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: '100%',
        backgroundColor: '#fff',
        minHeight: 66,
        padding: '10px 8px 10px 12px',
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
            width: 'calc(100% - 24px - 10px)',
            textTransform: 'none',
            fontSize: '0.875rem',
            color: '#18181d',
            fontWeight: 500,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            textAlign:'left',
            lineHeight: '127.836%',
            '& span':{
                color: '#23B882'
            }
        }
    },
}));

export const AnswerBox  = styled('div')(({ theme }) => ({
    width: '100%',
    maxHeight: 600,
    background: '#fff',
    padding: '16px',
    borderRadius: 4,
    overflowY: 'auto',
    '& p':{
        fontSize: '0.875rem',
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
        fontSize: '0.813rem',
        fontWeight: 400,
        color: '#18181d',
        opacity: 0.7,
        marginBottom: 8,
        marginTop: 12
    }
}));

export const GreenText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        fontWeight: 700,
        color: '#23B882',
        marginLeft: 4,
        marginBottom: 8,
        marginTop: 12
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
        fontSize: '0.875rem',
        fontWeight: 400,
        color: '#18181d',
        marginTop: 24,
        textAlign: 'center',
        '& span':{
            fontWeight: 700,
            textDecoration:'underline',
            cursor:'pointer'
        }
    }
}));
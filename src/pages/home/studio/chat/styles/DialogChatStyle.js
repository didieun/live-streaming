import {styled} from "@mui/material/styles";
import {IconButton, Input, TableContainer, TextareaAutosize, Typography} from "@mui/material";

export const NotesBox = styled('div')(({ theme, width }) => ({
    width: width,
    height: 400,
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
    background: '#fff',
    border: '1px solid #dadada',
    borderRadius: 10,
    boxSizing: 'border-box'
}));

export const NotesBoxIn = styled('div')(({ theme }) => ({
    width:'100%',
    height: 310,
    padding: '15px 13px',
    boxSizing: 'border-box',
    overflowY: 'auto',
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

export const NotesMessageBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 90,
    background: '#eee',
    borderRadius: '0 0 10px 10px',
    padding: '10px 14px',
    boxSizing: 'border-box',
    display:'flex',
    alignItems:'center',
}));

export const SendButton = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 50,
        height: 50,
        padding: 0,
        background:'rgba(35, 184, 130, 0.1)',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: 15,
        boxSizing: 'border-box',
        "&:hover": {
            background:'rgba(35, 184, 130, 0.1)',
            '& path':{
                opacity: 0.8
            }
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: 'calc(100% - 65px)',
    fontSize: '0.875rem',
    fontWeight: 400,
    color:'#18181d',
    padding: 0,
    border:0,
    background:'transparent',
    resize: 'none',
    '&::placeholder':{
        color:'#18181d'
    },
    '&:focus':{
        outline: 0
    },
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

export const FlexRow = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    marginBottom: 8
}));

export const ChatShow = styled('div')(({ theme }) => ({
    display:'flex',
    marginBottom: 6
}));

export const AvatarBox = styled('div')(({ theme }) => ({
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: "#eeeeee",
    marginRight: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #848589",
    boxSizing: "border-box",
    overflow:'hidden',
    '& img':{
        width: '100%'
    },
    '& svg':{
        width: 15,
        height: 15
    }
}));

export const ChatRightBox = styled('div')(({ theme }) => ({
    width: 'calc(100% - 24px - 6px)'
}));

export const UserName = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 400,
        color: 'rgba(24, 24, 29, 0.7)',
    }
}));

export const MyName = styled(UserName)(({ theme }) => ({
    '&.MuiTypography-root':{
        display:'inline-block',
        background: '#23b882',
        padding: '0 3px',
        color: '#fff'
    }
}));

export const ChatText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        fontWeight: 500
    }
}));

export const ChatDateText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.625rem',
        color: '#18181d',
        fontWeight: 400,
        '& span':{
            fontWeight: 700,
            color: '#2E8C6A',
            marginLeft: 3
        }
    }
}));

export const EmptyText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 400,
        color: 'rgba(24, 24, 29, 0.7)'
    }
}));

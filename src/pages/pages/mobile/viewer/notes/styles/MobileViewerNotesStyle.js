import {styled} from "@mui/material/styles";
import {OutlinedInput, Typography} from "@mui/material";

export const NotesBox = styled('div')(({ theme, width }) => ({
    width: width,
    height: 200,
    background: 'transparent',
    border: '1px solid #6f6f6f',
    borderRadius: 10,
    boxSizing: 'border-box',
    overflow: 'hidden',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 15,
    '@media all and (min-width: 700px)': {
        height: 400,
    },
}));

export const NotesBoxIn = styled('div')(({ theme }) => ({
    width:'100%',
    height: 'calc(100% - 48px)',
    padding: '0 17px',
    boxSizing: 'border-box',
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

export const OutlinedInputBox = styled(OutlinedInput)(({ theme, width }) => ({
    '&.MuiInputBase-root':{
        width: '100%',
        height: 48,
        background: '#3B3B3B',
        borderRadius: 0,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        border: '0 0 10px 10px',
        '& input':{
            padding: "0 16px 0 16px",
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
                // border: "1px solid #DADADA",
                border: "0",
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border: "0",
        },
        '&.Mui-focused':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "0",
            },
        },
    }
}));

export const FlexRow = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    marginBottom: 8
}));

export const ChatShowBox = styled('div')(({ theme }) => ({
    borderTop: '1px solid #6f6f6f',
    paddingTop: 14,
    paddingBottom: 5,
    '&:first-of-type':{
        borderTop: 0,
    }
}));

export const ChatShow = styled('div')(({ theme }) => ({
    display:'flex',
    marginBottom: 14
}));

export const TitleDateText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        color: 'rgba(255, 255, 255, 0.4)',
        fontWeight: 700,
        marginBottom: 14
    }
}));

export const ChatShowRight = styled(ChatShow)(({ theme }) => ({
    justifyContent: 'flex-end'
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
    boxShadow:'0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
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
        fontSize: '0.75rem',
        fontWeight: 400,
        color: 'rgba(255, 255, 255, 0.7)',
    }
}));

export const AlignEnd = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-end'
}));

export const ChatTextBox = styled('div')(({ theme }) => ({
    // maxWidth: 290,
    maxWidth: 'calc(100% - 52px)',
    borderRadius: '0 20px 20px 20px',
    border: '1px solid #23B882',
    background: '#2e8c6a',
    padding: 9.5,
    '& p':{
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 400
    }
}));

export const ChatTextBoxRight = styled(ChatTextBox)(({ theme }) => ({
    borderRadius: '20px 0 20px 20px',
    border: '1px solid #44B08A',
    background: '#3A6757',
}));

export const ChatDateText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.625rem',
        color: '#fff',
        opacity: 0.4,
        fontWeight: 400,
        marginLeft: 8
    }
}));

export const ChatDateTextRight = styled(ChatDateText)(({ theme }) => ({
    '&.MuiTypography-root':{
        marginRight: 8,
        marginLeft: 0
    }
}));

export const EmptyText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 600,
        color: 'rgba(255, 255, 255, 0.4)',
        marginTop: 16
    }
}));

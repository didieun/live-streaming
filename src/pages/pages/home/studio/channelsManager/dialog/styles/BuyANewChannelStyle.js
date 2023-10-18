import {styled} from "@mui/material/styles";
import {Button, FormControl, IconButton, Radio, Typography} from "@mui/material";

export const EditContainer = styled('div')(({ theme }) => ({
    width: 658,
    maxHeight: 'calc(100vh - 300px)',
    padding: '30px 21px',
    boxSizing: 'border-box',
    overflowY:'auto',
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

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center',
}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'flex-start'
}));

export const MarginBottom30 = styled('div')(({ theme }) => ({
    marginBottom: 30
}));

export const PricePlanBox = styled('div')(({ theme }) => ({
    marginTop: 20,
    marginLeft: 156
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 156,
        fontSize: '1rem',
        fontWeight: 700,
        color: 'rgba(24, 24, 29, 0.7)',
        lineHeight: 1
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        fontWeight: 400,
        color: '#18181d',
        lineHeight: 1
    }
}));

export const BoldTextStyle = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontWeight: 700,
    }
}));

export const ToChangeButton = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'space-between',
    borderRadius: 10,
    background: '#fff',
    border: '1px solid #dadada',
    boxShadow:'0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    marginBottom: 10,
    cursor: 'pointer',
    padding: '9px 13px',
    boxSizing: 'border-box',
    '&:last-child':{
        marginBottom: 0,
    }
}));

export const ButtonBoldText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.063rem',
        color: '#18181d',
        fontWeight: 700
    }
}));

export const ButtonText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        fontWeight: 500,
        opacity: 0.7,
        marginTop: 4
    }
}));

export const RadioBox = styled(Radio)(({ theme }) => ({
    '&.MuiButtonBase-root':{
        padding: 0,
        marginRight: 20,
        '& svg':{
            width: 21,
            height: 21
        }
    }
}));

export const ChannelBox = styled(FormControl)(({ theme }) => ({
    '& .MuiInputBase-root':{
        width: 308,
        height: 34,
        background: '#eee',
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        '& input':{
            padding: "0 8px 0",
            fontSize: "0.875rem",
            color: "#18181d",
            fontWeight: 'normal',
            opacity: 1,
            "&::placeholder": {
                color: "#18181d",
                opacity: 0.7,
                fontWeight: 'normal'
            },
        },
        '&:hover':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "1px solid #dadada",
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border: "1px solid #dadada",
        },
        '&.Mui-focused':{
            background: '#fff',
            '& .MuiOutlinedInput-notchedOutline':{
                border: "2px solid #23b882",
            },
        },
        '&.Mui-error':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "2px solid #EF222E",
            },
        }
    },
}));

export const DuplicateCheckButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background: '#18181D',
        borderRadius: 4,
        width: 130,
        height: 34,
        boxSizing: 'border-box',
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 700,
        marginLeft: 12,
        textTransform: 'none',
        "&:hover": {
            background: "#969696",
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    },
}));

export const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        opacity: 0.6,
        fontWeight: 400,
        lineHeight: 1.3,
        marginTop: 4,
        marginLeft: 156,
    }
}));

export const RedSubText = styled(SubText)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: '#EF222E',
        opacity: 1,
    }
}));

export const ChannelNumberBox = styled('div')(({ theme }) => ({
    width: 308,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 156,
    marginTop: 5
}));

export const WarningBox = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& p':{
        fontSize: '0.875rem',
        color: '#EF222E',
        fontWeight: 400,
        marginLeft: 4
    },
    '& path':{
        stroke: '#EF222E'
    }
}));

export const CheckBox = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& p':{
        fontSize: '0.875rem',
        color: '#2E8C6A',
        fontWeight: 400,
        marginLeft: 4
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

export const TagBoxWidth = styled('div')(({ theme }) => ({
    width: 450
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
        background: '#18181D',
        borderRadius: 4,
        width: 99,
        height: 34,
        boxSizing: 'border-box',
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 700,
        marginLeft: 12,
        marginBottom: 18,
        textTransform: 'none',
        "&:hover": {
            background: "#969696",
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    },
}));

export const JustifyEnd = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'flex-end'
}));

export const TagsBox = styled(AlignCenter)(({ theme }) => ({
    marginTop: 10
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
        marginRight: 6,
        paddingBottom: 2
    },
    '&:last-child':{
        marginRight: 0
    }
}));

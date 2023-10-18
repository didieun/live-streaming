import {styled} from "@mui/material/styles";
import {
    Button,
    FormControlLabel,
    FormGroup, IconButton,
    Radio,
    Switch,
    TextareaAutosize,
    TextField,
    Typography
} from "@mui/material";
import SwitchNoIcon from "../../../common/images/SwitchNoIcon.svg";
import SwitchCheckIcon from "../../../common/images/SwitchCheckIcon.svg";

export const Container = styled('div')(({ theme }) => ({

}));

export const ContainerIn = styled('div')(({ theme }) => ({
    maxHeight: 'calc(100vh - 300px)',
    padding: '0 21px',
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

export const BoxStyle = styled('div')(({ theme }) => ({
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    padding: '18px 20px',
    marginBottom: 0,
    background: '#fff',
}));

export const ColumnCenter = styled('div')(({ theme }) => ({
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
}));

export const ProfileBox = styled('div')(({ theme }) => ({
    width: 195,
    height: 195,
    borderRadius: "50%",
    background: "#eeeeee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #DADADA",
    boxSizing: "border-box",
    overflow:'hidden',
    '& img':{
        width: '100%'
    },
    '& svg':{
        width: 100,
        height: 100
    }
}));

export const BoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 130,
        fontSize: '0.938rem',
        fontWeight: 500,
        color: '#18181d',
    }
}));

export const BoxText2 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 400,
        color: '#18181d',
    }
}));

export const BoxText3 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#18181d',
        fontWeight: 700,
    }
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

export const RedText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        fontWeight: 700,
        color: '#EF222E',
        marginTop: 8
    }
}));

export const WarningBox2 = styled(WarningBox)(({ theme }) => ({
    alignItems: 'flex-start',
    marginTop: 3
}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'flex-start'
}));

export const FlexMarginTop = styled(Flex)(({ theme }) => ({
    marginTop: 70
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    width: 284,
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center'
}));

export const FlexEnd = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent:'flex-end',
    width: 523,
}));

export const FlexMarginBottom = styled(Flex)(({ theme }) => ({
    marginBottom: 30
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const AlignCenterMargin = styled(AlignCenter)(({ theme }) => ({
    marginBottom: 30
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
    '&.MuiFormControl-root':{
        width: 284,
    },
    '& .MuiInputBase-root':{
        width: '100%',
        height: 34,
        background: '#eee',
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        padding: '0 8px !important',
        '& input':{
            padding: "0 !important",
            fontSize: "0.875rem",
            color: "#18181d",
            fontWeight: 700,
            opacity: 1,
            "&::placeholder": {
                color: "#18181d",
                opacity: 0.4,
                fontWeight: 'normal',
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
            '& .MuiOutlinedInput-notchedOutline':{
                border: "2px solid #23b882",
            },
        },
        '&.Mui-error':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "2px solid #ea2a58",
            },
        },
        '& .MuiInputAdornment-root':{
            '& p':{
                fontSize: "0.875rem",
                color: "#18181d",
                fontWeight: '700',
                opacity: 1,
            }
        }
    }
}));

export const StyledPasswordInput = styled(StyledInput)(({ theme }) => ({
    '&.MuiFormControl-root':{
        width: 251,
        marginRight: 8
    },
}));

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: 523,
    height: 73,
    fontSize: '0.875rem',
    fontWeight: 700,
    color:'#18181D',
    padding: '10px 12px',
    border:'1px solid #DADADA',
    borderRadius: 4,
    background:'transparent',
    resize: 'none',
    boxSizing:'border-box',
    overflowY: 'auto',
    '&::placeholder':{
        color:'#18181d',
        opacity: 0.3,
        fontWeight: 400,
    },
    '&:focus':{
        outline: '0',
        border: '2px solid #23B882'
    },
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

export const ButtonStyle1 = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 125,
        height: 34,
        borderRadius: 4,
        background: '#18181d',
        color: '#fff',
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'none',
        marginTop: 8,
        '&:hover':{
            background: '#18181d'
        }
    },
}));

export const LineButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 130,
        height: 34,
        borderRadius: 4,
        background: '#fff',
        color: '#18181d',
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'none',
        border: '1px solid #18181d',
        boxSizing: 'border-box',
        marginTop: 14,
        '&:hover':{
            background: '##fff'
        }
    },
}));

export const LineButtonStyle2 = styled(LineButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 180,
        marginTop: 0,
    },
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const InputBox = styled('input')(({ theme }) => ({
    display:'none'
}));

export const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        opacity: 0.6,
        fontWeight: 400,
        lineHeight: 1.3,
        marginTop: 8,
        '& span':{
            color: '#EF222E',
        }
    }
}));

export const NumberText = styled(SubText)(({ theme }) => ({
    '&.MuiTypography-root':{
        marginTop: 3,
    }
}));

export const ActionBox = styled('div')(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 21px 20px',
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-end',
    background: '#fff'
}));

export const ActionBoxStart = styled(ActionBox)(({ theme }) => ({
    justifyContent:'flex-start',
}));


export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 140,
        height: 43,
        padding: '0 40px',
        borderRadius: 5,
        background: '#fff',
        fontSize: '1rem',
        color: 'rgba(24, 24, 29, 0.7)',
        border: '1px solid #848589',
        fontWeight: 'bold',
        textTransform: "none",
        boxSizing: 'border-box',
        marginRight: 20,
        "&:hover": {
            background: "rgba(255, 255, 255, 0.8)",
            color: 'rgba(24, 24, 29, 0.8)',
            border: '1px solid rgba(132, 133, 137, 0.8)'
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    },
}));

export const ControlButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background: '#23B882',
        marginRight: 0,
        border: 0,
        color: '#fff',
        "&:hover": {
            background: "rgba(35, 184, 130, 0.8)",
            border: 0,
            color: '#fff',
        },
    },
}));

export const DeleteButton = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background: '#EF222E',
        marginRight: 0,
        border: 0,
        color: '#fff',
        "&:hover": {
            background: "rgba(239, 34, 46, 0.8)",
            border: 0,
            color: '#fff',
        },
    },
}));

export const CheckBox = styled('div')(({ theme, check }) => ({
    display:'flex',
    marginTop: 5,
    '& p':{
        fontSize: '0.875rem',
        color: check ? '#2E8C6A' : 'rgba(24, 24, 24, 0.6)',
        fontWeight: 400,
        marginLeft: 4
    },
    '& svg':{
        marginTop: 3,
        '& path':{
            stroke: check ? '#2E8C6A' : 'rgba(24, 24, 24, 0.6)',
        }
    }
}));

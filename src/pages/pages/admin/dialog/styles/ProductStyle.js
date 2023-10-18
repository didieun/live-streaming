import {styled} from "@mui/material/styles";
import {
    Button, FormControl,
    FormControlLabel, IconButton, Input,
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

export const BoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 146,
        fontSize: '0.938rem',
        fontWeight: 500,
        color: '#18181d',
    }
}));

export const BoxText2 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        fontWeight: 400,
        color: '#18181d',
    }
}));

export const BoxText3 = styled(BoxText2)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 434,
        fontWeight: 700,
    }
}));

export const RedText = styled(BoxText2)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: '#EF222E',
        fontWeight: 700
    }
}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'flex-start'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center'
}));

export const FlexEnd = styled('div')(({ theme }) => ({
    width: 434,
    display:'flex',
    justifyContent:'flex-end'
}));

export const FlexMarginBottom = styled(Flex)(({ theme }) => ({
    marginBottom: 30
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
    '&.MuiFormControl-root':{
        width: 434,
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
            '&::-webkit-inner-spin-button':{
                WebkitAppearance:'none',
                margin: 0
            },
            '&::-webkit-outer-spin-button':{
                WebkitAppearance:'none',
                margin: 0
            }
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

export const StyledTextareaBox = styled('div')(({ theme }) => ({
    width: 434,
    height: 73,
    padding: '10px 12px',
    border:'1px solid #DADADA',
    borderRadius: 4,
    background:'transparent',
    boxSizing:'border-box',
    overflowY: 'auto',
    '& p':{
        fontSize: '0.875rem',
        fontWeight: 700,
        color:'#18181D',
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

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: 434,
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

export const StyledInput2 = styled(StyledInput)(({ theme }) => ({
    '&.MuiFormControl-root':{
        width: 110,
        marginRight: 10
    },
    '& input':{
        textAlign: 'right'
    },
}));

export const StyledInput3 = styled(StyledInput)(({ theme }) => ({
    '&.MuiFormControl-root':{
        width: 284,
    },
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

export const SubText2 = styled(SubText)(({ theme }) => ({
    '&.MuiTypography-root':{
        marginLeft: 32,
        marginTop: 0,
        marginBottom: 30
    }
}));

export const SubTextMargin = styled(SubText)(({ theme }) => ({
    '&.MuiTypography-root':{
        marginTop: 16,
    }
}));

//Checkpoint before Approval dialog
export const LineStyle = styled('div')(({ theme }) => ({
    width: '100%',
    height: 1,
    background: '#dadada',
    marginBottom: 23
}));

export const CheckBoxTex = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.25rem',
        color: '#18181d',
        fontWeight: 500,
        marginBottom: 10,
        '& span':{
            fontWeight: 700
        }
    }
}));

export const FormControlLabelBox = styled(FormControlLabel)(({ theme }) => ({
    '&.MuiFormControlLabel-root':{
        margin: 0,
        '& .MuiSwitch-root':{
            margin: 0,
            order: 2
        },
        '& .MuiFormControlLabel-label':{
            width: 30,
            order: 1,
            fontSize: '0.875rem',
            color: '#18181d',
            opacity: 0.6,
            fontWeight: 400,
        }
    },
}));

export const FormControlLabelCheckBox = styled(FormControlLabel)(({ theme }) => ({
    '&.MuiFormControlLabel-root':{
        margin: 0,
        '& .MuiButtonBase-root':{
            padding: 0
        },
        '& .MuiFormControlLabel-label':{
            marginLeft: 8,
            fontSize: '0.875rem',
            color: '#070a13',
            fontWeight: 400
        }
    }
}));

export const SwitchStyle = styled(Switch)(({ theme }) => ({
    width: 48,
    height: 24,
    padding: 0,
    borderRadius: 99,
    boxSizing: 'border-box',
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(2px) translateY(1px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(24px) translateY(1px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url(${SwitchCheckIcon})`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#1890FF',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#fff',
        width: 20,
        height: 20,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${SwitchNoIcon})`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#9E9E9E',
        borderRadius: 20 / 2,
    },
}));


export const PurchasedPricePlan = styled('div')(({ theme }) => ({
    width: 434,
    display:'flex',
    justifyContent: 'space-between',
    borderRadius: 10,
    background: '#fff',
    border: '1px solid #dadada',
    boxShadow:'0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    marginBottom: 10,
    padding: '9px 13px',
    boxSizing: 'border-box',
    marginTop: 8,
    '&:last-child':{
        marginBottom: 0,
    }
}));

export const PurchasedPricePlanBoldText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.063rem',
        color: '#18181d',
        fontWeight: 700
    }
}));

export const PurchasedPricePlanText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        fontWeight: 500,
        opacity: 0.7,
        marginTop: 4
    }
}));

export const InputBox = styled('input')(({ theme }) => ({
    display:'none'
}));

export const ImageBox = styled('div')(({ theme }) => ({
    width: 133,
    height: 133,
    border: '1px dashed #dadada',
    background: '#fff',
    display:'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const CountBoxIn = styled('div')(({ theme }) => ({
    background: '#fff',
    width: 86,
    height: 30,
    borderRadius: 85,
    boxSizing: 'border-box',
    padding: '3px 7px',
    display:'inline-flex',
    alignItems: 'center',
    justifyContent:'center',
    border: '1px solid #dadada',
    '& p':{
        fontSize: '1.188rem',
        fontWeight: 400,
        color: '#18181d',
    },
    '& .Mui-disabled':{
        '& path':{
            opacity: 0.3
        }
    },
}));

export const PointsBox = styled('div')(({ theme }) => ({
    padding: '12px 20px',
    borderRadius: 10,
    background: '#eee',
    marginTop: 7
}));


export const PointsBoxIn = styled('div')(({ theme }) => ({
    width: 207,
    height: 216,
    display:'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 1.7291090488433838px 3.4582180976867676px 0px rgba(0, 0, 0, 0.25)',
    boxSizing: 'border-box',
    borderRadius: 35,
    border: '1px solid #DADADA',
    background: '#fff',
    padding: '0px 25px',
}));

export const PointsBoxMoney = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        color: '#18181d',
        opacity: 0.7,
        fontWeight: 400,
        marginBottom: 12
    }
}));

export const PointsBoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        color: '#18181d',
        fontWeight: 400,
        marginRight: 12
    }
}));

export const PointsBoxTextColor = styled(PointsBoxText)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: '#2E8C6A',
        marginTop: 10,
        marginRight: 0,
        '& span':{
            fontWeight: 700,
            marginRight: 12
        }
    }
}));

export const PointsBoxTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.188rem',
        color: '#18181d',
        fontWeight: 700,
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

export const InputBox2 = styled(Input)(({ theme }) => ({
    '&.MuiInputBase-root':{
        width: 30,
        margin: '0 5px',
        fontSize: '1.188rem',
        fontWeight: 400,
        color: '#18181d',
        '& input':{
            textAlign: 'center'
        },
        '&:after, &:before':{
            borderBottom: 0
        }
    },
    '&.MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error):before':{
        borderBottom: 0
    },
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

export const ActionBoxSpace = styled(ActionBox)(({ theme }) => ({
    justifyContent:'space-between',
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

export const WarningButton = styled(ButtonStyle)(({ theme }) => ({
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

export const FormControlBox = styled(FormControl)(({ theme }) => ({
    '&.MuiFormControl-root':{
        '& .MuiFormControlLabel-root':{
            margin: 0
        },
        '& .MuiButtonBase-root':{
            padding: 0
        },
        '& .MuiFormControlLabel-label':{
            fontSize: '0.938rem',
            color: '#18181d',
            marginRight: 40,
            marginLeft: 8
        }
    }
}));
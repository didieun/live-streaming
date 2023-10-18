import {styled} from "@mui/material/styles";
import {Button, FormGroup, IconButton, Input, Radio, TextField, Typography} from "@mui/material";

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
    marginBottom: 20,
    borderRadius: 10,
    background: '#eee',
    padding: '18px 20px'
}));

export const BoxStyle2 = styled(BoxStyle)(({ theme }) => ({
    marginTop: 0,
    marginBottom: 0,
    background: '#fff',
}));


export const BoxTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        fontWeight: 700,
        color: '#18181d',
        paddingBottom: 14,
        borderBottom: '1px solid rgba(24, 24, 29, 0.7)',
        marginBottom: 20
    }
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
        width: 404,
        fontSize: '1rem',
        fontWeight: 400,
        color: '#18181d',
    }
}));

export const RedText = styled(BoxText2)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: '#EF222E',
        fontWeight: 700
    }
}));

export const BoxText3 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        fontWeight: 700,
        color: '#18181d',
    }
}));

export const PointText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.25rem',
        fontWeight: 400,
        color: '#18181d',
        '& span':{
            fontSize: '2.5rem',
            color: '#2E8C6A',
            fontWeight: 700,
        }
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

export const FlexMarginBottom = styled(Flex)(({ theme }) => ({
    marginBottom: 30
}));

export const PurchasedPricePlan = styled('div')(({ theme }) => ({
    width: 430,
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

export const TagBox = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));

export const TagBoxIn = styled(Button)(({ theme }) => ({
    background:'#d2d2d2',
    height: 23,
    padding: '0 8px',
    borderRadius: 77,
    marginRight: 6,
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    '& p':{
        fontSize: '0.75rem',
        color:'rgba(24, 24, 29, 0.7)',
        fontWeight: 500,
        textTransform: "none",
    },
    '&:last-child':{
        marginRight:0
    },
    '&:hover':{
        background:'#d2d2d2'
    }
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root':{
        width: 284,
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
            fontWeight: '700',
            opacity: 1,
            "&::placeholder": {
                color: "#18181d",
                opacity: 1,
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
        },
    }
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

export const FormGroupBox = styled(FormGroup)(({ theme }) => ({
    '& .MuiFormControlLabel-root':{
        margin: '0 0 5px',
        alignItems: 'flex-start',
        borderBottom:'1px solid #dadada',
        padding: '10px 0'
    },
    '& .MuiButtonBase-root':{
        padding: 0
    },
    '& .MuiFormControlLabel-label':{
        width: 566,
        paddingLeft: 15
    }
}));

//
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
    }
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
    border: '3px solid #23B882',
    background: '#fff',
    padding: '0px 25px',
    marginTop: 18
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
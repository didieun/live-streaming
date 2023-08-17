import {styled} from "@mui/material/styles";
import {Button, FormControl, IconButton, Typography} from "@mui/material";

export const JustifyCenter = styled('div')(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    alignItems: 'center'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const ContentsIn = styled('div')(({ theme }) => ({
    minWidth: '70%',
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const BoxStyle = styled('div')(({ theme }) => ({
    minWidth: '100%',
    padding: '33px 56px',
    boxSizing:'border-box',
    background:'#fff',
    boxShadow:'0 10px 30px 0 rgba(226, 236, 249, 0.5)',
    borderRadius: 10,
    marginBottom: 8,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

export const IconMargin = styled('div')(({ theme }) => ({
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
}));

export const IconTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        marginRight: 4,
        color: '#333'
    }
}));

export const IconTitleBlue = styled(IconTitle)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: '#2673e5',
    }
}));

export const IconTitleGreen = styled(IconTitle)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: '#3A974C',
    }
}));


export const PointsText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.25rem',
        color: '#18181d',
        '& span':{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#18181d',
        }
    }
}));

export const PointsTextBlue = styled(PointsText)(({ theme }) => ({
    '&.MuiTypography-root':{
        '& span':{
            color: '#2673e5',
        }
    }
}));

export const PointsTextGreen = styled(PointsText)(({ theme }) => ({
    '&.MuiTypography-root':{
        '& span':{
            color: '#3A974C',
        }
    }
}));


export const LineStyle = styled('div')(({ theme }) => ({
    width: 1,
    height: 86,
    background: '#eee',
    margin: '0 44px'
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        fontWeight: 400,
        opacity: 0.7,
        color: '#000',
        marginLeft: 10
    }
}));

//exchange
export const AlignEnd = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'flex-end',
}));

export const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        color: '#18181d',
        opacity: 0.7,
        fontWeight: 400,
        marginBottom: 5
    }
}));

export const IconInfoBox = styled(AlignCenter)(({ theme }) => ({
    '& p':{
        marginRight: 5
    },
    '& svg':{
        marginBottom: 5,
    }
}));

export const SearchBox = styled(FormControl)(({ theme }) => ({
    '& .MuiInputBase-root':{
        width: 158,
        height: 54,
        background: '#eee',
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        '& input':{
            padding: "0 10px ",
            fontSize: "1.125rem",
            color: "#18181d",
            fontWeight: 400,
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
            '& .MuiOutlinedInput-notchedOutline':{
                border: "1px solid #23b882",
            },
        },
    }
}));

export const SettlementButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 180,
        height: 36,
        background:'#969696',
        borderRadius: 4,
        fontSize: '0.938rem',
        color: '#fff',
        fontWeight: 'bold',
        textTransform:'none',
        marginLeft: 40,
        "&:hover": {
            background: "#969696",
        },
    },
}));

export const ExchangeButton = styled(SettlementButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background: "#ef222e",
        marginTop: 20,
        "&:hover": {
            background: "#ef222e",
        },
    },
}));

export const FontSize18 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color: '#18181d',
        lineHeight: 1.38,
        '& span':{
            color: '#2e8c6a',
            fontWeight:'bold'
        }
    }
}));

export const RefreshButtonMargin = styled(ButtonIcon)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        margin: '0 24px'
    },
}));

export const FontSize20 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.25rem',
        color:'#333',
        marginLeft: 11,
        lineHeight: 1
    }
}));

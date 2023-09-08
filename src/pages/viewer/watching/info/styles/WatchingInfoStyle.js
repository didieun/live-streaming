import {styled} from "@mui/material/styles";
import {Button, IconButton, Input, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
    margin: '0 12px 0',
    paddingTop: 17,
    paddingBottom: 12,
    '@media all and (max-width: 1500px)': {
        paddingTop: 12,
        paddingBottom: 8
    },
}));

export const ContainerIn = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const AlignCenterMarginTop = styled(AlignCenter)(({ theme }) => ({
    marginTop: 8
}));

export const TimeText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 400,
        marginLeft: 9,
        '@media all and (max-width: 1500px)': {
            fontSize: '1rem',
        },
    }
}));

export const LiveBox = styled('div')(({ theme }) => ({
    width: 62,
    height: 24,
    borderRadius: 5,
    background:'#ef222e',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    '& p':{
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 3
    },
    '& svg':{
        width: 19,
        height: 19
    },
    '@media all and (max-width: 1500px)': {
        width: 50,
        height: 20,
        borderRadius: 3,
        '& p':{
            fontSize: '0.625rem',
        },
        '& svg':{
            width: 15,
            height: 15
        },
    },
}));

export const DotStyle = styled('div')(({ theme }) => ({
    width: 5,
    height: 5,
    background: '#fff',
    borderRadius: '50%',
    margin: '0 6px',
    '@media all and (max-width: 1500px)': {
        width: 3,
        height: 3,
    },
}));

export const IconColorSize = styled('div')(({ theme }) => ({
    width: 20,
    height: 20,
    marginRight: 6,
    '& svg':{
        width: 20,
        height: 20,
        '& path':{
            stroke: '#848589'
        }
    },
}));

export const ViewersText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color:'#fff',
        fontWeight: 400,
        '& span':{
            color: '#23b882',
            fontWeight: 700
        },
        '@media all and (max-width: 1500px)': {
            fontSize: '1rem',
        },
    }
}));

export const FavoriteButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 180,
        minHeight: 30,
        borderRadius: 138,
        border: '1px solid #6f6f6f',
        background: '#3b3b3b',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        marginLeft: 17,
        '& p':{
            fontSize: '1.125rem',
            color: '#fff',
            fontWeight: 400,
            textTransform: 'none',
            '& span':{
                fontWeight: 700
            }
        },
        '& svg':{
            marginRight: 6,
        },
        "&:hover": {
            background: "rgba(59, 59, 59, 0.8)",
        },
    },
}));

export const ButtonLineStyle = styled('div')(({ theme }) => ({
    width: 1,
    height: 16,
    background: '#848589',
    margin: '0 6px'
}));

export const ShareButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background: 'transparent',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        '&:hover':{
            background: 'transparent'
        },
        '& p':{
            fontSize: '1.125rem',
            color: '#fff',
            fontWeight: 400,
            textTransform: 'none',
            marginLeft: 6
        },
        '& path':{
            stroke:'#848589',
        },
        '@media all and (max-width: 1500px)': {
            '& p':{
                fontSize: '1rem',
            },
            '& svg':{
                width:15,
                height: 15
            }
        },
    }
}));

export const CoinButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 80,
        height: 80,
        borderRadius: 10,
        boxSizing: 'border-box',
        padding: 0,
        background: 'transparent',
        border: '1px solid transparent',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        boxShadow:'0px 8px 10px 0px rgba(0, 0, 0, 0.25) inset',
        marginRight: 17,
        '&:hover':{
            background: '#3c3c3c',
            border: '1px solid #6f6f6f',
        },
        '@media all and (max-width: 1500px)': {
            marginRight: 10,
        },
    }
}));

export const FlexColumn = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& img':{
        width: 84,
        height: 84
    },
}));

export const FlexColumnStart = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
}));

export const PopoverMoneyText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.188rem',
        color: '#fff',
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

export const CountBox = styled(AlignCenter)(({ theme }) => ({
    justifyContent:'center',
    width: '100%',
    margin: '12px 0 16px',
    borderBottom: '1px solid #6F6F6F',
    padding: '0 15px 16px'
}));

export const CountBoxIn = styled('div')(({ theme }) => ({
    background: '#3C3C3C',
    height: 30,
    borderRadius: 85,
    border: '1px solid #6f6f6f',
    boxSizing: 'border-box',
    padding: '3px 7px',
    display:'inline-flex',
    alignItems: 'center',
    '& path':{
        stroke: '#fff'
    },
    '& .Mui-disabled':{
        '& path':{
            opacity: 0.3
        }
    },
}));

export const InputBox = styled(Input)(({ theme }) => ({
    '&.MuiInputBase-root':{
        width: 30,
        margin: '0 5px',
        fontSize: '1.188rem',
        fontWeight: 400,
        color: '#fff',
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

export const PointsBoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 400,
        marginRight: 12
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 150,
        height: 34,
        borderRadius: 99,
        background:'#23B882',
        padding: '0 16px',
        "&:hover": {
            background: "rgba(35, 184, 130, 0.8)",
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
        '& p':{
            fontSize: '0.875rem',
            color: '#fff',
            fontWeight: 400,
            textTransform: 'none',
            '& span':{
                fontWeight: 700
            }
        }
    },
}));

export const LineStyle = styled('div')(({ theme }) => ({
    width: 1,
    height: 42,
    background: 'rgba(255, 255, 255, 0.7)',
    marginRight: 24
}));

export const PointsButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        borderRadius: 0,
        background:'transparent',
        padding: '0',
        "&:hover": {
            background: "transparent",
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const Points = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: 400,
        lineHeight: 1.2,
        marginLeft: 4,
        textTransform: 'none',
        textAlign: 'left',
        '& span':{
            fontSize: '1rem',
            fontWeight: 700
        }
    }
}));

export const BuyPointsButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        borderRadius: 0,
        background:'transparent',
        padding: '0',
        "&:hover": {
            background: "transparent",
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
        '& p':{
            fontSize: '0.875rem',
            color: '#fff',
            fontWeight: 400,
            textTransform: 'none',
            marginRight: 4
        }
    },
}));
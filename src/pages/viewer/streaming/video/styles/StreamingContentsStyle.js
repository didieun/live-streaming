import {styled} from "@mui/material/styles";
import {footerHeight, headerHeight, navWidth} from "../../Streaming";
import {IconButton, Popover, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: `calc(100% - ${navWidth}px)`,
    height: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
    boxSizing:'border-box',
    padding: '53px 12px 19px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
}));

export const ContainerIn = styled('div')(({ theme }) => ({
    width: '100%',
    margin: '0 auto',
    '@media all and (min-width: 2100px)': {
        width: '80%',
    },
    '@media all and (max-height: 1100px)': {
        width: '90%',
    },
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center',
    justifyContent: 'space-between'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center'
}));

export const AlignStart = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'flex-start'
}));

export const MarginRight50 = styled(AlignStart)(({ theme }) => ({
    marginRight: 50
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
            opacity: 0.8,
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: 500,
        margin: '0 6px 0 8px'
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#848589',
        fontWeight: 400,
        marginRight: 8
    }
}));

export const TextBoldStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.875rem',
        color: '#fff',
        fontWeight: 700,
    }
}));

export const VideoBox = styled('div')(({ theme }) => ({
    width: '100%',
    aspectRatio: 16 / 9,
    background:'#848589',
    boxSizing:'border-box',
    marginTop: 10,
    position: 'relative',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}));

export const Position = styled('div')(({ theme }) => ({
    position:'absolute',
    bottom: 12,
    left: 15,
}));
export const SubVideoBox = styled(Position)(({ theme }) => ({
    width: 336,
    aspectRatio: 16 / 9,
    position:'absolute',
    bottom: 12,
    left: 15,
    background:'#dadada',
    boxSizing:'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}));

export const SubVideoVideoCaptureBox = styled(SubVideoBox)(({ theme }) => ({
    border: '3px solid #23B882'
}));

export const SubVideoScreenShareBox = styled(SubVideoBox)(({ theme }) => ({
    bottom: 12,
    right: 15,
    left: 'unset'
}));

export const TextShareBox = styled(Position)(({ theme }) => ({
    bottom: 'unset',
    top: 12,
    right: 15,
    left: 'unset',
    '& p':{
        fontFamily:'Roboto !important',
        fontSize: '2.125rem',
        color: '#42FF00',
        fontWeight: 800,
        lineHeight:1,

    }
}));

export const ImageShareBox = styled(Position)(({ theme }) => ({
    bottom: 'unset',
    top: 12,
}));

export const SceneIconUser = styled('div')(({ theme }) => ({
    width: 73,
    height: 73,
    background: '#fff',
    border: '1px solid #dadada',
    borderRadius: '50%',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg':{
        width: 50,
        height: 50
    }
}))


import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";
import {ButtonStyle} from "../../../admin/main/userManagement/user/detail/styles/UserDetailStyle";

export const Container = styled('div')(({ theme }) => ({

}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
}));

export const AbsoluteButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 271,
        position: 'absolute',
        right: 0,
        bottom: 29,
        padding: '0 10px',
        height: 36,
        background: '#18181d',
        borderRadius: 4,
        fontSize: '0.938rem',
        fontWeight: 800,
        color: '#fff',
        textTransform:'none',
        fontFamily: 'Inter !important',
        letterSpacing: '-0.2px',
        '&:hover':{
            background: '#18181d'
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    }
}));

export const AbsoluteButton2 = styled(AbsoluteButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        right: 271,
        background: '#fff',
        border: '1px solid #18181d',
        color: '#18181d',
        marginRight: 21,
        '&:hover':{
            background: '#fff'
        },
    }
}));

export const AbsoluteButton3 = styled(AbsoluteButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background: '#EF222E',
        bottom: 5,
        '&:hover':{
            background: '#EF222E'
        },
    }
}));
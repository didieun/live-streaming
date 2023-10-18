import {styled} from "@mui/material/styles";
import {Snackbar} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    background: '#F3F3F3',
    '& *, .MuiTypography-root, button':{
        fontFamily:'Inter',
        letterSpacing: '-0.2px'
    }
}));

export const Contents = styled('div')(({ theme }) => ({
    display: 'flex'
}));

//토스트 팝업
export const SnackbarBox = styled(Snackbar)(({ theme }) => ({
    '&.MuiSnackbar-root':{
        top: 65,
        '& .MuiPaper-root':{
            background: '#2F80ED',
            border: '1px solid #DFECFC',
            borderRadius: 11,
            boxShadow: '0px 0px 16.739398956298828px 0px rgba(51, 93, 123, 0.25)',
            padding: '14px 23px',
            boxSizing: 'border-box',
            '& .MuiSnackbarContent-message':{
                display: 'flex',
                padding: 0,
                '& p':{
                    fontSize: '1rem',
                    color: '#fff',
                    fontWeight: 400,
                    marginLeft: 6,
                    '& span':{
                        fontWeight: 700
                    }
                }
            }

        }
    }
}));

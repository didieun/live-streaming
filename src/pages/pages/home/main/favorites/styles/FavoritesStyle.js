import {styled} from "@mui/material/styles";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%'
}));

export const SelectBox = styled('div')(({ theme }) => ({
    position: 'absolute',
    right: 0,
    bottom: 9,
}));
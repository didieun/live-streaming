import React from 'react';
import {ButtonIcon, SearchBox} from "./styles/AdminSearchStyle";
import {InputAdornment, OutlinedInput} from "@mui/material";
import { ReactComponent as SearchIcon } from "../../../../common/images/SearchIcon.svg";

function AdminSearch(props) {
    const {width, placeholder} = props;

    return (
        <SearchBox variant="outlined" width={width}>
            <OutlinedInput
                placeholder={placeholder}
                endAdornment={
                    <InputAdornment position="end">
                        <ButtonIcon disableRipple>
                            <SearchIcon />
                        </ButtonIcon>
                    </InputAdornment>
                }
            />
        </SearchBox>
    );
}

export default AdminSearch;
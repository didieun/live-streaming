import React from 'react';
import {Autocomplete, Paper, InputAdornment} from "@mui/material";
import {ButtonIcon, ListBoxStyle, ListStyle, StyledInput} from "./styles/TagsSearchStyle";
import {ReactComponent as SearchIcon} from "../../common/images/SearchIcon.svg";

const labels = [
    {name: 'game'},
    {name: 'Vtuber'},
    {name: 'gadslekwoqp'},
    {name: 'gevs'},
    {name: 'gbba'},
];

const CustomPaper = (props) => {
    return (
        <ListBoxStyle>
            <Paper {...props} />
        </ListBoxStyle>
    );
};

function TagsSearch(props) {
    const {width} = props;

    return (
        <Autocomplete
            id="custom-input-demo"
            noOptionsText="No Tags"
            PaperComponent={CustomPaper}
            renderOption={(props, option) => (
                <ListStyle {...props}>
                    {option.name}
                </ListStyle>
            )}
            options={labels}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
                <StyledInput
                    width={width}
                    {...params}
                    label=""
                    variant="outlined"
                    fullWidth
                    placeholder="After the tag, add it with the enter key"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <InputAdornment position="end">
                                <ButtonIcon disableRipple>
                                    <SearchIcon />
                                </ButtonIcon>
                            </InputAdornment>
                        )
                    }}
                />
            )}
        />
    );
}

export default TagsSearch;


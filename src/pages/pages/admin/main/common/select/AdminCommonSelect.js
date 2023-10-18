import React from 'react';
import {
    Menu, SelectFormControlBox
} from "./styles/AdminCommonSelectStyle";
import {Box, Select} from "@mui/material";
import {ReactComponent as ArrowDownIcon} from "../../../../common/images/ArrowDownIcon.svg";

function AdminCommonSelect(props) {
    const {filter, handleChangeFilter, menuList} = props;

    return (
        <SelectFormControlBox variant="outlined">
            <Select
                id="filter"
                value={filter}
                onChange={handleChangeFilter}
                IconComponent={(props) => (
                    <Box>
                        <ArrowDownIcon {...props}/>
                    </Box>
                )}
                MenuProps={{
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    },
                    PaperProps: {
                        sx: {
                            '&.MuiPaper-root':{
                                boxShadow: '0 3.6px 6.4px 0 rgba(0, 0, 0, 0.25)',
                                border: '1px solid #dadada',
                                boxSizing:'border-box',
                                '& *': {
                                    fontFamily: 'Inter !important',
                                    letterSpacing: '-0.2px'
                                },
                                '& ul': {
                                    padding: '5px 2px'
                                }
                            },
                        }
                    }
                }}
            >
                {menuList.map((list, i) => (
                    <Menu key={i} value={i} disableRipple>{list.text}</Menu>
                ))}
            </Select>
        </SelectFormControlBox>
    );
}

export default AdminCommonSelect;